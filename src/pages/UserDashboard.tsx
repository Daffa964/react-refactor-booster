import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calendar, Users, BarChart3, ArrowUp } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const UserDashboard = () => {
  // Sample data for charts
  const revenueData = [
    { month: "Jan", revenue: 4000, sales: 2400 },
    { month: "Feb", revenue: 3000, sales: 1398 },
    { month: "Mar", revenue: 5000, sales: 9800 },
    { month: "Apr", revenue: 7780, sales: 3908 },
    { month: "May", revenue: 8890, sales: 4800 },
    { month: "Jun", revenue: 9390, sales: 3800 },
    { month: "Jul", revenue: 10490, sales: 4300 },
  ];

  const donutData = [
    { name: "Ticket Left", value: 21512 },
    { name: "Ticket Sold", value: 45612 },
    { name: "Event Held", value: 275 },
  ];

  const COLORS = ["hsl(223 63% 45%)", "hsl(14 95% 66%)", "hsl(195 76% 57%)"];

  const latestSales = [
    {
      event: "The Story's of Danau Toba (Drama Theater)",
      customer: "Steffany Humble",
      time: "2m ago",
      tickets: 4,
      avatar: "/placeholder.svg",
    },
    {
      event: "Envato Author SF Meetup",
      customer: "Jacob Swing Swing",
      time: "6h ago",
      tickets: 2,
      avatar: "/placeholder.svg",
    },
    {
      event: "Envato Author Community Fun Hiking",
      customer: "Robert Carloz",
      time: "10h ago",
      tickets: 1,
      avatar: "/placeholder.svg",
    },
    {
      event: "Indonesia Envato Authors National Meetup",
      customer: "Kevin Stefanus",
      time: "1d ago",
      tickets: 1,
      avatar: "/placeholder.svg",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden border-l-4 border-l-success">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">New Sales</p>
                <div className="flex items-center gap-2">
                  <h2 className="text-3xl font-bold text-foreground">93</h2>
                  <div className="flex items-center gap-1 text-success">
                    <ArrowUp className="h-4 w-4" />
                    <span className="text-xs font-semibold">12%</span>
                  </div>
                </div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-l-4 border-l-primary">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Event Held</p>
                <div className="flex items-center gap-2">
                  <h2 className="text-3xl font-bold text-foreground">856</h2>
                  <div className="flex items-center gap-1 text-success">
                    <ArrowUp className="h-4 w-4" />
                    <span className="text-xs font-semibold">8%</span>
                  </div>
                </div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-l-4 border-l-accent">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <div className="flex items-center gap-2">
                  <h2 className="text-3xl font-bold text-foreground">2,543</h2>
                  <div className="flex items-center gap-1 text-success">
                    <ArrowUp className="h-4 w-4" />
                    <span className="text-xs font-semibold">25%</span>
                  </div>
                </div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Users className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Best Selling Donut Chart */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-semibold">Best Selling</CardTitle>
              <select className="rounded-md border border-border bg-background px-3 py-1 text-sm">
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={donutData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {donutData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="mx-auto mb-1 h-2 w-8 rounded-full bg-primary" />
                  <h4 className="text-lg font-bold">21,512</h4>
                  <span className="text-xs text-muted-foreground">Ticket Left</span>
                </div>
                <div>
                  <div className="mx-auto mb-1 h-2 w-8 rounded-full bg-secondary" />
                  <h4 className="text-lg font-bold">45,612</h4>
                  <span className="text-xs text-muted-foreground">Ticket Sold</span>
                </div>
                <div>
                  <div className="mx-auto mb-1 h-2 w-8 rounded-full bg-accent" />
                  <h4 className="text-lg font-bold">275</h4>
                  <span className="text-xs text-muted-foreground">Event Held</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Latest Sales */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-semibold">Latest Sales</CardTitle>
              <select className="rounded-md border border-border bg-background px-3 py-1 text-sm">
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {latestSales.map((sale, index) => (
                  <div key={index} className="space-y-2 border-b border-border pb-4 last:border-0">
                    <p className="font-semibold text-sm">{sale.event}</p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={sale.avatar} />
                        <AvatarFallback>{sale.customer.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{sale.customer}</h4>
                        <span className="text-xs text-muted-foreground">{sale.time}</span>
                      </div>
                      <Badge variant="secondary">{sale.tickets} Ticket</Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full">
                View More
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Charts */}
        <div className="space-y-6 lg:col-span-2">
          {/* Sales Revenue Chart */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-semibold">Sales Revenue</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Monthly</Button>
                <Button variant="outline" size="sm">Weekly</Button>
                <Button variant="default" size="sm">Daily</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(223 63% 45%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(223 63% 45%)" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(14 95% 66%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(14 95% 66%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(223 63% 45%)"
                      strokeWidth={2}
                      fill="url(#colorRevenue)"
                    />
                    <Area
                      type="monotone"
                      dataKey="sales"
                      stroke="hsl(14 95% 66%)"
                      strokeWidth={2}
                      fill="url(#colorSales)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Bar Chart */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-lg font-semibold">Increase 25%</CardTitle>
                <p className="text-sm text-muted-foreground">Comparison</p>
              </div>
              <select className="rounded-md border border-border bg-background px-3 py-1 text-sm">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="revenue" fill="hsl(223 63% 45%)" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="sales" fill="hsl(14 95% 66%)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
