import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { PatientCard } from "@/components/PatientCard";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, Users, UserPlus, TrendingUp } from "lucide-react";

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
  // Add other existing patients here if needed
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

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDosha, setFilterDosha] = useState("all");

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

  const filteredPatients = patients.filter(patient => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
      <div className="space-y-8 p-6">
        {/* Header & Add Patient Dialog */}
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
                  <Input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
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
                  <Input value={location} onChange={(e) => setLocation(e.target.value)} />
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
                <Button onClick={addPatient} className="w-full">Save Patient</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-card">
            <CardContent>
              <p>Total Patients</p>
              <p className="text-xl font-bold">{stats.total}</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent>
              <p>Active</p>
              <p className="text-xl font-bold">{stats.active}</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent>
              <p>Pending</p>
              <p className="text-xl font-bold">{stats.pending}</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent>
              <p>Completed</p>
              <p className="text-xl font-bold">{stats.completed}</p>
            </CardContent>
          </Card>
        </div>

        {/* Patient List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPatients.map((p) => (
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
    </DashboardLayout>
  );
}
