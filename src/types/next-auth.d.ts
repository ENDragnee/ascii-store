import { User } from '@/generated/prisma/client';
import { type DefaultSession, type DefaultUser } from 'next-auth';
import { Role } from '@/generated/prisma'; // Assuming this import works

export type AuthorizeUser = {
  id: string;
  name: string | null;
  email: string | null;
  role: Role;
};

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: 'ADMIN' | 'USER' | 'SELLER';
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    id: string; 
    role: 'ADMIN' | 'USER' | 'SELLER';
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: 'ADMIN' | 'USER' | 'SELLER';
  }
}
