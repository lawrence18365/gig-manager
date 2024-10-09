"use client"

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [gigs] = useState([
    { date: new Date(2024, 3, 15), title: 'Jazz Night at Blue Note' },
    { date: new Date(2024, 3, 20), title: 'Wedding Ceremony' },
    { date: new Date(2024, 3, 25), title: 'Corporate Event' },
  ]);

  const gigDates = gigs.map(gig => gig.date);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Gig Calendar</h1>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <Card className="w-full md:w-[350px]">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              modifiers={{
                gig: gigDates,
              }}
              modifiersStyles={{
                gig: { fontWeight: 'bold', color: 'var(--primary)' },
              }}
            />
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Upcoming Gigs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {gigs.map((gig, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{gig.title}</span>
                  <Badge variant="outline">{gig.date.toLocaleDateString()}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}