
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cameraFeeds } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import { Settings } from "lucide-react";

export function CameraList() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "online":
        return <Badge className="bg-safety-green">Online</Badge>;
      case "offline":
        return <Badge variant="destructive">Offline</Badge>;
      case "maintenance":
        return <Badge className="bg-safety-yellow text-safety-dark">Maintenance</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Connected Cameras</CardTitle>
        <Button size="sm" variant="outline">
          <Settings className="h-4 w-4 mr-1" /> Manage
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {cameraFeeds.map((camera) => (
            <div
              key={camera.id}
              className={cn(
                "flex items-center justify-between p-3 rounded-lg",
                camera.status === "online" ? "bg-safety-green/10" :
                camera.status === "offline" ? "bg-destructive/10" :
                "bg-safety-yellow/10"
              )}
            >
              <div className="flex items-center space-x-3">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  camera.status === "online" ? "bg-safety-green" :
                  camera.status === "offline" ? "bg-destructive" :
                  "bg-safety-yellow"
                )} />
                <span className="font-medium">{camera.name}</span>
              </div>
              {getStatusBadge(camera.status)}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
