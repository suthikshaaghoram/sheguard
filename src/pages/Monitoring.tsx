
import { LiveFeed } from '@/components/monitoring/LiveFeed';
import { monitoringScenes } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function Monitoring() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Real-time Monitoring</h1>
          <p className="text-muted-foreground">
            Live feeds and gender distribution analysis
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search locations..."
              className="w-full md:w-[200px] pl-9"
            />
          </div>
          <Button>Refresh All</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {monitoringScenes.map((scene) => (
          <LiveFeed
            key={scene.id}
            id={scene.id}
            name={scene.name}
            menCount={scene.menCount}
            womenCount={scene.womenCount}
            status={scene.status as "normal" | "alert"}
            alertType={scene.alertType}
            lastUpdated={scene.lastUpdated}
          />
        ))}
        
        <div className="border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center p-6 col-span-1 min-h-[240px]">
          <div className="text-center">
            <p className="text-slate-500 mb-3">Connect a new camera to monitor additional locations</p>
            <Button>Add Camera</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
