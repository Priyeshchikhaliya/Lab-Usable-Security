import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  Shield,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Lock,
  Cloud,
  Wifi,
} from "lucide-react";

const InteractivePrivacyLabel = () => {
  const [viewType, setViewType] = useState("grid");
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [filters, setFilters] = useState({
    privacyScore: "all",
    category: "all",
    dataCollection: "all",
  });

  const devices = [
    {
      id: 1,
      name: "Smart Home Hub Pro",
      category: "Controller",
      privacyScore: "A",
      securityScore: "A+",
      dataCollection: {
        personal: 20,
        usage: 45,
        environmental: 35,
      },
      features: {
        encryption: "End-to-end",
        storage: "Local with cloud backup",
        sharing: "Anonymous data only",
        retention: "30 days",
        updates: "Automatic monthly",
      },
      details: "Premium smart home controller with advanced privacy features",
      risks: [],
      certifications: ["GDPR", "ISO 27001", "Privacy Shield"],
    },
    {
      id: 2,
      name: "Security Camera X2",
      category: "Security",
      privacyScore: "B+",
      securityScore: "A",
      dataCollection: {
        personal: 30,
        usage: 40,
        environmental: 30,
      },
      features: {
        encryption: "AES-256",
        storage: "Cloud with local backup",
        sharing: "Optional third-party",
        retention: "14 days",
        updates: "Automatic weekly",
      },
      details: "High-resolution security camera with motion detection",
      risks: ["Cloud storage required", "Third-party integrations"],
      certifications: ["GDPR", "UL Certified"],
    },
    {
      id: 3,
      name: "Smart Display",
      category: "Display",
      privacyScore: "B",
      securityScore: "B+",
      dataCollection: {
        personal: 40,
        usage: 35,
        environmental: 25,
      },
      features: {
        encryption: "Standard",
        storage: "Cloud only",
        sharing: "Third-party analytics",
        retention: "60 days",
        updates: "Manual",
      },
      details: "Interactive display with voice control",
      risks: ["Always listening", "Cloud dependency"],
      certifications: ["GDPR"],
    },
    {
      id: 4,
      name: "Smart Lock Pro",
      category: "Security",
      privacyScore: "A+",
      securityScore: "A+",
      dataCollection: {
        personal: 15,
        usage: 50,
        environmental: 35,
      },
      features: {
        encryption: "Military-grade",
        storage: "Local only",
        sharing: "None",
        retention: "7 days",
        updates: "Automatic monthly",
      },
      details: "Advanced smart lock with biometric authentication",
      risks: [],
      certifications: ["GDPR", "ISO 27001", "UL Listed"],
    },
    {
      id: 5,
      name: "Environment Sensor",
      category: "Sensor",
      privacyScore: "A",
      securityScore: "A",
      dataCollection: {
        personal: 0,
        usage: 60,
        environmental: 40,
      },
      features: {
        encryption: "Standard",
        storage: "Local first",
        sharing: "Optional aggregated",
        retention: "90 days",
        updates: "Automatic quarterly",
      },
      details: "Multi-sensor for temperature, humidity, and air quality",
      risks: [],
      certifications: ["Energy Star", "GDPR"],
    },
    {
      id: 6,
      name: "Smart Thermostat",
      category: "Climate",
      privacyScore: "B+",
      securityScore: "A",
      dataCollection: {
        personal: 10,
        usage: 50,
        environmental: 40,
      },
      features: {
        encryption: "Standard",
        storage: "Hybrid",
        sharing: "Utility partner only",
        retention: "12 months",
        updates: "Automatic monthly",
      },
      details: "Energy-efficient smart thermostat with learning capabilities",
      risks: ["Optional utility data sharing"],
      certifications: ["Energy Star", "GDPR"],
    },
    {
      id: 7,
      name: "Mesh WiFi System",
      category: "Network",
      privacyScore: "A",
      securityScore: "A+",
      dataCollection: {
        personal: 5,
        usage: 55,
        environmental: 40,
      },
      features: {
        encryption: "WPA3",
        storage: "Local only",
        sharing: "None",
        retention: "30 days",
        updates: "Automatic weekly",
      },
      details: "High-performance mesh network system with advanced security",
      risks: [],
      certifications: ["GDPR", "ISO 27001"],
    },
    {
      id: 8,
      name: "Video Doorbell Pro",
      category: "Security",
      privacyScore: "B+",
      securityScore: "A",
      dataCollection: {
        personal: 25,
        usage: 45,
        environmental: 30,
      },
      features: {
        encryption: "End-to-end",
        storage: "Cloud required",
        sharing: "Optional third-party",
        retention: "30 days",
        updates: "Automatic monthly",
      },
      details:
        "Smart doorbell with advanced motion detection and video recording",
      risks: ["Cloud storage required"],
      certifications: ["GDPR", "UL Listed"],
    },
  ];

  const getScoreColor = (score) => {
    switch (score[0]) {
      case "A":
        return "bg-green-100 text-green-800";
      case "B":
        return "bg-blue-100 text-blue-800";
      case "C":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const DetailView = ({ device, isGridView }) => {
    const chartData = Object.entries(device.dataCollection).map(
      ([name, value]) => ({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        value,
      })
    );

    const COLORS = {
      Personal: "#22c55e",
      Usage: "#3b82f6",
      Environmental: "#eab308",
    };

    const renderColorBox = (color) => (
      <div
        className="w-3 h-3 rounded-sm inline-block mr-2"
        style={{ backgroundColor: color }}
      />
    );

    return (
      <div className={`bg-white select-none ${isGridView ? "p-4" : "p-6"} mt-4`}>
        <div
          className={
            isGridView ? "space-y-6" : "grid grid-cols-1 md:grid-cols-2 gap-6"
          }
        >
          {/* Privacy Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Privacy Features</h3>
            <div className="space-y-2">
              {Object.entries(device.features).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm">
                  <span className="font-medium capitalize">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>

            {device.risks.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2 text-yellow-700">
                  Privacy Considerations
                </h3>
                <ul className="space-y-1">
                  {device.risks.map((risk, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-yellow-600"
                    >
                      <AlertTriangle className="w-4 h-4" />
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {device.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Data Collection Chart */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Data Collection</h3>
            <div className="flex flex-col">
              <div className={`${isGridView ? "h-48" : "h-64"} relative`}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      outerRadius={isGridView ? 80 : 100}
                      dataKey="value"
                    >
                      {chartData.map((entry) => (
                        <Cell key={entry.name} fill={COLORS[entry.name]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Legend */}
              <div className="mt-4 space-y-2">
                {chartData.map((entry) => (
                  <div key={entry.name} className="flex items-center">
                    {renderColorBox(COLORS[entry.name])}
                    <span className="text-sm">
                      {entry.name}: {entry.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const filteredDevices = devices.filter((device) => {
    if (
      filters.privacyScore !== "all" &&
      device.privacyScore !== filters.privacyScore
    )
      return false;
    if (filters.category !== "all" && device.category !== filters.category)
      return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 select-none">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Advanced IoT Privacy Explorer</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setViewType("grid")}
              className={`p-2 rounded ${
                viewType === "grid" ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewType("list")}
              className={`p-2 rounded ${
                viewType === "list" ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex gap-4">
            <select
              value={filters.privacyScore}
              onChange={(e) =>
                setFilters({ ...filters, privacyScore: e.target.value })
              }
              className="rounded border p-2"
            >
              <option value="all">All Scores</option>
              <option value="A+">A+ Score</option>
              <option value="A">A Score</option>
              <option value="B+">B+ Score</option>
              <option value="B">B Score</option>
            </select>

            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
              className="rounded border p-2"
            >
              <option value="all">All Categories</option>
              <option value="Controller">Controllers</option>
              <option value="Security">Security</option>
              <option value="Display">Displays</option>
              <option value="Sensor">Sensors</option>
              <option value="Climate">Climate</option>
              <option value="Network">Network</option>
            </select>
          </div>
        </div>

        {/* Devices Grid/List */}
        <div
          className={`grid gap-6 ${
            viewType === "grid"
              ? "md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {filteredDevices.map((device) => (
            <div key={device.id} className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                {/* Device Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold">{device.name}</h2>
                    <p className="text-gray-500">{device.category}</p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full ${getScoreColor(
                      device.privacyScore
                    )}`}
                  >
                    {device.privacyScore}
                  </div>
                </div>

                {/* Basic Info */}
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <span>Security Score: {device.securityScore}</span>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">{device.details}</p>
                </div>

                {/* Toggle Details Button */}
                <button
                  onClick={() =>
                    setSelectedDevice(
                      selectedDevice === device.id ? null : device.id
                    )
                  }
                  className="mt-4 text-blue-500 text-sm flex items-center gap-1"
                >
                  {selectedDevice === device.id ? (
                    <>
                      Less Details
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      More Details
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>

                {selectedDevice === device.id && (
                  <DetailView
                    device={device}
                    isGridView={viewType === "grid"}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractivePrivacyLabel;
