"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  Code,
  Cpu,
  LineChart,
  Lock,
  Settings,
  Shield,
  Zap,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          About AlgoTrade
        </h1>
        <p className="text-gray-600">
          Learn more about our platform and how it can help you succeed in
          algorithmic trading.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-4 gap-4 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger
            value="overview"
            className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
            <BarChart3 className="h-4 w-4" />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger
            value="features"
            className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
            <Zap className="h-4 w-4" />
            <span>Features</span>
          </TabsTrigger>
          <TabsTrigger
            value="how-it-works"
            className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
            <Cpu className="h-4 w-4" />
            <span>How It Works</span>
          </TabsTrigger>
          <TabsTrigger
            value="faq"
            className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
            <Settings className="h-4 w-4" />
            <span>FAQ</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card className="border-blue-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-blue-700">Our Mission</CardTitle>
              <CardDescription>
                Empowering traders with powerful algorithmic trading tools.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                AlgoTrade is dedicated to democratizing algorithmic trading by
                providing accessible, powerful tools for traders of all
                experience levels. Our platform combines advanced technology
                with user-friendly interfaces to help you implement and optimize
                your trading strategies.
              </p>
              <p className="text-gray-700">
                Founded by a team of experienced traders and software engineers,
                AlgoTrade was born from a simple idea: make algorithmic trading
                accessible to everyone. We believe that with the right tools,
                anyone can develop and execute successful trading strategies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Innovation
                  </h3>
                  <p className="text-sm text-gray-600">
                    Constantly evolving our platform with cutting-edge
                    technology
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Transparency
                  </h3>
                  <p className="text-sm text-gray-600">
                    Clear insights into your trading performance and strategy
                    execution
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-700 mb-2">Security</h3>
                  <p className="text-sm text-gray-600">
                    Enterprise-grade security to protect your trading capital
                    and data
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-blue-700">Our Team</CardTitle>
              <CardDescription>
                Meet the people behind AlgoTrade.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">SR</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Soumyadeep Roy
                    </h3>
                    <p className="text-sm text-blue-600">Founder & CEO</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Former quantitative trader with 5+ years of experience in
                      algorithmic trading.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">PS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Puskar Saha</h3>
                    <p className="text-sm text-blue-600">CTO</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Software engineer specializing in financial technology and
                      machine learning.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">MP</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Munshi Israfil Parveg
                    </h3>
                    <p className="text-sm text-blue-600">Head of Trading</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Expert in developing and optimizing trading strategies
                      across multiple asset classes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">AM</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Arnav Mukherjee
                    </h3>
                    <p className="text-sm text-blue-600">Head of Product</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Product specialist focused on creating intuitive trading
                      experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">RM</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Rajat Mondal
                    </h3>
                    <p className="text-sm text-blue-600">
                      Head of Growth & Marketing
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Storyteller and strategist with a knack for positioning
                      fintech products in global markets. Experienced in brand
                      building, community growth, and performance marketing.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="space-y-6">
          <Card className="border-blue-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-blue-700">Key Features</CardTitle>
              <CardDescription>
                Discover what makes AlgoTrade the leading algorithmic trading
                platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <LineChart className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Real-time Analytics
                    </h3>
                    <p className="text-sm text-gray-600">
                      Monitor your trading performance with real-time data and
                      advanced analytics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Code className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Custom Strategies
                    </h3>
                    <p className="text-sm text-gray-600">
                      Build and deploy your own trading strategies with our
                      intuitive tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Risk Management
                    </h3>
                    <p className="text-sm text-gray-600">
                      Set stop-losses, take-profits, and position sizing to
                      protect your capital.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Multi-exchange Support
                    </h3>
                    <p className="text-sm text-gray-600">
                      Connect to multiple exchanges and manage all your trading
                      from one platform.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Cpu className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Strategy Optimization
                    </h3>
                    <p className="text-sm text-gray-600">
                      Backtest and optimize your strategies with historical data
                      to improve performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Secure API Integration
                    </h3>
                    <p className="text-sm text-gray-600">
                      Connect your exchange accounts securely with our
                      enterprise-grade API integration.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-blue-700">
                Why Choose AlgoTrade?
              </CardTitle>
              <CardDescription>
                Key features that set AlgoTrade apart in the world of
                algorithmic trading.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm text-gray-800">
                <li>
                  ✅ <strong>Custom Strategies:</strong> Design and deploy
                  personalized trading strategies with ease.
                </li>
                <li>
                  ✅ <strong>Multi-Exchange Support:</strong> Trade seamlessly
                  across multiple exchanges from one platform.
                </li>
                <li>
                  ✅ <strong>Strategy Optimization:</strong> Fine-tune your
                  trading logic with powerful optimization tools.
                </li>
                <li>
                  ✅ <strong>User-Friendly Interface:</strong> Built for speed,
                  clarity, and intuitive navigation.
                </li>
                <li>
                  ✅ <strong>Advanced Analytics:</strong> Gain deep insights
                  into trading performance and strategy impact.
                </li>
                <li>
                  ✅ <strong>Competitive Pricing:</strong> Access premium
                  features without breaking the bank.
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="how-it-works" className="space-y-6">
          <Card className="border-blue-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-blue-700">
                How AlgoTrade Works
              </CardTitle>
              <CardDescription>
                A step-by-step guide to getting started with our platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Connect Your Exchange
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Start by connecting your cryptocurrency exchange account
                      to AlgoTrade. We support major exchanges like Binance,
                      Coinbase, Kraken, and more. Our secure API integration
                      ensures your trading capital is protected.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Configure Your Strategy
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Choose from our pre-built strategies or create your own
                      custom trading strategy. Set parameters like entry/exit
                      points, position sizing, and risk management rules to
                      match your trading style.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Monitor Performance
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Track your strategy's performance in real-time with our
                      comprehensive dashboard. View key metrics like
                      profit/loss, win rate, and drawdown to evaluate your
                      strategy's effectiveness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Optimize and Improve
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Use our backtesting tools to test different parameters and
                      optimize your strategy. Make data-driven decisions to
                      improve your trading performance over time.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-blue-700">Technology Stack</CardTitle>
              <CardDescription>
                The powerful technology behind AlgoTrade.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Real-time Data Processing
                  </h3>
                  <p className="text-sm text-gray-600">
                    Our platform processes market data in milliseconds, ensuring
                    you never miss a trading opportunity.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Machine Learning
                  </h3>
                  <p className="text-sm text-gray-600">
                    Advanced algorithms analyze market patterns to identify
                    potential trading opportunities.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Cloud Infrastructure
                  </h3>
                  <p className="text-sm text-gray-600">
                    Built on scalable cloud infrastructure to ensure reliability
                    and performance at all times.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faq" className="space-y-6">
          <Card className="border-blue-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-blue-700">
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>
                Find answers to common questions about AlgoTrade.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    What is algorithmic trading?
                  </h3>
                  <p className="text-gray-600">
                    Algorithmic trading, also known as algo trading or automated
                    trading, is the use of computer programs to execute trading
                    strategies automatically. These programs follow a set of
                    predefined instructions to place trades when certain market
                    conditions are met, without human intervention.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Do I need programming knowledge to use AlgoTrade?
                  </h3>
                  <p className="text-gray-600">
                    No, you don't need to be a programmer to use AlgoTrade. Our
                    platform is designed with a user-friendly interface that
                    allows you to create and deploy trading strategies without
                    writing code. However, if you have programming experience,
                    you can also create custom strategies using our API.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Which exchanges does AlgoTrade support?
                  </h3>
                  <p className="text-gray-600">
                    AlgoTrade supports all major cryptocurrency exchanges
                    including Binance, Coinbase, Kraken, FTX, and more. We're
                    constantly adding support for new exchanges to provide you
                    with the widest range of trading options.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Is my trading capital safe?
                  </h3>
                  <p className="text-gray-600">
                    Yes, your trading capital is safe with AlgoTrade. We use
                    read-only API keys by default, which means our platform can
                    only view your account information but cannot execute
                    trades. When you're ready to enable automated trading, you
                    can set up API keys with trading permissions, but we
                    recommend starting with read-only access.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Can I backtest my strategies?
                  </h3>
                  <p className="text-gray-600">
                    Yes, AlgoTrade provides comprehensive backtesting
                    capabilities. You can test your strategies against
                    historical market data to evaluate their performance before
                    deploying them with real capital.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    What kind of support do you offer?
                  </h3>
                  <p className="text-gray-600">
                    We offer multiple support channels including email, live
                    chat, and a comprehensive knowledge base. Our support team
                    is available 24/7 to help you with any questions or issues
                    you may have.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-blue-700">
                Still Have Questions?
              </CardTitle>
              <CardDescription>
                Our team is here to help you succeed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you couldn't find the answer you're looking for, please
                contact our support team. We're here to help you get the most
                out of AlgoTrade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:support@algotrade.com?subject=Support%20Request&body=Hello%2C%0A%0AI%20need%20help%20with%3A%0A%0A" 
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Contact Support
                </a>
                <Button
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  Schedule a Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
