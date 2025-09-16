import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Droplets, 
  Leaf, 
  Flame, 
  Wind, 
  Clock, 
  Users, 
  MapPin, 
  Plus,
  TrendingUp,
  Activity,
  Star
} from "lucide-react";

const therapyTypes = [
  {
    id: '1',
    name: 'Abhyanga',
    description: 'Full body oil massage with warm herbal oils',
    duration: '60-90 min',
    price: '₹2,500',
    popularity: 95,
    sessions: 142,
    effectiveness: '96%',
    dosha: 'Vata, Pitta',
    benefits: ['Stress relief', 'Improved circulation', 'Muscle relaxation'],
    icon: Droplets,
    color: 'text-primary'
  },
  {
    id: '2',
    name: 'Shirodhara',
    description: 'Continuous oil pouring on forehead for mental peace',
    duration: '45-60 min',
    price: '₹2,000',
    popularity: 88,
    sessions: 98,
    effectiveness: '94%',
    dosha: 'Vata, Pitta',
    benefits: ['Anxiety relief', 'Better sleep', 'Mental clarity'],
    icon: Droplets,
    color: 'text-secondary'
  },
  {
    id: '3',
    name: 'Panchakarma',
    description: 'Complete detoxification and rejuvenation program',
    duration: '5-21 days',
    price: '₹15,000',
    popularity: 76,
    sessions: 32,
    effectiveness: '98%',
    dosha: 'All doshas',
    benefits: ['Complete detox', 'Immunity boost', 'Longevity'],
    icon: Leaf,
    color: 'text-accent'
  },
  {
    id: '4',
    name: 'Nasya',
    description: 'Nasal administration of medicated oils',
    duration: '30-45 min',
    price: '₹1,200',
    popularity: 64,
    sessions: 67,
    effectiveness: '89%',
    dosha: 'Kapha, Vata',
    benefits: ['Sinus relief', 'Headache cure', 'Mental clarity'],
    icon: Wind,
    color: 'text-primary'
  },
  {
    id: '5',
    name: 'Basti',
    description: 'Medicated enema therapy for cleansing',
    duration: '45-60 min',
    price: '₹1,800',
    popularity: 52,
    sessions: 43,
    effectiveness: '91%',
    dosha: 'Vata',
    benefits: ['Digestive health', 'Joint pain relief', 'Nervous system'],
    icon: Droplets,
    color: 'text-secondary'
  }
];

const rooms = [
  {
    id: '1',
    name: 'Room A1',
    type: 'Massage Room',
    status: 'Occupied',
    currentPatient: 'Priya Sharma',
    therapy: 'Abhyanga',
    timeLeft: '25 min',
    nextBooking: '11:30 AM - Rajesh Kumar',
    equipment: ['Massage table', 'Oil warmer', 'Towels']
  },
  {
    id: '2',
    name: 'Room A2',
    type: 'Massage Room',
    status: 'Available',
    currentPatient: null,
    therapy: null,
    timeLeft: null,
    nextBooking: '12:00 PM - Meera Patel',
    equipment: ['Massage table', 'Oil warmer', 'Towels']
  },
  {
    id: '3',
    name: 'Room B1',
    type: 'Shirodhara Room',
    status: 'Cleaning',
    currentPatient: null,
    therapy: null,
    timeLeft: '10 min',
    nextBooking: '1:00 PM - Amit Singh',
    equipment: ['Shirodhara table', 'Oil vessel', 'Stand']
  },
  {
    id: '4',
    name: 'Room B2',
    type: 'Shirodhara Room',
    status: 'Occupied',
    currentPatient: 'Kavita Menon',
    therapy: 'Shirodhara',
    timeLeft: '15 min',
    nextBooking: '2:30 PM - Deepak Gupta',
    equipment: ['Shirodhara table', 'Oil vessel', 'Stand']
  },
  {
    id: '5',
    name: 'Room C1',
    type: 'Panchakarma Suite',
    status: 'Available',
    currentPatient: null,
    therapy: null,
    timeLeft: null,
    nextBooking: '3:00 PM - Sunita Reddy',
    equipment: ['Multiple stations', 'Steam chamber', 'Massage area']
  }
];

const statusColors = {
  'Available': 'bg-secondary text-secondary-foreground',
  'Occupied': 'bg-primary text-primary-foreground',
  'Cleaning': 'bg-accent text-accent-foreground',
  'Maintenance': 'bg-destructive text-destructive-foreground'
};

const Therapies = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Therapy Management</h1>
            <p className="text-muted-foreground mt-1">Manage therapy types, rooms, and treatment protocols</p>
          </div>
          <Button className="bg-gradient-primary hover:bg-primary-light">
            <Plus className="w-4 h-4 mr-2" />
            Add Therapy
          </Button>
        </div>

        <Tabs defaultValue="therapies" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-2">
            <TabsTrigger value="therapies" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Therapy Types
            </TabsTrigger>
            <TabsTrigger value="rooms" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Room Management
            </TabsTrigger>
          </TabsList>

          <TabsContent value="therapies" className="space-y-6">
            {/* Therapy Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Therapies</p>
                      <p className="text-2xl font-bold text-primary">5</p>
                    </div>
                    <Activity className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Sessions Today</p>
                      <p className="text-2xl font-bold text-secondary">18</p>
                    </div>
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg. Effectiveness</p>
                      <p className="text-2xl font-bold text-accent">93.6%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Revenue Today</p>
                      <p className="text-2xl font-bold text-primary">₹45,600</p>
                    </div>
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Therapy Types Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {therapyTypes.map((therapy) => {
                const IconComponent = therapy.icon;
                return (
                  <Card key={therapy.id} className="shadow-card hover:shadow-elegant transition-smooth">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-gradient-primary rounded-lg">
                            <IconComponent className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{therapy.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{therapy.duration}</p>
                          </div>
                        </div>
                        <Badge className="bg-secondary text-secondary-foreground">
                          {therapy.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{therapy.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Popularity</span>
                            <span>{therapy.popularity}%</span>
                          </div>
                          <Progress value={therapy.popularity} className="h-2" />
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 text-center text-sm">
                          <div>
                            <p className="font-semibold text-primary">{therapy.sessions}</p>
                            <p className="text-muted-foreground">Sessions</p>
                          </div>
                          <div>
                            <p className="font-semibold text-secondary">{therapy.effectiveness}</p>
                            <p className="text-muted-foreground">Success</p>
                          </div>
                          <div>
                            <p className="font-semibold text-accent">{therapy.dosha}</p>
                            <p className="text-muted-foreground">Dosha</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium mb-2">Key Benefits:</p>
                        <div className="flex flex-wrap gap-1">
                          {therapy.benefits.map((benefit, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Edit Details
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-primary">
                          Book Session
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-6">
            {/* Room Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Rooms</p>
                      <p className="text-2xl font-bold text-primary">{rooms.length}</p>
                    </div>
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Available</p>
                      <p className="text-2xl font-bold text-secondary">
                        {rooms.filter(r => r.status === 'Available').length}
                      </p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-secondary"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Occupied</p>
                      <p className="text-2xl font-bold text-primary">
                        {rooms.filter(r => r.status === 'Occupied').length}
                      </p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Utilization</p>
                      <p className="text-2xl font-bold text-accent">78%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Room Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {rooms.map((room) => (
                <Card key={room.id} className="shadow-card hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{room.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{room.type}</p>
                      </div>
                      <Badge className={statusColors[room.status as keyof typeof statusColors]} variant="secondary">
                        {room.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {room.currentPatient && (
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-primary">{room.currentPatient}</p>
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{room.timeLeft}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{room.therapy}</p>
                      </div>
                    )}
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Next Booking:</p>
                      <p className="text-sm text-primary">{room.nextBooking}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Equipment:</p>
                      <div className="flex flex-wrap gap-1">
                        {room.equipment.map((item, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        View Schedule
                      </Button>
                      <Button size="sm" className="flex-1 bg-gradient-primary">
                        Manage Room
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Therapies;