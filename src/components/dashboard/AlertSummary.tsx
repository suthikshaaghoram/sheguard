
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { recentAlerts } from "@/lib/mockData";
import { formatDate, getAlertColorByStatus, getAlertColorBySeverity, getSeverityIcon } from "@/lib/utils";

export function AlertSummary() {
  // Take only the first 3 alerts
  const displayedAlerts = recentAlerts.slice(0, 3);

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Recent Alerts</CardTitle>
        <Badge variant="outline" className="text-xs font-normal">
          Last 24 hours
        </Badge>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {displayedAlerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-start justify-between border-t p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={cn("text-sm font-medium", getAlertColorBySeverity(alert.severity))}>
                    {getSeverityIcon(alert.severity)} {alert.type}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {alert.location} • {formatDate(alert.timestamp)}
                </p>
              </div>
              <div>
                <Badge className={cn("ml-auto", getAlertColorByStatus(alert.status))}>
                  {alert.status.replace('_', ' ')}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t p-4 text-center">
          <a href="/alerts" className="text-sm text-primary hover:underline">
            View all alerts
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

import { cn } from "@/lib/utils";
