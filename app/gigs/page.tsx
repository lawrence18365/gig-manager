"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

export default function GigsPage() {
  const [gigs, setGigs] = useState([
    { id: 1, date: '2024-04-15', venue: 'Blue Note', description: 'Jazz Night', payment: 500 },
    { id: 2, date: '2024-04-20', venue: 'Central Park', description: 'Wedding Ceremony', payment: 1000 },
    { id: 3, date: '2024-04-25', venue: 'Corporate HQ', description: 'Corporate Event', payment: 750 },
  ]);

  const [newGig, setNewGig] = useState({ date: '', venue: '', description: '', payment: '' });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewGig({ ...newGig, [e.target.name]: e.target.value });
  };

  const handleAddGig = () => {
    setGigs([...gigs, { ...newGig, id: gigs.length + 1, payment: Number(newGig.payment) }]);
    setNewGig({ date: '', venue: '', description: '', payment: '' });
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Gig Manager</h1>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsDialogOpen(true)}>Add New Gig</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Gig</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">Date</Label>
              <Input id="date" name="date" type="date" className="col-span-3" value={newGig.date} onChange={handleInputChange} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="venue" className="text-right">Venue</Label>
              <Input id="venue" name="venue" className="col-span-3" value={newGig.venue} onChange={handleInputChange} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">Description</Label>
              <Input id="description" name="description" className="col-span-3" value={newGig.description} onChange={handleInputChange} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="payment" className="text-right">Payment</Label>
              <Input id="payment" name="payment" type="number" className="col-span-3" value={newGig.payment} onChange={handleInputChange} />
            </div>
          </div>
          <Button onClick={handleAddGig}>Add Gig</Button>
        </DialogContent>
      </Dialog>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Venue</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Payment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gigs.map((gig) => (
            <TableRow key={gig.id}>
              <TableCell>{gig.date}</TableCell>
              <TableCell>{gig.venue}</TableCell>
              <TableCell>{gig.description}</TableCell>
              <TableCell>${gig.payment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}