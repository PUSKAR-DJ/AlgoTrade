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
              <Link href="/configuration" className={`block py-2 pl-4 text-sm ${pathname === '/configuration' ? 'font-semibold' : ''}`}>
                Configuration
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/performance-analysis" className={`block py-2 pl-4 text-sm ${pathname === '/performance-analysis' ? 'font-semibold' : ''}`}>
                Performance Analysis
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        {pathname === '/' && <Dashboard/>}
        {pathname === '/configuration' && <div>Configuration Content</div>}
        {pathname === '/performance-analysis' && <div>Performance Analysis Content</div>}
      </SidebarInset>
    </SidebarProvider>
  );
}
