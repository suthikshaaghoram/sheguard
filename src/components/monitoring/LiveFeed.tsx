
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn, getGenderRatio } from "@/lib/utils";

interface LiveFeedProps {
  id: string;
  name: string;
  menCount: number;
  womenCount: number;
  status: "normal" | "alert";
  alertType?: string;
  lastUpdated: string;
}

export function LiveFeed({ id, name, menCount, womenCount, status, alertType, lastUpdated }: LiveFeedProps) {
  const { menPercent, womenPercent } = getGenderRatio(menCount, womenCount);
  
  return (
    <Card className={cn(
      status === "alert" ? "border-safety-secondary" : "border-border",
    )}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-md">{name}</CardTitle>
            {status === "alert" && (
              <Badge variant="destructive" className="animate-pulse-slow">
                {alertType}
              </Badge>
            )}
          </div>
          <span className="text-xs text-muted-foreground">Updated: {lastUpdated}</span>
        </div>
      </CardHeader>
      <CardContent>
        {/* Placeholder for camera feed image */}
        <div className="relative w-full h-36 bg-slate-200 rounded-md mb-3 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          
          {/* Detection boxes when in alert mode */}
          {status === "alert" && (
            <>
              <div className="absolute top-1/3 left-1/4 w-12 h-16 border-2 border-safety-secondary rounded-sm animate-pulse-slow"></div>
              {alertType === "Woman Surrounded" && (
                <>
                  <div className="absolute top-1/3 left-1/2 w-8 h-12 border-2 border-safety-primary rounded-sm"></div>
                  <div className="absolute top-1/3 right-1/4 w-8 h-12 border-2 border-safety-primary rounded-sm"></div>
                </>
              )}
            </>
          )}
          
          {/* Status badge */}
          <div className="absolute top-2 right-2">
            <Badge variant={status === "alert" ? "destructive" : "secondary"}>
              {status === "alert" ? "ALERT" : "Normal"}
            </Badge>
          </div>
        </div>
        
        {/* Gender distribution */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>Gender Distribution</span>
            <span>
              {menCount + womenCount} total ({menCount} men, {womenCount} women)
            </span>
          </div>
          
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-safety-primary"
              style={{ width: `${menPercent}%` }}
            />
          </div>
          
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Men: {menPercent}%</span>
            <span>Women: {womenPercent}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
