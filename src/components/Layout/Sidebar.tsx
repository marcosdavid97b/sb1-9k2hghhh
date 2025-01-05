import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  LineChart,
  BookMarked,
  History,
  Settings,
  User,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Daily Journal', icon: BookOpen, href: '/journal' },
  { name: 'Trades', icon: LineChart, href: '/trades' },
  { name: 'Playbook', icon: BookMarked, href: '/playbook' },
  { name: 'Backtesting', icon: History, href: '/backtesting' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export function Sidebar() {
  return (
    <div className="flex flex-col h-full bg-gray-900 text-white w-64">
      <div className="p-4">
        <h1 className="text-xl font-bold">Trading Journal</h1>
      </div>
      
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`
            }
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center">
          <User className="h-8 w-8 rounded-full bg-gray-800 p-1" />
          <div className="ml-3">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-400">Pro Trader</p>
          </div>
        </div>
      </div>
    </div>
  );
}