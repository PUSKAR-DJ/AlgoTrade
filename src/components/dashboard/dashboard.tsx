import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useEffect, useState} from 'react';

export const Dashboard = () => {
  // Mock data for key metrics
  const [profitLoss, setProfitLoss] = useState(1250.50);
  const [openPositions, setOpenPositions] = useState(2);
  const [totalTrades, setTotalTrades] = useState(150);
  const [winningTradesPercentage, setWinningTradesPercentage] = useState(60);

  useEffect(() => {
    // Simulate data updates
    const intervalId = setInterval(() => {
      setProfitLoss(prev => prev + (Math.random() - 0.5) * 100);
      setOpenPositions(prev => Math.max(0, prev + Math.floor(Math.random() * 3 - 1)));
      setTotalTrades(prev => prev + Math.floor(Math.random() * 5));
      setWinningTradesPercentage(prev => Math.min(100, Math.max(0, prev + (Math.random() - 0.5) * 2)));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="transition-transform hover:scale-105 cursor-pointer">
        <CardHeader>
          <CardTitle>Profit/Loss</CardTitle>
          <CardDescription>Total profit or loss</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{profitLoss.toFixed(2)}</div>
        </CardContent>
      </Card>

      <Card className="transition-transform hover:scale-105 cursor-pointer">
        <CardHeader>
          <CardTitle>Open Positions</CardTitle>
          <CardDescription>Number of currently open trades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{openPositions}</div>
        </CardContent>
      </Card>

      <Card className="transition-transform hover:scale-105 cursor-pointer">
        <CardHeader>
          <CardTitle>Total Trades</CardTitle>
          <CardDescription>Number of executed trades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalTrades}</div>
        </CardContent>
      </Card>

      <Card className="transition-transform hover:scale-105 cursor-pointer">
        <CardHeader>
          <CardTitle>Win Rate</CardTitle>
          <CardDescription>Percentage of winning trades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{winningTradesPercentage.toFixed(0)}%</div>
        </CardContent>
      </Card>
    </div>
  );
};
