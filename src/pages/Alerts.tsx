
import { useState } from 'react';
import { AlertCard } from '@/components/alerts/AlertCard';
import { recentAlerts } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Alerts() {
  const [filter, setFilter] = useState("all");
  
  // Filter alerts based on selected filter
  const filteredAlerts = filter === "all" 
    ? recentAlerts
    : recentAlerts.filter(alert => alert.status === filter);
    
  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Alert Management</h1>
        <p className="text-muted-foreground">
          View and respond to detected safety concerns
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Alerts</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="investigating">Investigating</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
              <SelectItem value="false_alarm">False Alarm</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="lone_woman">Lone Woman (Night)</SelectItem>
              <SelectItem value="surrounded">Woman Surrounded</SelectItem>
              <SelectItem value="sos">SOS Gesture</SelectItem>
              <SelectItem value="unusual">Unusual Pattern</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="relative">
          <Input 
            type="search" 
            placeholder="Search alerts..."
            className="w-full md:w-[250px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredAlerts.length > 0 ? (
          filteredAlerts.map(alert => (
            <AlertCard
              key={alert.id}
              id={alert.id}
              type={alert.type}
              location={alert.location}
              timestamp={alert.timestamp}
              severity={alert.severity as "high" | "medium" | "low"}
              status={alert.status as "active" | "investigating" | "resolved" | "false_alarm"}
            />
          ))
        ) : (
          <div className="col-span-1 lg:col-span-2 p-8 text-center border rounded-lg bg-muted/20">
            <p className="text-muted-foreground mb-4">No alerts match your current filters</p>
            <Button onClick={() => setFilter("all")}>Clear Filters</Button>
          </div>
        )}
      </div>
    </div>
  );
}
