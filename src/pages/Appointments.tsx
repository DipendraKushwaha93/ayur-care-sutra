import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, MapPin, Plus, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const appointments = [
  {
    id: '1',
    patientName: 'Priya Sharma',
    therapy: 'Abhyanga Massage',
    therapist: 'Dr. Ramesh Kumar',
    room: 'Room A1',
    date: '2024-01-15',
    time: '9:00 AM',
    duration: '60 min',
    status: 'Confirmed',
    patientPhone: '+91 98765 43210',
    notes: 'Regular monthly session'
  },
  {
    id: '2',
    patientName: 'Amit Patel',
    therapy: 'Shirodhara',
    therapist: 'Dr. Meera Joshi',
    room: 'Room B2',
    date: '2024-01-15',
    time: '10:30 AM',
    duration: '45 min',
    status: 'In Progress',
    patientPhone: '+91 87654 32109',
    notes: 'First time patient - anxiety treatment'
  },
  {
    id: '3',
    patientName: 'Sunita Reddy',
    therapy: 'Panchakarma Detox',
    therapist: 'Dr. Arjun Singh',
    room: 'Room C1',
    date: '2024-01-15',
    time: '11:45 AM',
    duration: '90 min',
    status: 'Confirmed',
    patientPhone: '+91 76543 21098',
    notes: '5-day detox program - Day 3'
  },
  {
    id: '4',
    patientName: 'Rajesh Kumar',
    therapy: 'Consultation',
    therapist: 'Dr. Kavitha Rao',
    room: 'Consultation Room',
    date: '2024-01-15',
    time: '2:00 PM',
    duration: '30 min',
    status: 'Pending',
    patientPhone: '+91 65432 10987',
    notes: 'Follow-up consultation'
  },
  {
    id: '5',
    patientName: 'Deepak Gupta',
    therapy: 'Nasya',
    therapist: 'Dr. Priya Sharma',
    room: 'Room A2',
    date: '2024-01-15',
    time: '3:30 PM',
    duration: '40 min',
    status: 'Confirmed',
    patientPhone: '+91 54321 09876',
    notes: 'Sinus congestion treatment'
  },
  {
    id: '6',
    patientName: 'Kavita Menon',
    therapy: 'Basti',
    therapist: 'Dr. Ramesh Kumar',
    room: 'Room C2',
    date: '2024-01-15',
    time: '4:15 PM',
    duration: '50 min',
    status: 'Cancelled',
    patientPhone: '+91 43210 98765',
    notes: 'Patient requested reschedule'
  }
];

const statusColors = {
  'Confirmed': 'bg-secondary text-secondary-foreground',
  'In Progress': 'bg-primary text-primary-foreground',
  'Completed': 'bg-muted text-muted-foreground',
  'Cancelled': 'bg-destructive text-destructive-foreground',
  'Pending': 'bg-accent text-accent-foreground'
};

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState('2024-01-15');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterTherapist, setFilterTherapist] = useState('all');

  const filteredAppointments = appointments.filter(apt => {
    const matchesStatus = filterStatus === 'all' || apt.status.toLowerCase().replace(' ', '-') === filterStatus;
    const matchesTherapist = filterTherapist === 'all' || apt.therapist === filterTherapist;
    return matchesStatus && matchesTherapist;
  });

  const stats = {
    total: appointments.length,
    confirmed: appointments.filter(a => a.status === 'Confirmed').length,
    inProgress: appointments.filter(a => a.status === 'In Progress').length,
    completed: appointments.filter(a => a.status === 'Completed').length,
    cancelled: appointments.filter(a => a.status === 'Cancelled').length
  };

  const therapists = [...new Set(appointments.map(a => a.therapist))];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Appointment Management</h1>
            <p className="text-muted-foreground mt-1">Schedule and manage therapy appointments across all rooms</p>
          </div>
          <Button className="bg-gradient-primary hover:bg-primary-light">
            <Plus className="w-4 h-4 mr-2" />
            Book Appointment
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{stats.total}</p>
                <p className="text-sm text-muted-foreground">Total Today</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">{stats.confirmed}</p>
                <p className="text-sm text-muted-foreground">Confirmed</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{stats.inProgress}</p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-muted-foreground">{stats.completed}</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-destructive">{stats.cancelled}</p>
                <p className="text-sm text-muted-foreground">Cancelled</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Date Navigation & Filters */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Schedule for January 15, 2024</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">Today</Button>
                <Button variant="outline" size="sm">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filterTherapist} onValueChange={setFilterTherapist}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by therapist" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Therapists</SelectItem>
                  {therapists.map(therapist => (
                    <SelectItem key={therapist} value={therapist}>{therapist}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Room View
              </Button>
              
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Week View
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Appointments Timeline */}
        <div className="grid gap-4">
          {filteredAppointments.map((appointment) => (
            <Card key={appointment.id} className="shadow-card hover:shadow-elegant transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center min-w-[80px]">
                      <div className="text-lg font-bold text-primary">{appointment.time}</div>
                      <div className="text-sm text-muted-foreground">{appointment.duration}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{appointment.patientName}</h3>
                      <p className="text-primary font-medium">{appointment.therapy}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{appointment.therapist}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{appointment.room}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={statusColors[appointment.status as keyof typeof statusColors]} variant="secondary">
                      {appointment.status}
                    </Badge>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
                
                {appointment.notes && (
                  <div className="bg-muted/50 p-3 rounded-lg mt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Notes:</strong> {appointment.notes}
                    </p>
                  </div>
                )}
                
                {appointment.status === 'Confirmed' && (
                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="sm">Reschedule</Button>
                    <Button size="sm" className="bg-gradient-primary">Start Session</Button>
                    <Button variant="outline" size="sm">Cancel</Button>
                  </div>
                )}
                
                {appointment.status === 'In Progress' && (
                  <div className="flex space-x-2 mt-4">
                    <Button size="sm" className="bg-secondary hover:bg-secondary-light">Complete Session</Button>
                    <Button variant="outline" size="sm">Add Notes</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAppointments.length === 0 && (
          <Card className="shadow-card">
            <CardContent className="p-12 text-center">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-muted-foreground">No appointments found</h3>
              <p className="text-sm text-muted-foreground mt-1">Try adjusting your filters or book a new appointment</p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Appointments;