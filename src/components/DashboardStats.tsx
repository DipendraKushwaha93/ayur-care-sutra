import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, TrendingUp, Package } from "lucide-react";

const stats = [
  {
    title: "Total Patients",
    value: "2,847",
    change: "+12%",
    icon: Users,
    gradient: "bg-gradient-primary"
  },
  {
    title: "Today's Therapies",
    value: "18",
    change: "+3%",
    icon: Calendar,
    gradient: "bg-gradient-secondary"
  },
  {
    title: "Recovery Rate",
    value: "94.2%",
    change: "+2.1%",
    icon: TrendingUp,
    gradient: "bg-primary"
  },
  {
    title: "Herb Inventory",
    value: "156",
    change: "-4",
    icon: Package,
    gradient: "bg-accent"
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <Card key={stat.title} className="relative overflow-hidden shadow-card hover:shadow-elegant transition-smooth group">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.gradient} group-hover:scale-110 transition-bounce`}>
              <stat.icon className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
            <p className={`text-xs ${
              stat.change.startsWith('+') ? 'text-primary' : 'text-accent'
            } font-medium`}>
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}