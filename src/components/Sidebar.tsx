import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  Settings,
  FolderOpen,
  X,
} from "lucide-react";

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const navigation = [
  { name: "Dashboard", page: "dashboard", icon: LayoutDashboard },
  { name: "Products", page: "products", icon: Package },
  { name: "Categories", page: "categories", icon: FolderOpen },
  { name: "Shopkeepers", page: "shopkeepers", icon: Users },
  { name: "Orders", page: "orders", icon: ShoppingCart },
  { name: "Settings", page: "settings", icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  setCurrentPage,
  isOpen,
  setIsOpen,
}) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out shadow-lg lg:translate-x-0 lg:static lg:inset-0 bg-[#FFF0ED]",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-[#F9EDD1] bg-[#FFF0ED]">
          <h1 className="text-xl font-bold text-[#301814]">Quick Commerce</h1>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5 text-[#301814]" />
          </Button>
        </div>

        <nav className="mt-6 px-4">
          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.page;

              return (
                <button
                key={item.name}
                onClick={() => {
                  setCurrentPage(item.page);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center px-4 py-3 font-semibold text-sm rounded-full transition-colors duration-200",
                  isActive
                    ? "bg-[#F35E44] text-white shadow-md"
                    : "text-[#301814]/70 hover:bg-[#FEF3F0] hover:text-[#301814]"
                )}
              >
                <Icon
                  className={cn("mr-3 h-5 w-5", isActive ? "text-white" : "")}
                />
                {item.name}
              </button>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
