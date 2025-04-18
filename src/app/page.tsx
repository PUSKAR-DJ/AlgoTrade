
import {Dashboard} from '@/components/dashboard/dashboard';
import {Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuItem, SidebarProvider} from '@/components/ui/sidebar';

export default function Home() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2>AlgoTrade Dashboard</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <a href="#" className="block py-2 pl-4 text-sm">
                Dashboard
              </a>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <a href="#" className="block py-2 pl-4 text-sm">
                Trade History
              </a>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <a href="#" className="block py-2 pl-4 text-sm">
                Bot Control
              </a>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <a href="#" className="block py-2 pl-4 text-sm">
                Configuration
              </a>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <a href="#" className="block py-2 pl-4 text-sm">
                Performance Analysis
              </a>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <Dashboard/>
      </SidebarInset>
    </SidebarProvider>
  );
}
