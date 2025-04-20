import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useEffect, useState} from 'react';
import { ArrowDown, ArrowUp, BarChart2, DollarSign, Percent, TrendingUp } from 'lucide-react';

// Client-side only time display component to prevent hydration errors
function TimeDisplay() {
  const [time, setTime] = useState<string>('');
  
  useEffect(() => {
    // Set initial time
    setTime(new Date().toLocaleTimeString());
    
    // Update time every second
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return <div className="text-sm text-gray-500">Last updated: {time}</div>;
}

export const Dashboard = () => {
  // Mock data for key metrics
  const [profitLoss, setProfitLoss] = useState(1250.50);
  const [openPositions, setOpenPositions] = useState(2);
  const [totalTrades, setTotalTrades] = useState(150);
  const [winningTradesPercentage, setWinningTradesPercentage] = useState(60);
  const [profitLossChange, setProfitLossChange] = useState(0);
  const [winRateChange, setWinRateChange] = useState(0);

  useEffect(() => {
    // Simulate data updates
    const intervalId = setInterval(() => {
      const newProfitLoss = profitLoss + (Math.random() - 0.5) * 100;
      setProfitLossChange(newProfitLoss - profitLoss);
      setProfitLoss(newProfitLoss);
      
      setOpenPositions(prev => Math.max(0, prev + Math.floor(Math.random() * 3 - 1)));
      setTotalTrades(prev => prev + Math.floor(Math.random() * 5));
      
      const newWinRate = Math.min(100, Math.max(0, winningTradesPercentage + (Math.random() - 0.5) * 2));
      setWinRateChange(newWinRate - winningTradesPercentage);
      setWinningTradesPercentage(newWinRate);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [profitLoss, winningTradesPercentage]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Trading Overview</h1>
        <TimeDisplay />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden border-l-4 border-l-green-500 shadow-sm hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm font-medium text-gray-500">Profit/Loss</CardTitle>
              <DollarSign className="h-4 w-4 text-gray-400" />
            </div>
            <CardDescription>Total profit or loss</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold text-gray-800">${profitLoss.toFixed(2)}</div>
              <div className={`flex items-center text-sm ${profitLossChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {profitLossChange >= 0 ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                {Math.abs(profitLossChange).toFixed(2)}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm font-medium text-gray-500">Open Positions</CardTitle>
              <BarChart2 className="h-4 w-4 text-gray-400" />
            </div>
            <CardDescription>Number of currently open trades</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">{openPositions}</div>
            <div className="text-xs text-gray-500 mt-1">Active trading positions</div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-l-4 border-l-purple-500 shadow-sm hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm font-medium text-gray-500">Total Trades</CardTitle>
              <TrendingUp className="h-4 w-4 text-gray-400" />
            </div>
            <CardDescription>Number of executed trades</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">{totalTrades}</div>
            <div className="text-xs text-gray-500 mt-1">All-time trading activity</div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm font-medium text-gray-500">Win Rate</CardTitle>
              <Percent className="h-4 w-4 text-gray-400" />
            </div>
            <CardDescription>Percentage of winning trades</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold text-gray-800">{winningTradesPercentage.toFixed(0)}%</div>
              <div className={`flex items-center text-sm ${winRateChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {winRateChange >= 0 ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                {Math.abs(winRateChange).toFixed(1)}%
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest trading actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium">Buy Order Executed</p>
                    <p className="text-xs text-gray-500">BTC/USD at $42,150</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">2 min ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium">Sell Order Executed</p>
                    <p className="text-xs text-gray-500">ETH/USD at $2,850</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">15 min ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium">Strategy Updated</p>
                    <p className="text-xs text-gray-500">Modified RSI parameters</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">1 hour ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Performance Summary</CardTitle>
            <CardDescription>Key metrics and insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Daily Profit</span>
                <span className="text-sm font-medium text-green-600">+$342.50</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Weekly Profit</span>
                <span className="text-sm font-medium text-green-600">+$1,245.75</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Monthly Profit</span>
                <span className="text-sm font-medium text-green-600">+$5,678.25</span>
              </div>
              <div className="pt-2 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Overall Performance</span>
                  <span className="text-sm font-medium text-green-600">+12.5%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
