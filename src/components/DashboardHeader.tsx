import { Bell, MessageSquare, Menu, Search, User, Mail, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DashboardHeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const DashboardHeader = ({ onToggleSidebar }: DashboardHeaderProps) => {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-card shadow-sm">
      <div className="flex h-16 items-center gap-4 px-4 md:px-6">
        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onToggleSidebar}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Dashboard Title */}
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden flex-1 md:flex md:max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search here..."
              className="pl-9"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="ml-auto flex items-center gap-2">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-secondary" />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-secondary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-4">
                <h3 className="mb-2 font-semibold">Notifications</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>DS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Dr sultads Send you Photo</p>
                      <p className="text-xs text-muted-foreground">29 July 2020 - 02:26 PM</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                      <span className="text-xs font-semibold text-accent-foreground">KG</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Report created successfully</p>
                      <p className="text-xs text-muted-foreground">29 July 2020 - 02:26 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Messages */}
          <Button variant="ghost" size="icon" className="relative">
            <MessageSquare className="h-5 w-5 text-secondary" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-secondary" />
          </Button>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback>BL</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4 text-primary" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4 text-success" />
                <span>Inbox</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
