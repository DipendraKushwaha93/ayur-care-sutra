import { DashboardLayout } from "@/components/DashboardLayout";
import { DoshaAssessment } from "@/components/DoshaAssessment";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Leaf, 
  Flame, 
  Droplets, 
  Plus, 
  User, 
  FileText, 
  CheckCircle,
  Clock,
  TrendingUp,
  Brain
} from "lucide-react";

const recentAssessments = [
  {
    id: '1',
    patientName: 'Priya Sharma',
    date: '2024-01-15',
    type: 'Initial Dosha Assessment',
    scores: { vata: 25, pitta: 50, kapha: 25 },
    primaryDosha: 'Pitta',
    status: 'Completed',
    recommendations: ['Abhyanga massage', 'Cooling herbs', 'Meditation']
  },
  {
    id: '2',
    patientName: 'Rajesh Kumar',
    date: '2024-01-14',
    type: 'Follow-up Assessment',
    scores: { vata: 60, pitta: 25, kapha: 15 },
    primaryDosha: 'Vata',
    status: 'Completed',
    recommendations: ['Basti therapy', 'Warm oil massage', 'Grounding practices']
  },
  {
    id: '3',
    patientName: 'Meera Patel',
    date: '2024-01-14',
    type: 'Seasonal Assessment',
    scores: { vata: 20, pitta: 30, kapha: 50 },
    primaryDosha: 'Kapha',
    status: 'In Progress',
    recommendations: ['Detox program', 'Vigorous exercise', 'Spicy foods']
  }
];

const assessmentTemplates = [
  {
    id: '1',
    name: 'Complete Dosha Analysis',
    questions: 45,
    duration: '20-25 min',
    type: 'Comprehensive',
    usage: 156,
    accuracy: '94%'
  },
  {
    id: '2',
    name: 'Quick Dosha Check',
    questions: 15,
    duration: '5-8 min',
    type: 'Basic',
    usage: 89,
    accuracy: '87%'
  },
  {
    id: '3',
    name: 'Seasonal Assessment',
    questions: 30,
    duration: '12-15 min',
    type: 'Seasonal',
    usage: 67,
    accuracy: '91%'
  },
  {
    id: '4',
    name: 'Post-Treatment Review',
    questions: 25,
    duration: '10-12 min',
    type: 'Follow-up',
    usage: 134,
    accuracy: '89%'
  }
];

const Assessments = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dosha Assessment Center</h1>
            <p className="text-muted-foreground mt-1">Comprehensive prakriti analysis and constitutional assessment tools</p>
          </div>
          <Button className="bg-gradient-primary hover:bg-primary-light">
            <Plus className="w-4 h-4 mr-2" />
            New Assessment
          </Button>
        </div>

        <Tabs defaultValue="assessments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
            <TabsTrigger value="assessments" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Recent Assessments
            </TabsTrigger>
            <TabsTrigger value="templates" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Assessment Templates
            </TabsTrigger>
            <TabsTrigger value="create" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Create Assessment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="assessments" className="space-y-6">
            {/* Assessment Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Assessments</p>
                      <p className="text-2xl font-bold text-primary">2,847</p>
                    </div>
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">This Month</p>
                      <p className="text-2xl font-bold text-secondary">186</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-secondary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg. Accuracy</p>
                      <p className="text-2xl font-bold text-accent">91.2%</p>
                    </div>
                    <Brain className="h-8 w-8 text-accent" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Pending</p>
                      <p className="text-2xl font-bold text-muted-foreground">12</p>
                    </div>
                    <Clock className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Assessments */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Recent Patient Assessments</h3>
                {recentAssessments.map((assessment) => (
                  <Card key={assessment.id} className="shadow-card hover:shadow-elegant transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-foreground">{assessment.patientName}</h4>
                          <p className="text-sm text-primary font-medium">{assessment.type}</p>
                          <p className="text-xs text-muted-foreground mt-1">{assessment.date}</p>
                        </div>
                        <Badge 
                          className={assessment.status === 'Completed' ? 'bg-secondary text-secondary-foreground' : 'bg-accent text-accent-foreground'}
                          variant="secondary"
                        >
                          {assessment.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-2 text-center text-sm">
                          <div className="flex items-center justify-center space-x-1">
                            <Leaf className="h-4 w-4 text-primary" />
                            <span>{assessment.scores.vata}% Vata</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1">
                            <Flame className="h-4 w-4 text-secondary" />
                            <span>{assessment.scores.pitta}% Pitta</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1">
                            <Droplets className="h-4 w-4 text-accent" />
                            <span>{assessment.scores.kapha}% Kapha</span>
                          </div>
                        </div>
                        
                        <div className="text-center p-2 bg-muted/50 rounded">
                          <span className="text-sm font-medium">Primary Dosha: </span>
                          <Badge className="bg-gradient-primary text-primary-foreground">
                            {assessment.primaryDosha}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          View Details
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-primary">
                          Create Plan
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Sample Dosha Analysis</h3>
                <DoshaAssessment scores={{ vata: 30, pitta: 45, kapha: 25 }} primaryDosha="Pitta" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {assessmentTemplates.map((template) => (
                <Card key={template.id} className="shadow-card hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <Badge className="bg-gradient-secondary text-secondary-foreground">
                        {template.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Questions</p>
                        <p className="font-semibold">{template.questions}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-semibold">{template.duration}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Usage</p>
                        <p className="font-semibold">{template.usage} times</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Accuracy</p>
                        <p className="font-semibold text-primary">{template.accuracy}</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Completion Rate</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1 bg-gradient-primary">
                        Use Template
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="create" className="space-y-6">
            <Card className="shadow-card max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>Create New Assessment</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient">Patient Name</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select patient" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="priya">Priya Sharma</SelectItem>
                        <SelectItem value="rajesh">Rajesh Kumar</SelectItem>
                        <SelectItem value="meera">Meera Patel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="template">Assessment Template</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose template" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="complete">Complete Dosha Analysis</SelectItem>
                        <SelectItem value="quick">Quick Dosha Check</SelectItem>
                        <SelectItem value="seasonal">Seasonal Assessment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="purpose">Assessment Purpose</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="initial">Initial Consultation</SelectItem>
                      <SelectItem value="followup">Follow-up Review</SelectItem>
                      <SelectItem value="seasonal">Seasonal Check</SelectItem>
                      <SelectItem value="treatment">Treatment Planning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea 
                    id="notes"
                    placeholder="Any specific observations or patient concerns..."
                    className="min-h-[100px]"
                  />
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">Assessment Preview</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Constitutional analysis (Prakriti)</p>
                    <p>• Current imbalance assessment (Vikriti)</p>
                    <p>• Lifestyle and dietary evaluation</p>
                    <p>• Personalized recommendations</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1">
                    Save as Draft
                  </Button>
                  <Button className="flex-1 bg-gradient-primary hover:bg-primary-light">
                    Start Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Assessments;