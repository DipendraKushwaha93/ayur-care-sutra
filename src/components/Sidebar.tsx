import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, useLocation } from "react-router-dom";
import { 
  Home,
  Users,
  Calendar,
  BarChart3,
  Package,
  CreditCard,
  Settings,
  Leaf,
  Stethoscope,
  ClipboardList
} from "lucide-react";

const navigationItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Users, label: "Patients", href: "/patients" },
  { icon: Calendar, label: "Appointments", href: "/appointments" },
  { icon: Stethoscope, label: "Therapies", href: "/therapies" },
  { icon: ClipboardList, label: "Assessments", href: "/assessments" },
];

const managementItems = [
  { icon: Package, label: "Inventory", href: "/inventory" },
  { icon: CreditCard, label: "Billing", href: "/billing" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const location = useLocation();
  
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border shadow-card">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-primary rounded-lg">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary">AyurSutra</h1>
            <p className="text-sm text-muted-foreground">Clinic Management</p>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div className="px-4 py-4 space-y-2">
        <div className="mb-4">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium px-2 mb-2">
            Patient Care
          </p>
          {navigationItems.map((item) => (
            <Link key={item.label} to={item.href}>
              <Button
                variant="ghost"
                className={`w-full justify-start text-left hover:bg-primary/10 hover:text-primary transition-smooth ${
                  location.pathname === item.href ? 'bg-primary/10 text-primary' : ''
                }`}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
        
        <Separator className="mx-2" />
        
        <div className="mt-4">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium px-2 mb-2">
            Management
          </p>
          {managementItems.map((item) => (
            <Link key={item.label} to={item.href}>
              <Button
                variant="ghost"
                className={`w-full justify-start text-left hover:bg-primary/10 hover:text-primary transition-smooth ${
                  location.pathname === item.href ? 'bg-primary/10 text-primary' : ''
                }`}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}