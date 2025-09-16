import { DashboardLayout } from "@/components/DashboardLayout";
import { AnalyticsChart } from "@/components/AnalyticsChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  DollarSign, 
  Activity,
  Download,
  Filter,
  BarChart3
} from "lucide-react";

const revenueData = [
  { month: 'Jan', revenue: 45000, patients: 65, therapies: 180, expenses: 25000 },
  { month: 'Feb', revenue: 52000, patients: 78, therapies: 210, expenses: 28000 },
  { month: 'Mar', revenue: 58000, patients: 85, therapies: 245, expenses: 31000 },
  { month: 'Apr', revenue: 61000, patients: 92, therapies: 268, expenses: 33000 },
  { month: 'May', revenue: 59000, patients: 87, therapies: 255, expenses: 30000 },
  { month: 'Jun', revenue: 64000, patients: 95, therapies: 285, expenses: 32000 }
];

const therapistPerformance = [
  { name: 'Dr. Ramesh Kumar', sessions: 42, rating: 4.8, revenue: 126000, speciality: 'Abhyanga' },
  { name: 'Dr. Meera Joshi', sessions: 38, rating: 4.9, revenue: 114000, speciality: 'Shirodhara' },
  { name: 'Dr. Arjun Singh', sessions: 25, rating: 4.7, revenue: 150000, speciality: 'Panchakarma' },
  { name: 'Dr. Kavitha Rao', sessions: 35, rating: 4.6, revenue: 87500, speciality: 'Consultation' },
  { name: 'Dr. Priya Sharma', sessions: 30, rating: 4.8, revenue: 90000, speciality: 'Nasya' }
];

const patientSatisfaction = [
  { week: 'Week 1', satisfaction: 94, reviews: 12 },
  { week: 'Week 2', satisfaction: 96, reviews: 18 },
  { week: 'Week 3', satisfaction: 92, reviews: 15 },
  { week: 'Week 4', satisfaction: 97, reviews: 22 }
];

const Analytics = () => {
  const currentMonth = revenueData[revenueData.length - 1];
  const previousMonth = revenueData[revenueData.length - 2];
  
  const revenueGrowth = ((currentMonth.revenue - previousMonth.revenue) / previousMonth.revenue * 100).toFixed(1);
  const patientGrowth = ((currentMonth.patients - previousMonth.patients) / previousMonth.patients * 100).toFixed(1);
  const profitMargin = (((currentMonth.revenue - currentMonth.expenses) / currentMonth.revenue) * 100).toFixed(1);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics & Insights</h1>
            <p className="text-muted-foreground mt-1">Comprehensive business intelligence and performance metrics</p>
          </div>
          <div className="flex space-x-2">
            <Select defaultValue="6months">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month">1 Month</SelectItem>
                <SelectItem value="3months">3 Months</SelectItem>
                <SelectItem value="6months">6 Months</SelectItem>
                <SelectItem value="1year">1 Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-primary">₹{(currentMonth.revenue / 1000).toFixed(0)}K</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-secondary" />
                    <span className="text-sm text-secondary font-medium">+{revenueGrowth}%</span>
                  </div>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">New Patients</p>
                  <p className="text-2xl font-bold text-secondary">{currentMonth.patients}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-secondary" />
                    <span className="text-sm text-secondary font-medium">+{patientGrowth}%</span>
                  </div>
                </div>
                <Users className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Sessions</p>
                  <p className="text-2xl font-bold text-accent">{currentMonth.therapies}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-secondary" />
                    <span className="text-sm text-secondary font-medium">+6.2%</span>
                  </div>
                </div>
                <Activity className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Profit Margin</p>
                  <p className="text-2xl font-bold text-primary">{profitMargin}%</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-secondary" />
                    <span className="text-sm text-secondary font-medium">+2.1%</span>
                  </div>
                </div>
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Trend */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Revenue vs Expenses Trend</CardTitle>
              <Badge className="bg-gradient-secondary text-secondary-foreground">
                Net Profit: ₹{((currentMonth.revenue - currentMonth.expenses) / 1000).toFixed(0)}K
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '6px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stackId="1"
                  stroke="hsl(var(--primary))" 
                  fill="hsl(var(--primary))"
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="expenses" 
                  stackId="2"
                  stroke="hsl(var(--accent))" 
                  fill="hsl(var(--accent))"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Detailed Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Therapist Performance */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Therapist Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {therapistPerformance.map((therapist, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-card transition-smooth">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{therapist.name}</h4>
                      <p className="text-sm text-primary">{therapist.speciality}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                        <span>{therapist.sessions} sessions</span>
                        <span>⭐ {therapist.rating}</span>
                        <span>₹{(therapist.revenue / 1000).toFixed(0)}K revenue</span>
                      </div>
                    </div>
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Top {index + 1}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Patient Satisfaction */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Patient Satisfaction Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={patientSatisfaction}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                  <YAxis domain={[85, 100]} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '6px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="satisfaction" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--secondary))', strokeWidth: 2, r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 text-center">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-secondary/20 rounded-lg">
                  <span className="text-sm font-medium">Average Rating:</span>
                  <Badge className="bg-secondary text-secondary-foreground">
                    4.7/5.0 ⭐
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Original Analytics Chart Component */}
        <AnalyticsChart />

        {/* Business Insights */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>AI-Powered Business Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Peak Hours Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Most bookings occur between 10 AM - 2 PM. Consider adding more therapists during these hours to reduce wait times.
                </p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">Seasonal Trends</h4>
                <p className="text-sm text-muted-foreground">
                  Winter months show 23% higher demand for warming therapies like Abhyanga. Adjust inventory accordingly.
                </p>
              </div>
              
              <div className="p-4 bg-accent/10 rounded-lg">
                <h4 className="font-semibold text-accent mb-2">Revenue Optimization</h4>
                <p className="text-sm text-muted-foreground">
                  Panchakarma packages show highest ROI. Consider promoting these treatments to increase profitability.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;