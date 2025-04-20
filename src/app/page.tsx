'use client';

import {Dashboard} from '@/components/dashboard/dashboard';
import {Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuItem, SidebarProvider} from '@/components/ui/sidebar';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function Home() {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2>AlgoTrade Dashboard</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/" className={`block py-2 pl-4 text-sm ${pathname === '/' ? 'font-semibold' : ''}`}>
                Dashboard
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/about" className={`block py-2 pl-4 text-sm ${pathname === '/about' ? 'font-semibold' : ''}`}>
                About
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        {pathname === '/' && <Dashboard/>}
        {pathname === '/about' &&
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">About AlgoTrade Dashboard</h1>
            <p className="mb-4">
              This dashboard is designed to provide insights and analysis for automated trading strategies. It allows users to monitor the performance of their trading bots, identify areas for improvement, and make informed decisions.
            </p>
          </div>}
      </SidebarInset>
    </SidebarProvider>
  );
}
