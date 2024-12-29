import React, { useState } from "react";
import {
  Camera,
  Thermometer,
  Lock,
  Bell,
  Speaker,
  Shield,
  Share2,
  Lightbulb,
  Power,
  Router,
  WifiIcon,
  Home,
} from "lucide-react";

const VisualPrivacyLabel = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");

  const devices = [
    {
      id: 1,
      name: "Smart Camera Pro",
      category: "security",
      icon: Camera,
      privacyScore: "A",
      securityScore: "A+",
      features: ["End-to-end encryption", "Local storage", "No cloud sharing"],
      privacyHighlights: [
        "Data stored locally",
        "Optional cloud backup",
        "No third-party sharing",
      ],
    },
    {
      id: 2,
      name: "Smart Thermostat",
      category: "climate",
      icon: Thermometer,
      privacyScore: "B+",
      securityScore: "A",
      features: [
        "Temperature data only",
        "Encrypted transmission",
        "Weekly data cleanup",
      ],
      privacyHighlights: [
        "Location optional",
        "Usage patterns collected",
        "Industry standard encryption",
      ],
    },
    {
      id: 3,
      name: "Smart Speaker X1",
      category: "audio",
      icon: Speaker,
      privacyScore: "B",
      securityScore: "A",
      features: ["Voice encryption", "Manual activation", "Data anonymization"],
      privacyHighlights: [
        "Voice data encrypted",
        "30-day retention",
        "Anonymized usage data",
      ],
    },
    {
      id: 4,
      name: "Door Lock Pro",
      category: "security",
      icon: Lock,
      privacyScore: "A+",
      securityScore: "A+",
      features: [
        "Offline operation",
        "Local access logs",
        "End-to-end encryption",
      ],
      privacyHighlights: [
        "No cloud connectivity",
        "Encrypted backups",
        "Local processing only",
      ],
    },
    {
      id: 5,
      name: "Smart Light Plus",
      category: "lighting",
      icon: Lightbulb,
      privacyScore: "A",
      securityScore: "A",
      features: ["No data collection", "Local control", "Manual updates"],
      privacyHighlights: [
        "Minimal data collection",
        "Local network only",
        "No usage tracking",
      ],
    },
    {
      id: 6,
      name: "Smart Plug",
      category: "power",
      icon: Power,
      privacyScore: "A",
      securityScore: "A",
      features: ["Power monitoring", "Local control", "No cloud required"],
      privacyHighlights: [
        "Energy data only",
        "Local processing",
        "Optional cloud features",
      ],
    },
    {
      id: 7,
      name: "Home Hub Pro",
      category: "hub",
      icon: Home,
      privacyScore: "B+",
      securityScore: "A",
      features: ["Local processing", "Selective sync", "Custom privacy modes"],
      privacyHighlights: [
        "Customizable sharing",
        "Local first approach",
        "Granular permissions",
      ],
    },
    {
      id: 8,
      name: "Mesh Router",
      category: "network",
      icon: Router,
      privacyScore: "A",
      securityScore: "A+",
      features: ["Traffic encryption", "No logging", "Local management"],
      privacyHighlights: [
        "No traffic analysis",
        "Local administration",
        "No cloud requirement",
      ],
    },
    {
      id: 9,
      name: "WiFi Sensor",
      category: "security",
      icon: WifiIcon,
      privacyScore: "B+",
      securityScore: "A",
      features: ["Motion detection", "Local alerts", "Custom zones"],
      privacyHighlights: [
        "No image capture",
        "Local processing",
        "Optional cloud alerts",
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Devices" },
    { id: "security", label: "Security" },
    { id: "climate", label: "Climate" },
    { id: "audio", label: "Audio" },
    { id: "lighting", label: "Lighting" },
    { id: "power", label: "Power" },
    { id: "hub", label: "Hubs" },
    { id: "network", label: "Network" },
  ];

  const getScoreColor = (score) => {
    switch (score[0]) {
      case "A":
        return "text-green-600";
      case "B":
        return "text-blue-600";
      case "C":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  const filteredDevices =
    categoryFilter === "all"
      ? devices
      : devices.filter((device) => device.category === categoryFilter);

  return (
    <div className="min-h-screen bg-gray-50 p-6 select-none">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Smart Home Privacy Guide</h1>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCategoryFilter(category.id)}
                className={`px-4 py-2 rounded-lg ${
                  categoryFilter === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevices.map((device) => {
            const DeviceIcon = device.icon;
            return (
              <div
                key={device.id}
                className="bg-white rounded-lg shadow-md p-6 select-none"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <DeviceIcon className="w-8 h-8 text-blue-500" />
                    <div>
                      <h2 className="font-semibold text-lg">{device.name}</h2>
                      <span className="text-sm text-gray-500 capitalize">
                        {device.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span
                      className={`font-bold ${getScoreColor(
                        device.privacyScore
                      )}`}
                    >
                      {device.privacyScore}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Security Score: {device.securityScore}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Share2 className="w-4 h-4 text-blue-500" />
                    <span>Privacy Score: {device.privacyScore}</span>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Key Features:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {device.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Privacy Highlights:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {device.privacyHighlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VisualPrivacyLabel;
