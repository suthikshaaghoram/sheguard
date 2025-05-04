
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { hotspotData } from "@/lib/mockData";
import { getRiskLevel } from "@/lib/utils";

export function HotspotTable() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Risk Hotspots</CardTitle>
        <CardDescription>Areas with highest incident rates</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Location</TableHead>
              <TableHead className="text-right">Incidents</TableHead>
              <TableHead className="text-right">Risk Level</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hotspotData.map((hotspot) => {
              const risk = getRiskLevel(hotspot.riskScore);
              
              return (
                <TableRow key={hotspot.id}>
                  <TableCell className="font-medium">{hotspot.location}</TableCell>
                  <TableCell className="text-right">{hotspot.incidents}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className={risk.color}>
                      {risk.label}
                    </Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
