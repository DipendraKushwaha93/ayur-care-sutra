import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  location: string;
  dosha: "Vata" | "Pitta" | "Kapha" | "Mixed";
  lastVisit: string;
  nextTherapy: string;
  status: "Active" | "Pending" | "Completed";
}

const initialPatients: Patient[] = [
  {
    id: "1",
    name: "Priya Sharma",
    age: 34,
    gender: "Female",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    dosha: "Pitta",
    lastVisit: "2 days ago",
    nextTherapy: "Abhyanga - Tomorrow 10:00 AM",
    status: "Active",
  },
];

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);

  // Form state
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [dosha, setDosha] = useState<Patient["dosha"]>("Vata");

  const addPatient = () => {
    if (!name || !phone) return alert("Name & Phone are required!");

    const newPatient: Patient = {
      id: String(Date.now()),
      name,
      age: Number(age),
      gender,
      phone,
      location,
      dosha,
      lastVisit: "Today",
      nextTherapy: "Assessment pending",
      status: "Pending",
    };

    setPatients([...patients, newPatient]);

    // reset form
    setName("");
    setAge("");
    setGender("Male");
    setPhone("");
    setLocation("");
    setDosha("Vata");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Patient Management</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary">
              Add Patient
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Patient</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <Label>Age</Label>
                <Input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                />
              </div>
              <div>
                <Label>Gender</Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Phone</Label>
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <Label>Location</Label>
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div>
                <Label>Dosha</Label>
                <Select value={dosha} onValueChange={(val) => setDosha(val as Patient["dosha"])}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select dosha" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Vata">Vata</SelectItem>
                    <SelectItem value="Pitta">Pitta</SelectItem>
                    <SelectItem value="Kapha">Kapha</SelectItem>
                    <SelectItem value="Mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={addPatient} className="w-full">
                Save Patient
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Patients List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {patients.map((p) => (
          <div key={p.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg">{p.name}</h2>
            <p className="text-sm text-muted-foreground">{p.age} yrs • {p.gender}</p>
            <p className="text-sm">{p.phone}</p>
            <p className="text-sm">{p.location}</p>
            <p className="text-sm font-medium">Dosha: {p.dosha}</p>
            <p className="text-sm text-muted-foreground">{p.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
=======
import { DashboardLayout } from "@/components/DashboardLayout";
import { PatientCard } from "@/components/PatientCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, Users, UserPlus, TrendingUp } from "lucide-react";

const patients = [
  {
    id: '1',
    name: 'Priya Sharma',
    age: 34,
    gender: 'Female',
    phone: '+91 98765 43210',
    location: 'Mumbai, Maharashtra',
    dosha: 'Pitta' as const,
    lastVisit: '2 days ago',
    nextTherapy: 'Abhyanga - Tomorrow 10:00 AM',
    status: 'Active' as const
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    age: 45,
    gender: 'Male',
    phone: '+91 87654 32109',
    location: 'Delhi, NCR',
    dosha: 'Vata' as const,
    lastVisit: '1 week ago',
    nextTherapy: 'Shirodhara - Friday 2:00 PM',
    status: 'Active' as const
  },
  {
    id: '3',
    name: 'Meera Patel',
    age: 28,
    gender: 'Female',
    phone: '+91 76543 21098',
    location: 'Bangalore, Karnataka',
    dosha: 'Kapha' as const,
    lastVisit: '3 days ago',
    nextTherapy: 'Panchakarma - Next Monday',
    status: 'Pending' as const
  },
  {
    id: '4',
    name: 'Arjun Singh',
    age: 52,
    gender: 'Male',
    phone: '+91 65432 10987',
    location: 'Jaipur, Rajasthan',
    dosha: 'Mixed' as const,
    lastVisit: '1 month ago',
    nextTherapy: 'Assessment needed',
    status: 'Completed' as const
  },
  {
    id: '5',
    name: 'Kavita Reddy',
    age: 41,
    gender: 'Female',
    phone: '+91 54321 09876',
    location: 'Hyderabad, Telangana',
    dosha: 'Pitta' as const,
    lastVisit: '5 days ago',
    nextTherapy: 'Nasya - Thursday 11:00 AM',
    status: 'Active' as const
  },
  {
    id: '6',
    name: 'Deepak Gupta',
    age: 38,
    gender: 'Male',
    phone: '+91 43210 98765',
    location: 'Pune, Maharashtra',
    dosha: 'Kapha' as const,
    lastVisit: '2 weeks ago',
    nextTherapy: 'Follow-up consultation',
    status: 'Pending' as const
  }
];

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDosha, setFilterDosha] = useState("all");

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.phone.includes(searchTerm) ||
                         patient.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || patient.status.toLowerCase() === filterStatus;
    const matchesDosha = filterDosha === "all" || patient.dosha.toLowerCase() === filterDosha;
    
    return matchesSearch && matchesStatus && matchesDosha;
  });

  const stats = {
    total: patients.length,
    active: patients.filter(p => p.status === 'Active').length,
    pending: patients.filter(p => p.status === 'Pending').length,
    completed: patients.filter(p => p.status === 'Completed').length
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Patient Management</h1>
            <p className="text-muted-foreground mt-1">Comprehensive patient records and lifecycle management</p>
          </div>
          <Button className="bg-gradient-primary hover:bg-primary-light">
            <UserPlus className="w-4 h-4 mr-2" />
            Add New Patient
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Patients</p>
                  <p className="text-2xl font-bold text-primary">{stats.total}</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active</p>
                  <p className="text-2xl font-bold text-secondary">{stats.active}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-accent">{stats.pending}</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-accent"></div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-muted-foreground">{stats.completed}</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-muted-foreground"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Search & Filter Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, phone, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filterDosha} onValueChange={setFilterDosha}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by dosha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Doshas</SelectItem>
                  <SelectItem value="vata">Vata</SelectItem>
                  <SelectItem value="pitta">Pitta</SelectItem>
                  <SelectItem value="kapha">Kapha</SelectItem>
                  <SelectItem value="mixed">Mixed</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold">Patient Records</h2>
            <Badge variant="outline">{filteredPatients.length} results</Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">Export CSV</Button>
            <Button variant="outline" size="sm">Print List</Button>
          </div>
        </div>

        {/* Patient Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPatients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </div>

        {filteredPatients.length === 0 && (
          <Card className="shadow-card">
            <CardContent className="p-12 text-center">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-muted-foreground">No patients found</h3>
              <p className="text-sm text-muted-foreground mt-1">Try adjusting your search criteria or add a new patient</p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Patients;
>>>>>>> 8d5edffa09f12f5f7106509e27b9d130cd358cee
