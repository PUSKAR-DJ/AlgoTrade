'use client';

import {Dashboard} from '@/components/dashboard/dashboard';

export default function Home() {
  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Dashboard</h1>
        <p className="text-gray-600">
          Monitor your trading performance and manage your algorithmic strategies.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm">
        <Dashboard />
      </div>
    </div>
  );
}
