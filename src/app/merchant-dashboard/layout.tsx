import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/authOptions';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"

// This layout component protects all routes nested under /merchant-dashboard
export default async function MerchantDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Get the session on the server side
  const session = await getServerSession(authOptions);

  // If no session exists, or if the user is not authenticated, redirect to the login page
  if (!session?.user) {
    redirect('/login');
  }

  // If the session is valid, render the children components (the actual dashboard pages)
  return (              <div className="min-h-screen bg-bg flex">
  
                  <Sidebar />
                  <div className="flex-1 flex flex-col">
  
                    <DashboardHeader />
                    <main className="flex-1 p-6">
                      <div className="max-w-[1400px] mx-auto">{children}</div>
                    </main>
                  </div>
                </div>);
}