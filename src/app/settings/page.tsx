'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Bell, CreditCard, Globe, Lock, Moon, Settings, Shield, User, Wallet } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Settings</h1>
        <p className="text-gray-600">
          Manage your account settings, trading preferences, and platform configuration.
        </p>
      </div>

      {saved && (
        <Alert className="mb-6 bg-green-50 border-green-200">
          <AlertCircle className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Success</AlertTitle>
          <AlertDescription className="text-green-700">
            Your settings have been saved successfully.
          </AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="account" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 lg:grid-cols-6 gap-4 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger value="account" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </TabsTrigger>
          <TabsTrigger value="trading" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <Wallet className="h-4 w-4" />
            <span className="hidden sm:inline">Trading</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <Lock className="h-4 w-4" />
            <span className="hidden sm:inline">Security</span>
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <CreditCard className="h-4 w-4" />
            <span className="hidden sm:inline">Billing</span>
          </TabsTrigger>
          <TabsTrigger value="preferences" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Preferences</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal information and how it appears to other users.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Display Name</Label>
                  <Input id="name" placeholder="Your name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" defaultValue="john.doe@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  className="w-full min-h-[100px] rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Tell us about yourself"
                  defaultValue="Trading enthusiast with 5+ years of experience in cryptocurrency markets."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <select
                  id="timezone"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  defaultValue="UTC-5"
                >
                  <option value="UTC-12">UTC-12</option>
                  <option value="UTC-8">UTC-8</option>
                  <option value="UTC-5">UTC-5 (Eastern Time)</option>
                  <option value="UTC-0">UTC-0 (GMT)</option>
                  <option value="UTC+1">UTC+1 (Central European Time)</option>
                  <option value="UTC+8">UTC+8 (China Standard Time)</option>
                </select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Preferences</CardTitle>
              <CardDescription>
                Customize how your account works and appears.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dark Mode</Label>
                  <p className="text-sm text-gray-500">Use dark theme for the dashboard</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Language</Label>
                  <p className="text-sm text-gray-500">Select your preferred language</p>
                </div>
                <select className="rounded-md border border-gray-300 px-3 py-2 text-sm">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Chinese</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Currency</Label>
                  <p className="text-sm text-gray-500">Select your preferred currency</p>
                </div>
                <select className="rounded-md border border-gray-300 px-3 py-2 text-sm">
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                  <option>JPY (¥)</option>
                  <option>BTC (₿)</option>
                </select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="trading" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Configuration</CardTitle>
              <CardDescription>
                Connect your exchange accounts to AlgoTrade for automated trading.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="exchange">Exchange</Label>
                <select
                  id="exchange"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                >
                  <option>Binance</option>
                  <option>Coinbase</option>
                  <option>Kraken</option>
                  <option>FTX</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <Input id="api-key" type="password" placeholder="Enter your API key" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-secret">API Secret</Label>
                <Input id="api-secret" type="password" placeholder="Enter your API secret" />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="read-only" className="rounded border-gray-300" />
                <Label htmlFor="read-only" className="text-sm">Read-only access (recommended for initial setup)</Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave}>Connect Exchange</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Risk Management</CardTitle>
              <CardDescription>
                Configure risk parameters to protect your trading capital.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="max-position">Maximum Position Size (%)</Label>
                <Input id="max-position" type="number" min="1" max="100" defaultValue="5" />
                <p className="text-xs text-gray-500">Maximum percentage of your portfolio to allocate to a single trade</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="stop-loss">Default Stop Loss (%)</Label>
                <Input id="stop-loss" type="number" min="0.1" max="20" step="0.1" defaultValue="2" />
                <p className="text-xs text-gray-500">Default stop loss percentage for new trades</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="take-profit">Default Take Profit (%)</Label>
                <Input id="take-profit" type="number" min="0.1" max="100" step="0.1" defaultValue="6" />
                <p className="text-xs text-gray-500">Default take profit percentage for new trades</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-daily-loss">Maximum Daily Loss (%)</Label>
                <Input id="max-daily-loss" type="number" min="0.1" max="20" step="0.1" defaultValue="5" />
                <p className="text-xs text-gray-500">Maximum percentage of your portfolio to lose in a single day</p>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="auto-stop" className="rounded border-gray-300" defaultChecked />
                <Label htmlFor="auto-stop" className="text-sm">Automatically stop trading if daily loss limit is reached</Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trading Preferences</CardTitle>
              <CardDescription>
                Configure how your trading strategies operate.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Real-time Updates</Label>
                  <p className="text-sm text-gray-500">Enable real-time data updates</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-execute Trades</Label>
                  <p className="text-sm text-gray-500">Allow strategies to execute trades automatically</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Confirm Trades</Label>
                  <p className="text-sm text-gray-500">Require confirmation before executing trades</p>
                </div>
                <Switch />
              </div>
              <div className="space-y-2">
                <Label htmlFor="default-leverage">Default Leverage</Label>
                <select
                  id="default-leverage"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  defaultValue="1"
                >
                  <option value="1">1x (No Leverage)</option>
                  <option value="2">2x</option>
                  <option value="5">5x</option>
                  <option value="10">10x</option>
                  <option value="20">20x</option>
                </select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Configure how and when you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-gray-500">Receive notifications via email</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-gray-500">Receive push notifications in your browser</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Mobile Notifications</Label>
                  <p className="text-sm text-gray-500">Receive notifications on your mobile device</p>
                </div>
                <Switch />
              </div>
              <Separator className="my-4" />
              <h3 className="font-medium text-gray-800">Notification Events</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="trade-executed" className="text-sm">Trade Executed</Label>
                  <Switch id="trade-executed" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="price-alerts" className="text-sm">Price Alerts</Label>
                  <Switch id="price-alerts" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="strategy-updates" className="text-sm">Strategy Updates</Label>
                  <Switch id="strategy-updates" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="account-updates" className="text-sm">Account Updates</Label>
                  <Switch id="account-updates" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="security-alerts" className="text-sm">Security Alerts</Label>
                  <Switch id="security-alerts" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="news-updates" className="text-sm">News & Updates</Label>
                  <Switch id="news-updates" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alert Thresholds</CardTitle>
              <CardDescription>
                Configure when you want to receive alerts based on specific conditions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="profit-threshold">Profit Threshold (%)</Label>
                <Input id="profit-threshold" type="number" min="1" max="100" defaultValue="10" />
                <p className="text-xs text-gray-500">Alert me when my profit exceeds this percentage</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="loss-threshold">Loss Threshold (%)</Label>
                <Input id="loss-threshold" type="number" min="1" max="100" defaultValue="5" />
                <p className="text-xs text-gray-500">Alert me when my loss exceeds this percentage</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="volume-threshold">Volume Threshold</Label>
                <Input id="volume-threshold" type="number" min="100" defaultValue="1000" />
                <p className="text-xs text-gray-500">Alert me when trading volume exceeds this amount</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage your account security and privacy settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <Button variant="outline">Enable</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Login Notifications</Label>
                  <p className="text-sm text-gray-500">Get notified when someone logs into your account</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>IP Whitelist</Label>
                  <p className="text-sm text-gray-500">Restrict access to specific IP addresses</p>
                </div>
                <Switch />
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Input id="session-timeout" type="number" min="5" max="1440" defaultValue="60" />
                <p className="text-xs text-gray-500">Automatically log out after inactivity</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your account password.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave}>Change Password</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connected Devices</CardTitle>
              <CardDescription>
                Manage devices that have access to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Globe className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Windows PC - Chrome</p>
                    <p className="text-xs text-gray-500">Last active: Today, 10:30 AM</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Revoke</Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Globe className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">iPhone 13 - Safari</p>
                    <p className="text-xs text-gray-500">Last active: Yesterday, 3:45 PM</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Revoke</Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline">View All Devices</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Plan</CardTitle>
              <CardDescription>
                Manage your subscription and billing information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-md">
                <div>
                  <h3 className="font-medium text-blue-800">Pro Plan</h3>
                  <p className="text-sm text-blue-600">$29.99/month</p>
                </div>
                <Button variant="outline" className="text-blue-700 border-blue-300">Change Plan</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-renewal</Label>
                  <p className="text-sm text-gray-500">Automatically renew your subscription</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label>Billing Cycle</Label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm">
                  <option>Monthly</option>
                  <option>Quarterly (Save 10%)</option>
                  <option>Annually (Save 20%)</option>
                </select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>
                Manage your payment methods for subscription billing.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <CreditCard className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Visa ending in 4242</p>
                    <p className="text-xs text-gray-500">Expires: 12/2025</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Remove</Button>
              </div>
              <Button variant="outline" className="w-full">Add Payment Method</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>
                View your past invoices and payments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div>
                    <p className="text-sm font-medium">Invoice #12345</p>
                    <p className="text-xs text-gray-500">Pro Plan - Monthly</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$29.99</p>
                    <p className="text-xs text-gray-500">Apr 1, 2023</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div>
                    <p className="text-sm font-medium">Invoice #12344</p>
                    <p className="text-xs text-gray-500">Pro Plan - Monthly</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$29.99</p>
                    <p className="text-xs text-gray-500">Mar 1, 2023</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div>
                    <p className="text-sm font-medium">Invoice #12343</p>
                    <p className="text-xs text-gray-500">Pro Plan - Monthly</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$29.99</p>
                    <p className="text-xs text-gray-500">Feb 1, 2023</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline">View All Invoices</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Display Preferences</CardTitle>
              <CardDescription>
                Customize how information is displayed in the dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dark Mode</Label>
                  <p className="text-sm text-gray-500">Use dark theme for the dashboard</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Compact View</Label>
                  <p className="text-sm text-gray-500">Use a more compact layout</p>
                </div>
                <Switch />
              </div>
              <div className="space-y-2">
                <Label>Default Timeframe</Label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm">
                  <option>1 Minute</option>
                  <option>5 Minutes</option>
                  <option>15 Minutes</option>
                  <option>1 Hour</option>
                  <option>4 Hours</option>
                  <option>1 Day</option>
                  <option>1 Week</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Chart Type</Label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm">
                  <option>Candlestick</option>
                  <option>Line</option>
                  <option>Area</option>
                  <option>Bar</option>
                </select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Preferences</CardTitle>
              <CardDescription>
                Configure how data is processed and displayed.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Real-time Data</Label>
                  <p className="text-sm text-gray-500">Use real-time market data</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Data Caching</Label>
                  <p className="text-sm text-gray-500">Cache data for faster loading</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label>Default Markets</Label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm" multiple>
                  <option selected>BTC/USD</option>
                  <option selected>ETH/USD</option>
                  <option>SOL/USD</option>
                  <option>ADA/USD</option>
                  <option>DOT/USD</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Data Retention</Label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm">
                  <option>1 Month</option>
                  <option>3 Months</option>
                  <option>6 Months</option>
                  <option>1 Year</option>
                  <option>Forever</option>
                </select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Danger Zone</CardTitle>
              <CardDescription>
                These actions cannot be undone. Please be certain.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-md">
                <div>
                  <h3 className="font-medium text-red-800">Delete Account</h3>
                  <p className="text-sm text-red-600">Permanently delete your account and all associated data</p>
                </div>
                <Button variant="destructive">Delete Account</Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-amber-50 rounded-md">
                <div>
                  <h3 className="font-medium text-amber-800">Reset All Settings</h3>
                  <p className="text-sm text-amber-600">Reset all settings to their default values</p>
                </div>
                <Button variant="outline" className="text-amber-700 border-amber-300 hover:bg-amber-100">Reset</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 