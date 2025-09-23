import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/authOptions';
import prisma from '@/lib/prisma';
import { z } from 'zod';

// Zod schema for validating query parameters
const searchParamsSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  sortBy: z.string().default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
});

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const queryParams = Object.fromEntries(searchParams.entries());

  const validation = searchParamsSchema.safeParse(queryParams);

  if (!validation.success) {
    return NextResponse.json({ errors: validation.error.format() }, { status: 400 });
  }

  const { page, limit, sortBy, sortOrder } = validation.data;

  const skip = (page - 1) * limit;

  try {
    // Using a transaction to get both orders and the total count
    const [orders, totalOrders] = await prisma.$transaction([
      prisma.orders.findMany({
        skip,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
        include: {
          user: {
            select: {
              name: true,
              email: true,
              userProfile: {
                select: {
                  avatarUrl: true,
                }
              }
            },
          },
          orderProducts: {
            include: {
              product: {
                select: {
                  name: true,
                  media: {
                    take: 1,
                    select: {
                      url: true,
                    }
                  }
                },
              },
            },
          },
        },
      }),
      prisma.orders.count(),
    ]);

    const totalPages = Math.ceil(totalOrders / limit);

    return NextResponse.json({
      data: orders,
      pagination: {
        totalOrders,
        totalPages,
        currentPage: page,
        pageSize: limit,
        hasNextPage: page < totalPages,
      },
    });
  } catch (error) {
    console.error('Failed to fetch orders:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}