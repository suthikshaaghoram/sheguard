
// Mock data for dashboard
export const genderDistribution = {
  labels: ["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
  men: [5, 3, 8, 35, 42, 45, 32, 15],
  women: [2, 1, 6, 28, 30, 32, 25, 8],
};

// Locations
export const locations = [
  "Central Park", 
  "Downtown Station", 
  "University Campus", 
  "Shopping Mall", 
  "Office District",
  "Residential Area"
];

export const alertTypes = [
  "Lone Woman (Night)", 
  "Woman Surrounded", 
  "SOS Gesture Detected", 
  "Unusual Pattern"
];

// Generated alerts
export const recentAlerts = [
  {
    id: "alert-1",
    type: "Lone Woman (Night)",
    location: "Central Park",
    timestamp: "2025-05-03T01:23:45",
    severity: "high",
    status: "active"
  },
  {
    id: "alert-2",
    type: "Woman Surrounded",
    location: "Downtown Station",
    timestamp: "2025-05-03T00:45:12",
    severity: "medium",
    status: "investigating"
  },
  {
    id: "alert-3",
    type: "SOS Gesture Detected",
    location: "Shopping Mall",
    timestamp: "2025-05-02T22:12:03",
    severity: "high",
    status: "resolved"
  },
  {
    id: "alert-4",
    type: "Unusual Pattern",
    location: "Office District",
    timestamp: "2025-05-02T20:37:22",
    severity: "low",
    status: "false_alarm"
  },
  {
    id: "alert-5",
    type: "Lone Woman (Night)",
    location: "University Campus",
    timestamp: "2025-05-02T23:05:33",
    severity: "medium",
    status: "resolved"
  }
];

// Hotspot data
export const hotspotData = [
  { id: 1, location: "Central Park", incidents: 27, riskScore: 78 },
  { id: 2, location: "Downtown Station", incidents: 42, riskScore: 86 },
  { id: 3, location: "University Campus", incidents: 18, riskScore: 65 },
  { id: 4, location: "Shopping Mall", incidents: 12, riskScore: 52 },
  { id: 5, location: "Office District", incidents: 7, riskScore: 38 },
  { id: 6, location: "Residential Area", incidents: 15, riskScore: 45 },
];

// Mock statistics
export const statisticsData = {
  totalAlerts: 121,
  activeAlerts: 14,
  resolvedIncidents: 98,
  falseAlarms: 9,
  detectedPersons: {
    today: 842,
    men: 476,
    women: 366,
  },
  criticalAreas: 3,
};

// Mock Real-time data
export const monitoringScenes = [
  {
    id: "scene-1",
    name: "Downtown Station",
    menCount: 17,
    womenCount: 12,
    status: "normal",
    lastUpdated: "Just now" 
  },
  {
    id: "scene-2",
    name: "Central Park",
    menCount: 5,
    womenCount: 1,
    status: "alert",
    alertType: "Lone Woman (Night)",
    lastUpdated: "20 seconds ago" 
  },
  {
    id: "scene-3",
    name: "Shopping Mall",
    menCount: 32,
    womenCount: 28,
    status: "normal",
    lastUpdated: "1 minute ago" 
  },
  {
    id: "scene-4",
    name: "University Campus",
    menCount: 8,
    womenCount: 2,
    status: "alert",
    alertType: "Woman Surrounded",
    lastUpdated: "30 seconds ago" 
  }
];

// Mock incident history for Analytics
export const weeklyIncidents = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  loneWoman: [3, 2, 4, 3, 5, 8, 6],
  surrounded: [2, 3, 1, 4, 2, 5, 3],
  sosGesture: [1, 0, 2, 1, 3, 2, 2],
  unusual: [4, 3, 5, 2, 3, 4, 3]
};

// Sample heatmap data
export const heatmapData = [
  { lat: 40.7128, lng: -74.0060, intensity: 78 }, // New York
  { lat: 40.7282, lng: -73.9942, intensity: 65 },
  { lat: 40.7031, lng: -74.0102, intensity: 92 },
  { lat: 40.7220, lng: -73.9985, intensity: 45 },
  { lat: 40.7358, lng: -74.0036, intensity: 83 },
  { lat: 40.7138, lng: -74.0394, intensity: 70 },
];

// Camera feeds
export const cameraFeeds = [
  { id: "cam-1", name: "Downtown Station - Entrance", status: "online" },
  { id: "cam-2", name: "Downtown Station - Platform 1", status: "online" },
  { id: "cam-3", name: "Central Park - North Entrance", status: "online" },
  { id: "cam-4", name: "Central Park - Lakeside", status: "offline" },
  { id: "cam-5", name: "Shopping Mall - Main Hall", status: "online" },
  { id: "cam-6", name: "Shopping Mall - Parking Area", status: "online" },
  { id: "cam-7", name: "University Campus - Main Square", status: "online" },
  { id: "cam-8", name: "Office District - Building A", status: "maintenance" },
];
