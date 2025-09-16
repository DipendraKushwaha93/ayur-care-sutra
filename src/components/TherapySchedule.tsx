import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, MapPin } from "lucide-react";

interface TherapySession {
  id: string;
  patientName: string;
  therapy: string;
  therapist: string;
  room: string;
  time: string;
  duration: string;
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
}

const sessions: TherapySession[] = [
  {
    id: '1',
    patientName: 'Priya Sharma',
    therapy: 'Abhyanga Massage',
    therapist: 'Dr. Ramesh Kumar',
    room: 'Room A1',
    time: '9:00 AM',
    duration: '60 min',
    status: 'In Progress'
  },
  {
    id: '2',
    patientName: 'Amit Patel',
    therapy: 'Shirodhara',
    therapist: 'Dr. Meera Joshi',
    room: 'Room B2',
    time: '10:30 AM',
    duration: '45 min',
    status: 'Scheduled'
  },
  {
    id: '3',
    patientName: 'Sunita Reddy',
    therapy: 'Panchakarma Detox',
    therapist: 'Dr. Arjun Singh',
    room: 'Room C1',
    time: '11:45 AM',
    duration: '90 min',
    status: 'Scheduled'
  }
];

const statusColors = {
  'Scheduled': 'bg-secondary text-secondary-foreground',
  'In Progress': 'bg-primary text-primary-foreground',
  'Completed': 'bg-muted text-muted-foreground',
  'Cancelled': 'bg-destructive text-destructive-foreground'
};

export function TherapySchedule() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span>Today's Schedule</span>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {sessions.map((session) => (
          <div key={session.id} className="p-4 border border-border rounded-lg hover:shadow-card transition-smooth">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-card-foreground">{session.patientName}</h4>
                <p className="text-sm text-primary font-medium">{session.therapy}</p>
              </div>
              <Badge className={statusColors[session.status]} variant="secondary">
                {session.status}
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{session.time} • {session.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>{session.room}</span>
              </div>
              <div className="flex items-center space-x-1 col-span-2">
                <User className="h-3 w-3" />
                <span>{session.therapist}</span>
              </div>
            </div>
            
            {session.status === 'Scheduled' && (
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Reschedule
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-primary">
                  Start Session
                </Button>
              </div>
            )}
            
            {session.status === 'In Progress' && (
              <Button size="sm" className="w-full bg-secondary hover:bg-secondary-light">
                Complete Session
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}