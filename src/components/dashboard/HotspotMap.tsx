
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { heatmapData } from '@/lib/mockData';
import { cn } from '@/lib/utils';

export function HotspotMap() {
  const [mapView, setMapView] = useState<'heatmap' | 'markers'>('heatmap');
  
  return (
    <Card className="col-span-1 lg:col-span-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Risk Hotspot Map</CardTitle>
            <CardDescription>Geographic visualization of high-risk areas</CardDescription>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setMapView('heatmap')}
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-md",
                mapView === 'heatmap' 
                  ? "bg-safety-primary text-white" 
                  : "bg-muted text-muted-foreground"
              )}
            >
              Heatmap
            </button>
            <button
              onClick={() => setMapView('markers')}
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-md",
                mapView === 'markers' 
                  ? "bg-safety-primary text-white" 
                  : "bg-muted text-muted-foreground"
              )}
            >
              Markers
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative h-[350px] w-full overflow-hidden rounded-md bg-muted">
          {/* Map Container */}
          <div className="absolute inset-0">
            <div className="h-full w-full bg-[url('/assets/map-background.png')] bg-cover bg-center">
              {/* Overlay for heatmap visualization */}
              {mapView === 'heatmap' && (
                <div className="absolute inset-0 bg-black/20">
                  {/* Heatmap color spots */}
                  {heatmapData.map((spot, index) => (
                    <div
                      key={index}
                      className="absolute rounded-full mix-blend-screen"
                      style={{
                        left: `${(spot.lng + 74.1) * 120}%`,
                        top: `${(41 - spot.lat) * 20}%`,
                        width: `${Math.max(30, spot.intensity / 3)}px`,
                        height: `${Math.max(30, spot.intensity / 3)}px`,
                        backgroundColor: spot.intensity > 80 
                          ? 'rgba(255, 59, 48, 0.7)' 
                          : spot.intensity > 60 
                            ? 'rgba(255, 149, 0, 0.7)' 
                            : 'rgba(52, 199, 89, 0.7)',
                        boxShadow: `0 0 ${spot.intensity / 5}px ${spot.intensity / 10}px ${
                          spot.intensity > 80 
                            ? 'rgba(255, 59, 48, 0.5)' 
                            : spot.intensity > 60 
                              ? 'rgba(255, 149, 0, 0.5)' 
                              : 'rgba(52, 199, 89, 0.5)'
                        }`
                      }}
                    />
                  ))}
                </div>
              )}
              
              {/* Marker visualization */}
              {mapView === 'markers' && (
                <>
                  {heatmapData.map((spot, index) => (
                    <div
                      key={index}
                      className="absolute"
                      style={{
                        left: `${(spot.lng + 74.1) * 120}%`,
                        top: `${(41 - spot.lat) * 20}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div
                        className={cn(
                          "flex items-center justify-center rounded-full border-2 border-white shadow-lg",
                          spot.intensity > 80 ? "bg-safety-secondary" : 
                          spot.intensity > 60 ? "bg-safety-yellow" : "bg-safety-green"
                        )}
                        style={{
                          width: '20px',
                          height: '20px'
                        }}
                      >
                        <span className="sr-only">Risk point with intensity {spot.intensity}</span>
                      </div>
                    </div>
                  ))}
                </>
              )}
              
              {/* Map labels */}
              <div className="absolute bottom-3 right-3 rounded bg-black/30 px-2 py-1 text-xs text-white backdrop-blur-sm">
                New York City Area
              </div>
              
              {/* Map Legend */}
              <div className="absolute left-3 bottom-3 rounded bg-white/90 p-2 shadow-md">
                <p className="mb-1 text-xs font-semibold">Risk Level</p>
                <div className="flex items-center space-x-2">
                  <span className="block h-3 w-3 rounded-full bg-safety-secondary"></span>
                  <span className="text-xs">High</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="block h-3 w-3 rounded-full bg-safety-yellow"></span>
                  <span className="text-xs">Medium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="block h-3 w-3 rounded-full bg-safety-green"></span>
                  <span className="text-xs">Low</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          <div className="rounded-md border p-2">
            <p className="text-xs font-medium text-muted-foreground">Total Hotspots</p>
            <p className="text-lg font-bold">{heatmapData.length}</p>
          </div>
          <div className="rounded-md border p-2">
            <p className="text-xs font-medium text-muted-foreground">High Risk Areas</p>
            <p className="text-lg font-bold text-safety-secondary">
              {heatmapData.filter(spot => spot.intensity > 80).length}
            </p>
          </div>
          <div className="rounded-md border p-2">
            <p className="text-xs font-medium text-muted-foreground">Medium Risk Areas</p>
            <p className="text-lg font-bold text-safety-yellow">
              {heatmapData.filter(spot => spot.intensity > 60 && spot.intensity <= 80).length}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
