import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, Phone, MapPin, Stethoscope } from "lucide-react";

interface Patient {
  id: string;
  name: string;
  avatar?: string;
  age: number;
  gender: string;
  phone: string;
  location: string;
  dosha: 'Vata' | 'Pitta' | 'Kapha' | 'Mixed';
  lastVisit: string;
  nextTherapy: string;
  status: 'Active' | 'Completed' | 'Pending';
}

interface PatientCardProps {
  patient: Patient;
}

const doshaColors = {
  Vata: "bg-primary text-primary-foreground",
  Pitta: "bg-secondary text-secondary-foreground", 
  Kapha: "bg-accent text-accent-foreground",
  Mixed: "bg-muted text-muted-foreground"
};

const statusColors = {
  Active: "bg-primary text-primary-foreground",
  Completed: "bg-secondary text-secondary-foreground",
  Pending: "bg-accent text-accent-foreground"
};

export function PatientCard({ patient }: PatientCardProps) {
  return (
    <Card className="shadow-card hover:shadow-elegant transition-smooth group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={patient.avatar} alt={patient.name} />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                {patient.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-card-foreground">{patient.name}</h3>
              <p className="text-sm text-muted-foreground">{patient.age} years, {patient.gender}</p>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-1">
            <Badge className={statusColors[patient.status]} variant="secondary">
              {patient.status}
            </Badge>
            <Badge className={doshaColors[patient.dosha]} variant="outline">
              {patient.dosha}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4" />
          <span>{patient.phone}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{patient.location}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>Last visit: {patient.lastVisit}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Stethoscope className="h-4 w-4" />
          <span>Next: {patient.nextTherapy}</span>
        </div>
        
        <div className="flex space-x-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1 hover:bg-primary hover:text-primary-foreground transition-smooth">
            View Profile
          </Button>
          <Button size="sm" className="flex-1 bg-gradient-primary hover:bg-primary-light transition-smooth">
            Schedule
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}