
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { weeklyIncidents } from "@/lib/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function WeeklyIncidentsChart() {
  const chartData = weeklyIncidents.labels.map((day, index) => ({
    day,
    "Lone Woman (Night)": weeklyIncidents.loneWoman[index],
    "Woman Surrounded": weeklyIncidents.surrounded[index],
    "SOS Gesture": weeklyIncidents.sosGesture[index],
    "Unusual Pattern": weeklyIncidents.unusual[index]
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Incident Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar name="Lone Woman (Night)" dataKey="Lone Woman (Night)" fill="#FF6B6B" />
              <Bar name="Woman Surrounded" dataKey="Woman Surrounded" fill="#FBBF24" />
              <Bar name="SOS Gesture" dataKey="SOS Gesture" fill="#6C63FF" />
              <Bar name="Unusual Pattern" dataKey="Unusual Pattern" fill="#38BDF8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
