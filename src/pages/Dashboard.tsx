
import { Bell, MapPin, User, AlertTriangle } from 'lucide-react';
import { StatCard } from '@/components/dashboard/StatCard';
import { GenderDistributionChart } from '@/components/dashboard/GenderDistributionChart';
import { AlertSummary } from '@/components/dashboard/AlertSummary';
import { HotspotTable } from '@/components/dashboard/HotspotTable';
import { HotspotMap } from '@/components/dashboard/HotspotMap';
import { statisticsData } from '@/lib/mockData';

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="mb-6 bg-gradient-to-r from-safety-primary to-purple-500 text-white p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">SheGuard Dashboard</h1>
        <p className="opacity-90">
          Real-time women safety monitoring and analytics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Alerts"
          value={statisticsData.totalAlerts}
          description="Last 30 days"
          icon={<Bell className="h-5 w-5 text-white" />}
          trend={{ value: 12, isPositive: false }}
          className="bg-gradient-to-br from-safety-primary to-purple-600 text-white shadow-md hover:shadow-lg transition-shadow"
        />
        <StatCard
          title="Active Alerts"
          value={statisticsData.activeAlerts}
          description="Require attention"
          icon={<AlertTriangle className="h-5 w-5 text-white" />}
          className="bg-gradient-to-br from-safety-secondary to-red-500 text-white shadow-md hover:shadow-lg transition-shadow"
        />
        <StatCard
          title="Persons Detected Today"
          value={statisticsData.detectedPersons.today}
          description={`${statisticsData.detectedPersons.men} men, ${statisticsData.detectedPersons.women} women`}
          icon={<User className="h-5 w-5 text-white" />}
          className="bg-gradient-to-br from-safety-blue to-blue-500 text-white shadow-md hover:shadow-lg transition-shadow"
        />
        <StatCard
          title="Critical Areas"
          value={statisticsData.criticalAreas}
          description="Require additional monitoring"
          icon={<MapPin className="h-5 w-5 text-white" />}
          className="bg-gradient-to-br from-safety-yellow to-amber-500 text-white shadow-md hover:shadow-lg transition-shadow"
        />
      </div>

      {/* Risk Hotspot Map */}
      <div className="mb-6 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
        <div className="mb-3 flex justify-between items-center">
          <h2 className="text-lg font-bold text-safety-dark">Risk Hotspot Map</h2>
          <div className="flex space-x-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              High Risk
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              Medium Risk
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Low Risk
            </span>
          </div>
        </div>
        <HotspotMap />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        <div className="lg:col-span-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-bold mb-4 text-safety-dark">Gender Distribution</h2>
          <GenderDistributionChart />
        </div>
        <div className="grid grid-cols-1 lg:col-span-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-bold mb-4 text-safety-dark">Alert Summary</h2>
            <AlertSummary />
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-bold mb-4 text-safety-dark">Hotspot Areas</h2>
            <HotspotTable />
          </div>
        </div>
      </div>
    </div>
  );
}
