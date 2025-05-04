
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate, getAlertColorByStatus, getAlertColorBySeverity } from "@/lib/utils";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface AlertCardProps {
  id: string;
  type: string;
  location: string;
  timestamp: string;
  severity: "high" | "medium" | "low";
  status: "active" | "investigating" | "resolved" | "false_alarm";
}

export function AlertCard({ id, type, location, timestamp, severity, status }: AlertCardProps) {
  const getStatusIcon = () => {
    switch (status) {
      case "active":
        return <AlertTriangle className="h-4 w-4" />;
      case "investigating":
        return <Clock className="h-4 w-4" />;
      case "resolved":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  return (
    <Card className={`border-l-4 ${
      severity === "high" 
        ? "border-l-safety-secondary" 
        : severity === "medium" 
          ? "border-l-safety-yellow" 
          : "border-l-safety-blue"
    }`}>
      <CardContent className="p-4">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{type}</h3>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
            <Badge className={getAlertColorByStatus(status)}>
              <span className="flex items-center gap-1">
                {getStatusIcon()}
                <span>{status.replace('_', ' ')}</span>
              </span>
            </Badge>
          </div>
          
          <div className="text-xs text-muted-foreground">
            Detected: {formatDate(timestamp)}
          </div>
          
          <div className="flex gap-2 mt-2">
            {status === "active" && (
              <>
                <Button size="sm" variant="outline">Dismiss</Button>
                <Button size="sm">Investigate</Button>
              </>
            )}
            {status === "investigating" && (
              <>
                <Button size="sm" variant="outline">Mark as False Alarm</Button>
                <Button size="sm">Resolve</Button>
              </>
            )}
            {status === "resolved" || status === "false_alarm" ? (
              <Button size="sm" variant="outline">View Details</Button>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
