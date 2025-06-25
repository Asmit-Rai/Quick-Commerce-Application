import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, LogOut } from 'lucide-react';

interface TopNavBarProps {
  onLogout: () => void;
  onMenuClick: () => void;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ onLogout, onMenuClick }) => {
  return (
    <header className="bg-[#FFF0ED] shadow-sm sticky top-0 left-0 right-0 z-50 font-poppins rounded-[25px] border-b border-[#F9EDD1] overflow-x-hidden">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6 w-full min-w-0">
        {/* Menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden text-[#301814]"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <h1 className="text-[#301814] font-semibold text-lg hidden sm:block truncate">
          Quick Commerce
        </h1>

        {/* Avatar Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="h-9 w-9 rounded-full overflow-hidden border border-[#F35E44] hover:shadow focus:outline-none"
              aria-label="Open user menu"
            >
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-gradient-to-r from-[#F35E44] to-[#D94C32] text-white text-sm">
                  AD
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="z-50 w-40 bg-white/90 backdrop-blur-md shadow-xl rounded-xl border border-[#F9EDD1] mt-2 p-2"
            align="end"
            sideOffset={8}
          >
            <DropdownMenuItem
              onClick={onLogout}
              className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 rounded-md hover:bg-[#FFF0ED] transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopNavBar;
