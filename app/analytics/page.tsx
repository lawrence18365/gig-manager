"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', gigs: 4, earnings: 2000 },
  { month: 'Feb', gigs: 6, earnings: 3000 },
  { month: 'Mar', gigs: 5, earnings: 2500 },
  { month: 'Apr', gigs: 8, earnings: 4000 },
  { month: 'May', gigs: 7, earnings: 3500 },
  { month: 'Jun', gigs: 9, earnings: 4500 },
];

export default function AnalyticsPage() {
  const totalGigs = data.reduce((sum, item) => sum + item.gigs, 0);
  const totalEarnings = data.reduce((sum, item) => sum + item.earnings, 0);
  const averageEarningsPerGig = totalEarnings / totalGigs;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Performance Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Gigs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalGigs}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${totalEarnings}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Earnings per Gig</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${averageEarningsPerGig.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Monthly Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="gigs" fill="#8884d8" name="Gigs" />
              <Bar yAxisId="right" dataKey="earnings" fill="#82ca9d" name="Earnings ($)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}