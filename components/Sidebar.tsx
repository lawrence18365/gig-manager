"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Calendar, DollarSign, BarChart2, Music } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Calendar', icon: Calendar },
    { href: '/gigs', label: 'Gigs', icon: Music },
    { href: '/payments', label: 'Payments', icon: DollarSign },
    { href: '/analytics', label: 'Analytics', icon: BarChart2 },
  ];

  return (
    <nav className="w-64 bg-gray-100 dark:bg-gray-800 p-4 hidden md:block">
      <h1 className="text-2xl font-bold mb-8">Gig Manager</h1>
      <ul>
        {links.map(({ href, label, icon: Icon }) => (
          <li key={href} className="mb-4">
            <Link href={href} className={cn(
              "flex items-center p-2 rounded-lg",
              pathname === href
                ? "bg-gray-200 dark:bg-gray-700 text-primary"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            )}>
              <Icon className="mr-2 h-5 w-5" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;