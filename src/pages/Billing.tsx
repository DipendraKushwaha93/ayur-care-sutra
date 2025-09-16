import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CreditCard, 
  Plus, 
  Search, 
  Filter, 
  Download,
  Receipt,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const invoices = [
  {
    id: 'INV-001',
    patientName: 'Priya Sharma',
    services: ['Abhyanga Massage', 'Consultation'],
    amount: 2850,
    date: '2024-01-15',
    dueDate: '2024-01-30',
    status: 'Paid',
    paymentMethod: 'Card',
    therapist: 'Dr. Ramesh Kumar'
  },
  {
    id: 'INV-002',
    patientName: 'Rajesh Kumar',
    services: ['Shirodhara', 'Herbal Medicine'],
    amount: 2400,
    date: '2024-01-14',
    dueDate: '2024-01-29',
    status: 'Pending',
    paymentMethod: null,
    therapist: 'Dr. Meera Joshi'
  },
  {
    id: 'INV-003',
    patientName: 'Meera Patel',
    services: ['Panchakarma Package (5 days)'],
    amount: 15000,
    date: '2024-01-12',
    dueDate: '2024-01-27',
    status: 'Partially Paid',
    paymentMethod: 'UPI',
    therapist: 'Dr. Arjun Singh'
  },
  {
    id: 'INV-004',
    patientName: 'Sunita Reddy',
    services: ['Nasya', 'Consultation'],
    amount: 1550,
    date: '2024-01-10',
    dueDate: '2024-01-25',
    status: 'Overdue',
    paymentMethod: null,
    therapist: 'Dr. Priya Sharma'
  }
];

const packages = [
  {
    id: '1',
    name: 'Basic Wellness Package',
    services: ['Consultation', 'Abhyanga', 'Herbal Tea'],
    price: 3500,
    duration: '1 session',
    popular: false
  },
  {
    id: '2',
    name: 'Stress Relief Package',
    services: ['Abhyanga', 'Shirodhara', 'Consultation', 'Meditation'],
    price: 5500,
    duration: '2 sessions',
    popular: true
  },
  {
    id: '3',
    name: 'Complete Detox Package',
    services: ['Panchakarma (5 days)', 'Consultation', 'Follow-up', 'Diet Plan'],
    price: 18000,
    duration: '5 days',
    popular: false
  },
  {
    id: '4',
    name: 'Monthly Maintenance',
    services: ['4x Abhyanga', '2x Consultation', 'Herbal Supplements'],
    price: 12000,
    duration: '1 month',
    popular: true
  }
];

const statusColors = {
  'Paid': 'bg-secondary text-secondary-foreground',
  'Pending': 'bg-accent text-accent-foreground',
  'Partially Paid': 'bg-primary text-primary-foreground',
  'Overdue': 'bg-destructive text-destructive-foreground'
};

const Billing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || 
                         invoice.status.toLowerCase().replace(' ', '-') === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const stats = {
    totalRevenue: invoices.reduce((sum, inv) => sum + inv.amount, 0),
    paidInvoices: invoices.filter(i => i.status === 'Paid').length,
    pendingAmount: invoices.filter(i => i.status !== 'Paid').reduce((sum, inv) => sum + inv.amount, 0),
    overdueCount: invoices.filter(i => i.status === 'Overdue').length
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Billing & Payments</h1>
            <p className="text-muted-foreground mt-1">Manage invoices, payments, and treatment packages</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button className="bg-gradient-primary hover:bg-primary-light">
              <Plus className="w-4 h-4 mr-2" />
              New Invoice
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold text-primary">₹{(stats.totalRevenue / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-secondary mt-1">This month</p>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Paid Invoices</p>
                  <p className="text-2xl font-bold text-secondary">{stats.paidInvoices}</p>
                  <p className="text-xs text-secondary mt-1">Completed</p>
                </div>
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Amount</p>
                  <p className="text-2xl font-bold text-accent">₹{(stats.pendingAmount / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-accent mt-1">Awaiting payment</p>
                </div>
                <Clock className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Overdue</p>
                  <p className="text-2xl font-bold text-destructive">{stats.overdueCount}</p>
                  <p className="text-xs text-destructive mt-1">Need attention</p>
                </div>
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="invoices" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-2">
            <TabsTrigger value="invoices" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Invoices & Payments
            </TabsTrigger>
            <TabsTrigger value="packages" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Treatment Packages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="invoices" className="space-y-6">
            {/* Filters */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Search & Filter Invoices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search patient or invoice..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Payment Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="partially-paid">Partially Paid</SelectItem>
                      <SelectItem value="overdue">Overdue</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Date Range
                  </Button>
                  
                  <Button variant="outline">
                    <Receipt className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Invoice List */}
            <div className="space-y-4">
              {filteredInvoices.map((invoice) => (
                <Card key={invoice.id} className="shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{invoice.patientName}</h3>
                          <Badge className="text-xs">{invoice.id}</Badge>
                          <Badge className={statusColors[invoice.status as keyof typeof statusColors]} variant="secondary">
                            {invoice.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-primary font-medium">{invoice.therapist}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">₹{invoice.amount.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Due: {invoice.dueDate}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-medium">Services:</p>
                      <div className="flex flex-wrap gap-2">
                        {invoice.services.map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>Invoice Date: {invoice.date}</span>
                      {invoice.paymentMethod && (
                        <span>Payment: {invoice.paymentMethod}</span>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-3 h-3 mr-1" />
                        Download PDF
                      </Button>
                      {invoice.status !== 'Paid' && (
                        <Button size="sm" className="bg-gradient-primary">
                          <CreditCard className="w-3 h-3 mr-1" />
                          Collect Payment
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="packages" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <Card key={pkg.id} className={`shadow-card hover:shadow-elegant transition-smooth ${pkg.popular ? 'border-primary ring-1 ring-primary/20' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{pkg.name}</CardTitle>
                      {pkg.popular && (
                        <Badge className="bg-gradient-secondary text-secondary-foreground">
                          Popular
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-3xl font-bold text-primary">₹{pkg.price.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Included Services:</p>
                      <div className="space-y-1">
                        {pkg.services.map((service, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-secondary" />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 pt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit Package
                      </Button>
                      <Button size="sm" className="flex-1 bg-gradient-primary">
                        Sell Package
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Package Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <p className="text-2xl font-bold text-primary">₹2.4L</p>
                    <p className="text-sm text-muted-foreground">Package Revenue</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-lg">
                    <p className="text-2xl font-bold text-secondary">68%</p>
                    <p className="text-sm text-muted-foreground">Package vs Individual</p>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <p className="text-2xl font-bold text-accent">24</p>
                    <p className="text-sm text-muted-foreground">Packages Sold</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-primary">4.2</p>
                    <p className="text-sm text-muted-foreground">Avg. Package Rating</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Billing;