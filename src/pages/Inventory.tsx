import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  AlertTriangle, 
  TrendingDown,
  Leaf,
  Droplets,
  Scissors,
  ShoppingCart
} from "lucide-react";

const inventoryItems = [
  {
    id: '1',
    name: 'Sesame Oil (Organic)',
    category: 'Oils',
    currentStock: 45,
    minStock: 20,
    maxStock: 100,
    unit: 'bottles (500ml)',
    price: '₹450',
    supplier: 'Himalaya Organics',
    expiryDate: '2024-08-15',
    lastOrdered: '2024-01-10',
    status: 'In Stock',
    icon: Droplets
  },
  {
    id: '2',
    name: 'Ashwagandha Powder',
    category: 'Herbs',
    currentStock: 8,
    minStock: 15,
    maxStock: 50,
    unit: 'kg',
    price: '₹1,200',
    supplier: 'Kerala Ayurveda',
    expiryDate: '2024-06-30',
    lastOrdered: '2024-01-05',
    status: 'Low Stock',
    icon: Leaf
  },
  {
    id: '3',
    name: 'Cotton Towels (Set)',
    category: 'Equipment',
    currentStock: 25,
    minStock: 30,
    maxStock: 80,
    unit: 'sets',
    price: '₹350',
    supplier: 'Medical Supplies Co.',
    expiryDate: 'N/A',
    lastOrdered: '2024-01-08',
    status: 'Low Stock',
    icon: Scissors
  },
  {
    id: '4',
    name: 'Turmeric Powder (Pure)',
    category: 'Herbs',
    currentStock: 32,
    minStock: 10,
    maxStock: 60,
    unit: 'kg',
    price: '₹800',
    supplier: 'Organic India',
    expiryDate: '2024-12-20',
    lastOrdered: '2024-01-12',
    status: 'In Stock',
    icon: Leaf
  },
  {
    id: '5',
    name: 'Coconut Oil (Virgin)',
    category: 'Oils',
    currentStock: 2,
    minStock: 25,
    maxStock: 75,
    unit: 'bottles (1L)',
    price: '₹600',
    supplier: 'Kerala Naturals',
    expiryDate: '2024-09-30',
    lastOrdered: '2023-12-28',
    status: 'Critical',
    icon: Droplets
  },
  {
    id: '6',
    name: 'Massage Tables',
    category: 'Equipment',
    currentStock: 12,
    minStock: 8,
    maxStock: 15,
    unit: 'units',
    price: '₹25,000',
    supplier: 'Ayur Equipment Ltd.',
    expiryDate: 'N/A',
    lastOrdered: '2023-11-15',
    status: 'In Stock',
    icon: Package
  }
];

const statusColors = {
  'In Stock': 'bg-secondary text-secondary-foreground',
  'Low Stock': 'bg-accent text-accent-foreground',
  'Critical': 'bg-destructive text-destructive-foreground',
  'Out of Stock': 'bg-muted text-muted-foreground'
};

const categories = ['All', 'Oils', 'Herbs', 'Equipment', 'Medicines'];

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "All" || item.category === filterCategory;
    const matchesStatus = filterStatus === "all" || 
                         item.status.toLowerCase().replace(' ', '-') === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const stats = {
    total: inventoryItems.length,
    inStock: inventoryItems.filter(i => i.status === 'In Stock').length,
    lowStock: inventoryItems.filter(i => i.status === 'Low Stock').length,
    critical: inventoryItems.filter(i => i.status === 'Critical').length,
    totalValue: inventoryItems.reduce((sum, item) => sum + (item.currentStock * parseInt(item.price.replace('₹', '').replace(',', ''))), 0)
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Inventory Management</h1>
            <p className="text-muted-foreground mt-1">Track herbs, oils, equipment and supplies</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Purchase Order
            </Button>
            <Button className="bg-gradient-primary hover:bg-primary-light">
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{stats.total}</p>
                <p className="text-sm text-muted-foreground">Total Items</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">{stats.inStock}</p>
                <p className="text-sm text-muted-foreground">In Stock</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">{stats.lowStock}</p>
                <p className="text-sm text-muted-foreground">Low Stock</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-destructive">{stats.critical}</p>
                <p className="text-sm text-muted-foreground">Critical</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-lg font-bold text-primary">₹{(stats.totalValue / 100000).toFixed(1)}L</p>
                <p className="text-sm text-muted-foreground">Total Value</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="inventory" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-2">
            <TabsTrigger value="inventory" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Current Inventory
            </TabsTrigger>
            <TabsTrigger value="alerts" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Alerts & Reorders
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inventory" className="space-y-6">
            {/* Filters */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Search & Filter Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search items or suppliers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <Select value={filterCategory} onValueChange={setFilterCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Stock Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="in-stock">In Stock</SelectItem>
                      <SelectItem value="low-stock">Low Stock</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Export CSV
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Inventory Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map((item) => {
                const IconComponent = item.icon;
                const stockPercentage = (item.currentStock / item.maxStock) * 100;
                
                return (
                  <Card key={item.id} className="shadow-card hover:shadow-elegant transition-smooth">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-gradient-primary rounded-lg">
                            <IconComponent className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                          </div>
                        </div>
                        <Badge className={statusColors[item.status as keyof typeof statusColors]} variant="secondary">
                          {item.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Stock Level</span>
                          <span>{item.currentStock} / {item.maxStock} {item.unit}</span>
                        </div>
                        <Progress value={stockPercentage} className="h-2" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-muted-foreground">Price</p>
                          <p className="font-semibold">{item.price}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Min Stock</p>
                          <p className="font-semibold">{item.minStock} {item.unit}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Supplier</p>
                          <p className="font-semibold text-primary">{item.supplier}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Expiry</p>
                          <p className="font-semibold">{item.expiryDate}</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Edit Item
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-primary">
                          Reorder
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            {/* Critical Alerts */}
            <Card className="shadow-card border-destructive">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Critical Stock Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inventoryItems.filter(item => item.status === 'Critical').map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-destructive/10 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-destructive">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Only {item.currentStock} {item.unit} remaining (Min: {item.minStock})
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                          Order Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Low Stock Warnings */}
            <Card className="shadow-card border-accent">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-accent">
                  <TrendingDown className="h-5 w-5" />
                  <span>Low Stock Warnings</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inventoryItems.filter(item => item.status === 'Low Stock').map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-accent">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.currentStock} {item.unit} remaining (Min: {item.minStock})
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Remind Later
                        </Button>
                        <Button size="sm" className="bg-accent hover:bg-accent-light text-accent-foreground">
                          Reorder
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expiry Alerts */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Expiry Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <h4 className="font-semibold text-accent">Ashwagandha Powder</h4>
                    <p className="text-sm text-muted-foreground">Expires in 3 months (June 30, 2024)</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold">Sesame Oil (Organic)</h4>
                    <p className="text-sm text-muted-foreground">Expires in 6 months (August 15, 2024)</p>
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

export default Inventory;