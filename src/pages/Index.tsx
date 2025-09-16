import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardStats } from "@/components/DashboardStats";
import { PatientCard } from "@/components/PatientCard";
import { DoshaAssessment } from "@/components/DoshaAssessment";
import { TherapySchedule } from "@/components/TherapySchedule";
import { AnalyticsChart } from "@/components/AnalyticsChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, Calendar, TrendingUp } from "lucide-react";
import heroImage from "@/assets/ayurveda-hero.jpg";

const recentPatients = [
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
  }
];

const doshaScores = {
  vata: 30,
  pitta: 45,
  kapha: 25
};

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="h-40 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-primary/80" />
            <div className="relative h-full flex items-center justify-between p-6">
              <div className="text-white">
                <h1 className="text-3xl font-bold mb-2">Welcome to AyurSutra</h1>
                <p className="text-white/90">Intelligent Panchkarma & Ayurvedic Wellness Management</p>
                <div className="flex items-center space-x-4 mt-3">
                  <Badge className="bg-white/20 text-white border-white/30">
                    <Calendar className="w-3 h-3 mr-1" />
                    Today: 18 appointments
                  </Badge>
                  <Badge className="bg-white/20 text-white border-white/30">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    94.2% success rate
                  </Badge>
                </div>
              </div>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                <Plus className="w-4 h-4 mr-2" />
                Add Patient
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <DashboardStats />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Patients */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Recent Patients</h2>
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <Users className="w-4 h-4 mr-2" />
                View All Patients
              </Button>
            </div>
            
            <div className="grid gap-4">
              {recentPatients.map((patient) => (
                <PatientCard key={patient.id} patient={patient} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <TherapySchedule />
            <DoshaAssessment scores={doshaScores} primaryDosha="Pitta" />
          </div>
        </div>

        {/* Analytics Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Analytics & Insights</h2>
          <AnalyticsChart />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
