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
              <Link href="/trade-history" className={`block py-2 pl-4 text-sm ${pathname === '/trade-history' ? 'font-semibold' : ''}`}>
                Trade History
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/bot-control" className={`block py-2 pl-4 text-sm ${pathname === '/bot-control' ? 'font-semibold' : ''}`}>
                Bot Control
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
        {pathname === '/trade-history' && <div>Trade History Content</div>}
        {pathname === '/bot-control' && <div>Bot Control Content</div>}
        {pathname === '/configuration' && <div>Configuration Content</div>}
        {pathname === '/performance-analysis' && <div>Performance Analysis Content</div>}
      </SidebarInset>
    </SidebarProvider>
  );
}
