'use client';

import {Button} from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">About AlgoTrade Dashboard</h1>
      <p className="mb-4">
        This dashboard is designed to provide insights and analysis for automated trading strategies. It allows users to monitor the performance of their trading bots, identify areas for improvement, and make informed decisions.
      </p>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Trades Comparison</h2>
        <p>
          Currently, the dashboard focuses on comparing historical trades, including entry and exit prices, stop loss and take profit levels, and timestamps. This comparison helps in evaluating the effectiveness of different trading strategies.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Compare More Trades</h2>
        <p className="mb-4">
          To enhance your analysis, you can compare more trades by uploading additional historical data or connecting to live trading accounts.
        </p>
        <Button>Compare More Trades</Button>
      </section>
    </div>
  );
}
