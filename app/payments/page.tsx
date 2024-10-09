"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function PaymentsPage() {
  const [payments] = useState([
    { id: 1, date: '2024-04-15', gig: 'Jazz Night at Blue Note', amount: 500, status: 'Paid' },
    { id: 2, date: '2024-04-20', gig: 'Wedding Ceremony', amount: 1000, status: 'Pending' },
    { id: 3, date: '2024-04-25', gig: 'Corporate Event', amount: 750, status: 'Paid' },
  ]);

  const totalEarnings = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const paidEarnings = payments.filter(p => p.status === 'Paid').reduce((sum, payment) => sum + payment.amount, 0);
  const pendingEarnings = totalEarnings - paidEarnings;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Payment Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <CardTitle>Paid</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${paidEarnings}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${pendingEarnings}</p>
          </CardContent>
        </Card>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Gig</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.date}</TableCell>
              <TableCell>{payment.gig}</TableCell>
              <TableCell>${payment.amount}</TableCell>
              <TableCell>{payment.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}