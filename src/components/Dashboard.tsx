import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"; 
import {
  LayoutDashboard,
  Package,
  FolderOpen,
  Users,
  ShoppingCart,
  Settings,
  LogOut,
} from "lucide-react";
import TopNavBar from "./TopNavBar";
import DashboardOverview from "./DashboardOverview";
import ProductsPage from "./ProductsPage";
import CategoriesPage from "./CategoriesPage";
import ShopkeepersPage from "./ShopkeepersPage";
import OrdersPage from "./OrdersPage";
import SettingsPage from "./SettingsPage";
import { cn } from "@/lib/utils";

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <LayoutDashboard className="text-[#301814] h-5 w-5  ml-2" />
      ),
      page: "dashboard",
    },
    {
      label: "Products",
      href: "#",
      icon: <Package className="text-[#301814] h-5 w-5  ml-2" />,
      page: "products",
    },
    {
      label: "Categories",
      href: "#",
      icon: <FolderOpen className="text-[#301814] h-5 w-5  ml-2" />,
      page: "categories",
    },
    {
      label: "Shopkeepers",
      href: "#",
      icon: <Users className="text-[#301814] h-5 w-5  ml-2" />,
      page: "shopkeepers",
    },
    {
      label: "Orders",
      href: "#",
      icon: <ShoppingCart className="text-[#301814] h-5 w-5  ml-2" />,
      page: "orders",
    },
    {
      label: "Settings",
      href: "#",
      icon: <Settings className="text-[#301814] h-5 w-5  ml-2" />,
      page: "settings",
    },
    
  ];

  const handleLinkClick = (page: string) => {
    if (page === "logout") {
      onLogout();
    } else {
      setCurrentPage(page);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardOverview />;
      case "products":
        return <ProductsPage />;
      case "categories":
        return <CategoriesPage />;
      case "shopkeepers":
        return <ShopkeepersPage />;
      case "orders":
        return <OrdersPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF0ED] flex flex-col md:flex-row w-full">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 sticky top-0 h-full">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden pb-4">
            <div className="mt-20 flex flex-col gap-2 ml-2">
              {links.map((link, idx) => (
                <div
                  key={idx}
                  onClick={() => handleLinkClick(link.page)}
                  className={cn(
                    "cursor-pointer rounded-full p-2 transition-colors shadow-lg",
                    currentPage === link.page
                      ? "bg-[#F35E44]"
                      : "bg-[#FEF3F0] hover:[#F35E44]"
                  )}
                >
                  <SidebarLink link={link} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div
              onClick={onLogout}
              className="cursor-pointer rounded-full p-2 transition-colors shadow-lg hover:bg-red-100 dark:hover:bg-red-900 rounded-full  transition-colors"
            >
              <SidebarLink
                link={{
                  label: "Logout",
                  href: "#",
                  icon: (
                    <LogOut className="text-red-600 h-5 w-5  ml-4" />
                  ),
                }}
              />
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      <div className="flex-1 flex flex-col">
        <TopNavBar onLogout={onLogout} onMenuClick={() => setOpen(true)} />
        <main className="flex-1 p-6 overflow-auto">{renderCurrentPage()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
