
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export const Dashboard = () => {
  // Mock data for key metrics
  const profitLoss = 1250.50;
  const openPositions = 2;
  const totalTrades = 150;
  const winningTradesPercentage = 60;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Profit/Loss</CardTitle>
          <CardDescription>Total profit or loss</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{profitLoss}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Open Positions</CardTitle>
          <CardDescription>Number of currently open trades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{openPositions}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Trades</CardTitle>
          <CardDescription>Number of executed trades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalTrades}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Win Rate</CardTitle>
          <CardDescription>Percentage of winning trades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{winningTradesPercentage}%</div>
        </CardContent>
      </Card>
    </div>
  );
};
