'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { BarChart3, Info, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type NavigationContextType = {
  isCollapsed: boolean;
};

const NavigationContext = createContext<NavigationContextType>({ isCollapsed: false });

export function useNavigation() {
  return useContext(NavigationContext);
}

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState(() => {
    if (pathname === '/') return 'dashboard';
    if (pathname === '/about') return 'about';
    if (pathname === '/settings') return 'settings';
    return 'dashboard';
  });

  // Update active tab when pathname changes
  useEffect(() => {
    if (pathname === '/') setActiveTab('dashboard');
    else if (pathname === '/about') setActiveTab('about');
    else if (pathname === '/settings') setActiveTab('settings');
  }, [pathname]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'dashboard') {
      router.push('/');
    } else {
      router.push(`/${tab}`);
    }
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <NavigationContext.Provider value={{ isCollapsed }}>
      <div className={cn(
        "fixed left-0 top-0 h-screen bg-white border-r border-gray-200 shadow-sm transition-all duration-300 z-10",
        isCollapsed ? "w-16" : "w-64"
      )}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            {!isCollapsed ? (
              <Link href="/" className="flex items-center group hover:opacity-80 transition-opacity">
                <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-xl font-bold text-gray-800">AlgoTrade</span>
              </Link>
            ) : (
              <Link href="/" className="flex items-center justify-center w-full group hover:opacity-80 transition-opacity">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </Link>
            )}
            <button 
              onClick={toggleCollapse}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              {isCollapsed ? (
                <ChevronRight className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronLeft className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          
          <div className="flex-1 py-4">
            <div className="flex flex-col space-y-1 px-2">
              <button
                onClick={() => handleTabChange('dashboard')}
                className={cn(
                  'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                  activeTab === 'dashboard'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                )}
              >
                <BarChart3 className={cn("mr-3", isCollapsed ? "h-6 w-6" : "h-5 w-5")} />
                {!isCollapsed && <span>Dashboard</span>}
              </button>
              <button
                onClick={() => handleTabChange('about')}
                className={cn(
                  'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                  activeTab === 'about'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                )}
              >
                <Info className={cn("mr-3", isCollapsed ? "h-6 w-6" : "h-5 w-5")} />
                {!isCollapsed && <span>About</span>}
              </button>
              <button
                onClick={() => handleTabChange('settings')}
                className={cn(
                  'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                  activeTab === 'settings'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                )}
              >
                <Settings className={cn("mr-3", isCollapsed ? "h-6 w-6" : "h-5 w-5")} />
                {!isCollapsed && <span>Settings</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </NavigationContext.Provider>
  );
} 