'use client';

import {Dashboard} from '@/components/dashboard/dashboard';
import {Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuItem, SidebarProvider} from '@/components/ui/sidebar';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import { BarChart3, Info, Settings, TrendingUp } from 'lucide-react';

export default function Home() {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6" />
            <h2 className="text-xl font-bold">AlgoTrade</h2>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link 
                href="/" 
                className={`flex items-center py-3 px-4 rounded-md transition-colors ${
                  pathname === '/' 
                    ? 'bg-blue-50 text-blue-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <TrendingUp className="mr-3 h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link 
                href="/about" 
                className={`flex items-center py-3 px-4 rounded-md transition-colors ${
                  pathname === '/about' 
                    ? 'bg-blue-50 text-blue-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Info className="mr-3 h-5 w-5" />
                <span>About</span>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link 
                href="/settings" 
                className={`flex items-center py-3 px-4 rounded-md transition-colors ${
                  pathname === '/settings' 
                    ? 'bg-blue-50 text-blue-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Settings className="mr-3 h-5 w-5" />
                <span>Settings</span>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="bg-gray-50 min-h-screen">
        <div className="p-6">
          {pathname === '/' && <Dashboard/>}
          {pathname === '/about' &&
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-bold mb-4 text-gray-800">About AlgoTrade Dashboard</h1>
              <p className="mb-4 text-gray-600 leading-relaxed">
                This dashboard is designed to provide insights and analysis for automated trading strategies. It allows users to monitor the performance of their trading bots, identify areas for improvement, and make informed decisions.
              </p>
              <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-100">
                <h2 className="text-lg font-semibold text-blue-800 mb-2">Key Features</h2>
                <ul className="list-disc pl-5 text-blue-700 space-y-1">
                  <li>Real-time performance monitoring</li>
                  <li>Comprehensive trading analytics</li>
                  <li>Customizable trading strategies</li>
                  <li>Historical data analysis</li>
                </ul>
              </div>
            </div>}
          {pathname === '/settings' &&
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-bold mb-4 text-gray-800">Settings</h1>
              <p className="text-gray-600 mb-6">Configure your AlgoTrade dashboard preferences and trading parameters.</p>
              <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                <p className="text-gray-500 italic">Settings functionality coming soon...</p>
              </div>
            </div>}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
