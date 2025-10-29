import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Users,
  BarChart2,
  Star,
  Tv,
  PieChart,
  Globe,
  Heart,
  Settings,
  FileText,
  Table,
  Layers,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DashboardSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const DashboardSidebar = ({ isOpen }: DashboardSidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      items: [
        { label: "Dashboard", path: "/" },
        { label: "Event", path: "/event" },
        { label: "Event Detail", path: "/event-detail" },
        { label: "Customers", path: "/customers" },
        { label: "Analytics", path: "/analytics" },
        { label: "Reviews", path: "/reviews" },
      ],
    },
    {
      title: "Apps",
      icon: Tv,
      items: [
        { label: "Profile", path: "/profile" },
        { label: "Calendar", path: "/calendar" },
      ],
    },
    {
      title: "Charts",
      icon: PieChart,
      items: [
        { label: "Charts", path: "/charts" },
      ],
    },
    {
      title: "Bootstrap",
      icon: Globe,
      items: [
        { label: "Components", path: "/components" },
      ],
    },
    {
      title: "Plugins",
      icon: Heart,
      items: [
        { label: "Plugins", path: "/plugins" },
      ],
    },
    { title: "Widget", icon: Settings, path: "/widget" },
    {
      title: "Forms",
      icon: FileText,
      items: [
        { label: "Form Elements", path: "/form-elements" },
      ],
    },
    {
      title: "Table",
      icon: Table,
      items: [
        { label: "Tables", path: "/tables" },
      ],
    },
    {
      title: "Pages",
      icon: Layers,
      items: [
        { label: "Pages", path: "/pages" },
      ],
    },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <>
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-30 h-full w-64 border-r border-border bg-sidebar shadow-md transition-transform duration-300 lg:sticky lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-sidebar-border px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Calendar className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-sidebar-foreground">B.I. Booster</span>
          </Link>
        </div>

        {/* Add Event Button */}
        <div className="p-4">
          <Button className="w-full bg-gradient-primary font-semibold">
            <Plus className="mr-2 h-4 w-4" />
            New Event
          </Button>
        </div>

        {/* Navigation Menu */}
        <ScrollArea className="h-[calc(100vh-140px)] px-3">
          <nav className="space-y-2 pb-4">
            {menuItems.map((item, idx) => {
              const Icon = item.icon;
              
              if (item.items) {
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground">
                      <Icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </div>
                    <div className="ml-6 space-y-1">
                      {item.items.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          to={subItem.path}
                          className={cn(
                            "block rounded-md px-3 py-2 text-sm transition-colors",
                            isActive(subItem.path)
                              ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                              : "text-sidebar-foreground hover:bg-sidebar-accent"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  to={item.path!}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.path!)
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </ScrollArea>

        {/* Footer */}
        <div className="absolute bottom-0 w-full border-t border-sidebar-border bg-sidebar p-4">
          <p className="text-xs text-sidebar-foreground">
            <strong>B.I. Booster Dashboard</strong> © 2025
          </p>
          <p className="text-xs text-muted-foreground">All Rights Reserved</p>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
