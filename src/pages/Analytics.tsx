
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WeeklyIncidentsChart } from '@/components/analytics/WeeklyIncidentsChart';
import { alertTypes, hotspotData } from '@/lib/mockData';
import { getRiskLevel } from '@/lib/utils';

export default function Analytics() {
  const sortedHotspots = [...hotspotData].sort((a, b) => b.riskScore - a.riskScore);
  const highRiskLocations = sortedHotspots.filter(h => h.riskScore >= 70);
  
  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Analytics</h1>
        <p className="text-muted-foreground">
          Detailed analysis of safety patterns and risk areas
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {alertTypes.map((type, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{type} Incidents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.floor(Math.random() * 40) + 10}</div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
              <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-safety-primary"
                  style={{
                    width: `${Math.floor(Math.random() * 60) + 40}%`
                  }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WeeklyIncidentsChart />
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>High-Risk Areas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {highRiskLocations.map((location) => {
                const risk = getRiskLevel(location.riskScore);
                
                return (
                  <div key={location.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${
                        location.riskScore > 80 ? "bg-safety-secondary" :
                        location.riskScore > 60 ? "bg-safety-yellow" :
                        "bg-safety-blue"
                      }`} />
                      <span>{location.location}</span>
                    </div>
                    <div className="text-sm font-medium">
                      <span className={risk.color}>{location.riskScore}%</span>
                    </div>
                  </div>
                );
              })}
              
              {highRiskLocations.length === 0 && (
                <div className="text-center py-4 text-muted-foreground">
                  No high-risk areas detected
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Safety Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-muted/50 border border-border rounded-md">
                <p className="text-sm">
                  <span className="font-medium">Downtown Station:</span> Increase surveillance coverage during evening hours (8PM-11PM)
                </p>
              </div>
              <div className="p-3 bg-muted/50 border border-border rounded-md">
                <p className="text-sm">
                  <span className="font-medium">Central Park:</span> Add additional lighting near the north entrance and pathways
                </p>
              </div>
              <div className="p-3 bg-muted/50 border border-border rounded-md">
                <p className="text-sm">
                  <span className="font-medium">University Campus:</span> Deploy security personnel during late night hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
