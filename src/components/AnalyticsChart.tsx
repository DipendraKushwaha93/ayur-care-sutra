import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
<<<<<<< HEAD
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend } from 'recharts';
=======
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
>>>>>>> 8d5edffa09f12f5f7106509e27b9d130cd358cee

const monthlyData = [
  { month: 'Jan', patients: 65, revenue: 45000, therapies: 180 },
  { month: 'Feb', patients: 78, revenue: 52000, therapies: 210 },
  { month: 'Mar', patients: 85, revenue: 58000, therapies: 245 },
  { month: 'Apr', patients: 92, revenue: 61000, therapies: 268 },
  { month: 'May', patients: 87, revenue: 59000, therapies: 255 },
  { month: 'Jun', patients: 95, revenue: 64000, therapies: 285 }
];

const doshaDistribution = [
  { name: 'Vata', value: 35, color: 'hsl(140 60% 25%)' },
  { name: 'Pitta', value: 40, color: 'hsl(45 85% 65%)' },
  { name: 'Kapha', value: 25, color: 'hsl(15 75% 70%)' }
];

const therapyTypes = [
  { therapy: 'Abhyanga', count: 45, revenue: 67500 },
  { therapy: 'Shirodhara', count: 32, revenue: 48000 },
  { therapy: 'Panchakarma', count: 18, revenue: 54000 },
  { therapy: 'Nasya', count: 25, revenue: 25000 },
  { therapy: 'Basti', count: 15, revenue: 30000 }
];

export function AnalyticsChart() {
<<<<<<< HEAD
  // Quick Stats
  const totalPatients = monthlyData.reduce((sum, d) => sum + d.patients, 0);
  const totalRevenue = monthlyData.reduce((sum, d) => sum + d.revenue, 0);
  const avgTherapies = (monthlyData.reduce((sum, d) => sum + d.therapies, 0) / monthlyData.length).toFixed(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:col-span-2">
        <Card className="shadow-card">
          <CardHeader><CardTitle>Total Patients</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold">{totalPatients}</p></CardContent>
        </Card>
        <Card className="shadow-card">
          <CardHeader><CardTitle>Total Revenue</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</p></CardContent>
        </Card>
        <Card className="shadow-card">
          <CardHeader><CardTitle>Avg. Therapies</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold">{avgTherapies}</p></CardContent>
        </Card>
      </div>

      {/* Patient Growth with Dual Axis */}
      <Card className="shadow-card lg:col-span-2">
        <CardHeader><CardTitle>Patient & Revenue Growth</CardTitle></CardHeader>
=======
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="shadow-card lg:col-span-2">
        <CardHeader>
          <CardTitle>Patient Growth Trend</CardTitle>
        </CardHeader>
>>>>>>> 8d5edffa09f12f5f7106509e27b9d130cd358cee
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
<<<<<<< HEAD
              <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" />
              <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="patients" stroke="hsl(var(--primary))" strokeWidth={3} />
              <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="hsl(200 70% 50%)" strokeWidth={3} />
=======
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="patients" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
              />
>>>>>>> 8d5edffa09f12f5f7106509e27b9d130cd358cee
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

<<<<<<< HEAD
      {/* Dosha Pie Chart */}
      <Card className="shadow-card">
        <CardHeader><CardTitle>Dosha Distribution</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={doshaDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
=======
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Dosha Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={doshaDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
>>>>>>> 8d5edffa09f12f5f7106509e27b9d130cd358cee
                {doshaDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
<<<<<<< HEAD
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Therapy Popularity by Revenue */}
      <Card className="shadow-card">
        <CardHeader><CardTitle>Therapy Revenue</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={therapyTypes} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
              <YAxis dataKey="therapy" type="category" stroke="hsl(var(--muted-foreground))" width={90} />
              <Tooltip />
              <Bar dataKey="revenue" fill="hsl(200 70% 50%)" radius={[0, 4, 4, 0]} />
=======
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-4 mt-4">
            {doshaDistribution.map((item) => (
              <div key={item.name} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-muted-foreground">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Popular Therapies</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={therapyTypes} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
              <YAxis dataKey="therapy" type="category" stroke="hsl(var(--muted-foreground))" width={80} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px'
                }}
              />
              <Bar 
                dataKey="count" 
                fill="hsl(var(--primary))"
                radius={[0, 4, 4, 0]}
              />
>>>>>>> 8d5edffa09f12f5f7106509e27b9d130cd358cee
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
<<<<<<< HEAD

    </div>
  );
}
=======
    </div>
  );
}
>>>>>>> 8d5edffa09f12f5f7106509e27b9d130cd358cee
