import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Palette,
  Database,
  Users,
  Save
} from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">System Settings</h1>
            <p className="text-muted-foreground mt-1">Configure clinic preferences, user management, and system behavior</p>
          </div>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5">
            <TabsTrigger value="general" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              General
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Notifications
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Users
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Security
            </TabsTrigger>
            <TabsTrigger value="backup" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Backup
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <SettingsIcon className="h-5 w-5 text-primary" />
                  <span>Clinic Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="clinicName">Clinic Name</Label>
                    <Input id="clinicName" defaultValue="AyurSutra Wellness Center" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber">Registration Number</Label>
                    <Input id="registrationNumber" defaultValue="AYU-2024-001" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea 
                    id="address" 
                    defaultValue="123 Wellness Street, Health District, Mumbai, Maharashtra 400001"
                    className="min-h-[80px]"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="info@ayursutra.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="www.ayursutra.com" />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Business Hours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="openTime">Opening Time</Label>
                      <Input id="openTime" type="time" defaultValue="08:00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="closeTime">Closing Time</Label>
                      <Input id="closeTime" type="time" defaultValue="18:00" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workingDays">Working Days</Label>
                    <Select defaultValue="monday-saturday">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monday-saturday">Monday to Saturday</SelectItem>
                        <SelectItem value="monday-friday">Monday to Friday</SelectItem>
                        <SelectItem value="all-days">All Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button className="bg-gradient-primary hover:bg-primary-light">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="h-5 w-5 text-primary" />
                  <span>System Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currency">Default Currency</Label>
                    <Select defaultValue="inr">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                        <SelectItem value="usd">US Dollar ($)</SelectItem>
                        <SelectItem value="eur">Euro (€)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Default Language</Label>
                    <Select defaultValue="english">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                        <SelectItem value="sanskrit">Sanskrit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="autoBackup">Automatic Daily Backups</Label>
                      <p className="text-sm text-muted-foreground">Backup patient data and settings daily</p>
                    </div>
                    <Switch id="autoBackup" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailReminders">Email Appointment Reminders</Label>
                      <p className="text-sm text-muted-foreground">Send automatic email reminders to patients</p>
                    </div>
                    <Switch id="emailReminders" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="smsNotifications">SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">Send SMS for important updates</p>
                    </div>
                    <Switch id="smsNotifications" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <span>Notification Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Patient Notifications</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Appointment Confirmations</Label>
                      <p className="text-sm text-muted-foreground">Send confirmation when appointment is booked</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Appointment Reminders</Label>
                      <p className="text-sm text-muted-foreground">Remind patients 24 hours before appointment</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Treatment Follow-ups</Label>
                      <p className="text-sm text-muted-foreground">Follow up after treatment completion</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Staff Notifications</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Low Inventory Alerts</Label>
                      <p className="text-sm text-muted-foreground">Notify when herbs/oils are running low</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>New Patient Registrations</Label>
                      <p className="text-sm text-muted-foreground">Notify when new patient registers</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Payment Received</Label>
                      <p className="text-sm text-muted-foreground">Notify when payment is processed</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>User Management</span>
                  </CardTitle>
                  <Button className="bg-gradient-primary hover:bg-primary-light">
                    <User className="w-4 h-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-semibold">Dr. Ramesh Kumar</h4>
                      <p className="text-sm text-muted-foreground">Senior Therapist</p>
                    </div>
                    <div>
                      <p className="text-sm">ramesh@ayursutra.com</p>
                      <p className="text-sm text-muted-foreground">Active</p>
                    </div>
                    <div>
                      <p className="text-sm">Permissions: Full Access</p>
                      <p className="text-sm text-muted-foreground">Last login: Today</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Suspend</Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-semibold">Dr. Meera Joshi</h4>
                      <p className="text-sm text-muted-foreground">Therapist</p>
                    </div>
                    <div>
                      <p className="text-sm">meera@ayursutra.com</p>
                      <p className="text-sm text-muted-foreground">Active</p>
                    </div>
                    <div>
                      <p className="text-sm">Permissions: Therapy Only</p>
                      <p className="text-sm text-muted-foreground">Last login: Yesterday</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Suspend</Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-semibold">Receptionist Staff</h4>
                      <p className="text-sm text-muted-foreground">Front Desk</p>
                    </div>
                    <div>
                      <p className="text-sm">reception@ayursutra.com</p>
                      <p className="text-sm text-muted-foreground">Active</p>
                    </div>
                    <div>
                      <p className="text-sm">Permissions: Appointments Only</p>
                      <p className="text-sm text-muted-foreground">Last login: 2 hours ago</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Suspend</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Security Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Require 2FA for all users</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Session Timeout</Label>
                      <p className="text-sm text-muted-foreground">Auto-logout after inactivity</p>
                    </div>
                    <Select defaultValue="30min">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15min">15 minutes</SelectItem>
                        <SelectItem value="30min">30 minutes</SelectItem>
                        <SelectItem value="1hour">1 hour</SelectItem>
                        <SelectItem value="2hour">2 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Password Policy</Label>
                      <p className="text-sm text-muted-foreground">Enforce strong passwords</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>Data Encryption</Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    All patient data is encrypted using AES-256 encryption
                  </p>
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <p className="text-sm font-medium text-secondary">✓ Encryption Status: Active</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Audit Logs</Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    Track all user activities and system access
                  </p>
                  <Button variant="outline">View Audit Logs</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backup" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-primary" />
                  <span>Backup & Recovery</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Automatic Backups</Label>
                      <p className="text-sm text-muted-foreground">Daily backup at 2:00 AM</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Backup Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Every Hour</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Retention Period</Label>
                    <Select defaultValue="30days">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7days">7 Days</SelectItem>
                        <SelectItem value="30days">30 Days</SelectItem>
                        <SelectItem value="90days">90 Days</SelectItem>
                        <SelectItem value="1year">1 Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Recent Backups</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                      <div>
                        <p className="font-medium">January 15, 2024 - 02:00 AM</p>
                        <p className="text-sm text-muted-foreground">Complete system backup (2.3 GB)</p>
                      </div>
                      <Button variant="outline" size="sm">Restore</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <p className="font-medium">January 14, 2024 - 02:00 AM</p>
                        <p className="text-sm text-muted-foreground">Complete system backup (2.1 GB)</p>
                      </div>
                      <Button variant="outline" size="sm">Restore</Button>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="bg-gradient-primary hover:bg-primary-light">
                      Create Backup Now
                    </Button>
                    <Button variant="outline">
                      Download Backup
                    </Button>
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

export default Settings;