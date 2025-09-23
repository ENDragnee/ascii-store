'use client';

import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';

// Define types for the API response
interface Order {
  id: string;
  orderCode: string;
  total: number;
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  user: {
    name: string | null;
    email: string | null;
    userProfile: {
      avatarUrl: string | null;
    } | null;
  };
  orderProducts: {
    product: {
      name: string;
      media: { url: string }[];
    };
  }[];
}

interface ApiResponse {
  data: Order[];
  pagination: {
    totalOrders: number;
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
  };
}

// Helper to fetch orders
const fetchOrders = async (
  page: number,
  limit: number,
  sortBy: string,
  sortOrder: 'asc' | 'desc'
): Promise<ApiResponse> => {
  const { data } = await axios.get('/api/orders', {
    params: { page, limit, sortBy, sortOrder },
  });
  return data;
};

// Badge color mapping based on status and theme
const getStatusBadgeVariant = (
  status: Order['status']
): 'default' | 'destructive' | 'secondary' | 'outline' => {
  switch (status) {
    case 'COMPLETED':
      return 'default'; // Uses success color via globals.css
    case 'CANCELLED':
      return 'destructive';
    case 'PENDING':
      return 'secondary';
    default:
      return 'outline';
  }
};

export function OrdersTable() {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [sortConfig, setSortConfig] = useState<{
    sortBy: string;
    sortOrder: 'asc' | 'desc';
  }>({ sortBy: 'createdAt', sortOrder: 'desc' });

  const { data, isLoading, isError, error } = useQuery<ApiResponse, Error>({
    queryKey: ['orders', page, limit, sortConfig.sortBy, sortConfig.sortOrder],
    queryFn: () =>
      fetchOrders(page, limit, sortConfig.sortBy, sortConfig.sortOrder),
    // Corrected: In TanStack Query v5, `keepPreviousData` is now `placeholderData`
    placeholderData: keepPreviousData,
  });

  const handleSort = (column: string) => {
    setSortConfig((prev) => ({
      sortBy: column,
      sortOrder: prev.sortBy === column && prev.sortOrder === 'desc' ? 'asc' : 'desc',
    }));
  };

  const SortableHeader = ({
    column,
    children,
  }: {
    column: string;
    children: React.ReactNode;
  }) => (
    <TableHead>
      <Button
        variant="ghost"
        onClick={() => handleSort(column)}
        className="px-0 hover:bg-transparent"
      >
        {children}
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    </TableHead>
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Recent Orders</CardTitle>
          {data && (
            <p className="text-sm text-muted-foreground">
              {/* Corrected: Safely access pagination properties */}
              Showing {((data.pagination.currentPage - 1) * limit) + 1}-
              {Math.min(data.pagination.currentPage * limit, data.pagination.totalOrders)} of {data.pagination.totalOrders} orders
            </p>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <SortableHeader column="orderCode">Order ID</SortableHeader>
                <TableHead>Product</TableHead>
                <SortableHeader column="user">Buyer</SortableHeader>
                <SortableHeader column="total">Amount</SortableHeader>
                <SortableHeader column="status">Status</SortableHeader>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : isError ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-destructive">
                    Error: {error.message}
                  </TableCell>
                </TableRow>
              ) : (
                // Corrected: Safely map over data and provide type for 'order'
                data?.data.map((order: Order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.orderCode}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                         <Avatar className="h-10 w-10 rounded-lg">
                          <AvatarImage 
                            src={order.orderProducts[0]?.product.media[0]?.url || ''} 
                            alt={order.orderProducts[0]?.product.name} 
                          />
                          <AvatarFallback className="rounded-lg">
                            {order.orderProducts[0]?.product.name?.charAt(0) || 'P'}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">
                            {order.orderProducts[0]?.product.name || 'N/A'}
                            {order.orderProducts.length > 1 && ` + ${order.orderProducts.length - 1} more`}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{order.user.name || 'N/A'}</TableCell>
                    <TableCell className="font-semibold">
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'ETB' }).format(order.total)}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadgeVariant(order.status)}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          <span className='text-sm text-muted-foreground'>
            {/* Corrected: Safely access pagination properties */}
            Page {data?.pagination.currentPage ?? 1} of {data?.pagination.totalPages ?? 1}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((prev) => prev + 1)}
            // Corrected: Safely access hasNextPage
            disabled={!data?.pagination.hasNextPage}
          >
            <span className="sr-only">Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}