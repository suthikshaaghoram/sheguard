
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { genderDistribution } from '@/lib/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function GenderDistributionChart() {
  const chartData = genderDistribution.labels.map((time, index) => ({
    time,
    men: genderDistribution.men[index],
    women: genderDistribution.women[index],
  }));

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Gender Distribution Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [value, name === 'men' ? 'Men' : 'Women']}
                labelFormatter={(label) => `Time: ${label}`}
              />
              <Legend formatter={(value) => value === 'men' ? 'Men' : 'Women'} />
              <Bar name="men" dataKey="men" fill="#6C63FF" />
              <Bar name="women" dataKey="women" fill="#FF6B6B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
