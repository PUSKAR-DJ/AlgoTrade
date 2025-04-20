'use client';

import { useEffect, useState } from 'react';
import { Navigation, useNavigation } from '@/components/ui/navigation';
import { cn } from '@/lib/utils';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useNavigation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className={cn(
        "transition-all duration-300",
        isCollapsed ? "pl-16" : "pl-64"
      )}>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
