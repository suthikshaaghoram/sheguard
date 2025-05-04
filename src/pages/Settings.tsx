
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { CameraList } from "@/components/settings/CameraList";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Settings() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Configure system preferences and manage devices
        </p>
      </div>
      
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full max-w-lg">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="cameras">Cameras</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Configure application-wide settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="app-name">Application Name</Label>
                  <Input id="app-name" defaultValue="Women Safety Analytics" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Input id="timezone" defaultValue="UTC+00:00" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="dark-mode" />
                  <Label htmlFor="dark-mode">Enable Dark Mode</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="autosave" defaultChecked />
                  <Label htmlFor="autosave">Auto-save Reports</Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Detection Settings</CardTitle>
                <CardDescription>
                  Configure detection thresholds and sensitivities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="confidence">Minimum Detection Confidence</Label>
                  <div className="flex items-center">
                    <Input id="confidence" type="range" min="0" max="100" defaultValue="70" className="w-full mr-2" />
                    <span>70%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="detection-frequency">Detection Frequency</Label>
                  <Input id="detection-frequency" defaultValue="5" />
                  <p className="text-xs text-muted-foreground">Frames per second</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="enhance-night" defaultChecked />
                  <Label htmlFor="enhance-night">Enhanced Night Detection</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="gesture-recognition" defaultChecked />
                  <Label htmlFor="gesture-recognition">Enable SOS Gesture Recognition</Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="alerts">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Alert Configuration</CardTitle>
                <CardDescription>
                  Set up alert triggers and notification preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h3 className="font-medium">Alert Triggers</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="trigger-lone-woman" defaultChecked />
                        <Label htmlFor="trigger-lone-woman">Lone Woman at Night</Label>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="trigger-surrounded" defaultChecked />
                        <Label htmlFor="trigger-surrounded">Woman Surrounded by Men</Label>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="trigger-sos" defaultChecked />
                        <Label htmlFor="trigger-sos">SOS Gesture Detection</Label>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="trigger-unusual" defaultChecked />
                        <Label htmlFor="trigger-unusual">Unusual Pattern Detection</Label>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="font-medium mb-2">Alert Severity Thresholds</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="high-severity">High Severity</Label>
                        <div className="flex items-center">
                          <Input id="high-severity" type="range" min="0" max="100" defaultValue="80" className="w-full mr-2" />
                          <span>80%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="medium-severity">Medium Severity</Label>
                        <div className="flex items-center">
                          <Input id="medium-severity" type="range" min="0" max="100" defaultValue="60" className="w-full mr-2" />
                          <span>60%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="cameras">
          <div className="grid grid-cols-1 gap-6">
            <CameraList />
          </div>
        </TabsContent>
        
        <TabsContent value="notifications">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Configure how you receive alerts and notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h3 className="font-medium">Notification Methods</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-app" defaultChecked />
                      <Label htmlFor="notify-app">In-App Notifications</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-email" defaultChecked />
                      <Label htmlFor="notify-email">Email Notifications</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-sms" />
                      <Label htmlFor="notify-sms">SMS Notifications</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-webhook" />
                      <Label htmlFor="notify-webhook">Webhook (API Integration)</Label>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-4">
                    <h3 className="font-medium mb-2">Notification Recipients</h3>
                    <div className="space-y-2">
                      <Label htmlFor="recipient-email">Email Recipients</Label>
                      <Input id="recipient-email" defaultValue="security@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="recipient-phone">Phone Numbers (for SMS)</Label>
                      <Input id="recipient-phone" placeholder="+1234567890" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
