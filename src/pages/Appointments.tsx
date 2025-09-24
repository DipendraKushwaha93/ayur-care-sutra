import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, MapPin, Plus, Filter, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Initial sample appointments
const initialAppointments = [
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
  const [appointments, setAppointments] = useState(initialAppointments);
  const [selectedDate, setSelectedDate] = useState('2024-01-15');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterTherapist, setFilterTherapist] = useState('all');
  const [openModal, setOpenModal] = useState(false);

  // Load appointments from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("appointments");
    if (stored) setAppointments(JSON.parse(stored));
  }, []);

  // Save appointments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  // Handle new appointment booking
  const handleAddAppointment = (newAppointment) => {
    setAppointments([...appointments, { id: Date.now().toString(), ...newAppointment }]);
    setOpenModal(false);
  };

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
          <Button className="bg-gradient-primary hover:bg-primary-light" onClick={() => setOpenModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Book Appointment
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">{stats.total}</p>
              <p className="text-sm text-muted-foreground">Total Today</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-secondary">{stats.confirmed}</p>
              <p className="text-sm text-muted-foreground">Confirmed</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">{stats.inProgress}</p>
              <p className="text-sm text-muted-foreground">In Progress</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-muted-foreground">{stats.completed}</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-destructive">{stats.cancelled}</p>
              <p className="text-sm text-muted-foreground">Cancelled</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Schedule for {selectedDate}</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm"><ChevronLeft className="w-4 h-4" /></Button>
                <Button variant="outline" size="sm">Today</Button>
                <Button variant="outline" size="sm"><ChevronRight className="w-4 h-4" /></Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-48"><SelectValue placeholder="Filter by status" /></SelectTrigger>
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
                <SelectTrigger className="w-48"><SelectValue placeholder="Filter by therapist" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Therapists</SelectItem>
                  {therapists.map(t => (<SelectItem key={t} value={t}>{t}</SelectItem>))}
                </SelectContent>
              </Select>

              <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Room View</Button>
              <Button variant="outline"><Calendar className="w-4 h-4 mr-2" /> Week View</Button>
            </div>
          </CardContent>
        </Card>

        {/* Appointments List */}
        <div className="grid gap-4">
          {filteredAppointments.length === 0 && (
            <Card className="shadow-card">
              <CardContent className="p-12 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-muted-foreground">No appointments found</h3>
                <p className="text-sm text-muted-foreground mt-1">Try adjusting your filters or book a new appointment</p>
              </CardContent>
            </Card>
          )}

          {filteredAppointments.map(appointment => (
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
                        <div className="flex items-center space-x-1"><User className="h-3 w-3" /><span>{appointment.therapist}</span></div>
                        <div className="flex items-center space-x-1"><MapPin className="h-3 w-3" /><span>{appointment.room}</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={statusColors[appointment.status as keyof typeof statusColors]}>{appointment.status}</Badge>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>

                {appointment.notes && (
                  <div className="bg-muted/50 p-3 rounded-lg mt-4">
                    <p className="text-sm text-muted-foreground"><strong>Notes:</strong> {appointment.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal Form */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <Button className="absolute top-3 right-3 p-1" variant="ghost" onClick={() => setOpenModal(false)}>
              <X className="w-4 h-4" />
            </Button>
            <h2 className="text-lg font-bold mb-4">Book Appointment</h2>
            <AppointmentForm onSubmit={handleAddAppointment} />
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

// Booking Form Component
const AppointmentForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientPhone: '',
    therapy: '',
    therapist: '',
    room: '',
    date: '',
    time: '',
    duration: '',
    status: 'Pending',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input required name="patientName" placeholder="Patient Name" value={formData.patientName} onChange={handleChange} className="w-full p-2 border rounded" />
      <input required name="patientPhone" placeholder="Patient Phone" value={formData.patientPhone} onChange={handleChange} className="w-full p-2 border rounded" />
      <input required name="therapy" placeholder="Therapy" value={formData.therapy} onChange={handleChange} className="w-full p-2 border rounded" />
      <input required name="therapist" placeholder="Therapist" value={formData.therapist} onChange={handleChange} className="w-full p-2 border rounded" />
      <input required name="room" placeholder="Room" value={formData.room} onChange={handleChange} className="w-full p-2 border rounded" />
      <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" />
      <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full p-2 border rounded" />
      <input required name="duration" placeholder="Duration (e.g., 60 min)" value={formData.duration} onChange={handleChange} className="w-full p-2 border rounded" />
      <textarea name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} className="w-full p-2 border rounded" />
      <Button type="submit" className="w-full bg-gradient-primary">Book Appointment</Button>
    </form>
  );
};

export default Appointments;
