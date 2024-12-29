import React, { useState } from "react";
import {
  Shield,
  AlertTriangle,
  Check,
  X,
  Clock,
  Cloud,
  Lock,
} from "lucide-react";

const MinimalistPrivacyLabel = () => {
  const [sortBy, setSortBy] = useState("name");

  const devices = [
    {
      id: 1,
      name: "Smart Camera Pro",
      type: "Security Camera",
      privacyScore: "A",
      features: {
        encryption: true,
        localStorage: true,
        dataSharing: false,
        retention: "30 days",
        updates: "Automatic",
      },
    },
    {
      id: 2,
      name: "Connected Thermostat",
      type: "Climate Control",
      privacyScore: "B+",
      features: {
        encryption: true,
        localStorage: false,
        dataSharing: true,
        retention: "90 days",
        updates: "Manual",
      },
    },
    {
      id: 3,
      name: "Smart Speaker",
      type: "Audio Device",
      privacyScore: "B",
      features: {
        encryption: true,
        localStorage: false,
        dataSharing: true,
        retention: "60 days",
        updates: "Automatic",
      },
    },
    {
      id: 4,
      name: "Smart Lock Pro",
      type: "Security Device",
      privacyScore: "A+",
      features: {
        encryption: true,
        localStorage: true,
        dataSharing: false,
        retention: "7 days",
        updates: "Automatic",
      },
    },
    {
      id: 5,
      name: "Motion Sensor",
      type: "Security Device",
      privacyScore: "A",
      features: {
        encryption: true,
        localStorage: true,
        dataSharing: false,
        retention: "14 days",
        updates: "Manual",
      },
    },
    {
      id: 6,
      name: "Smart Bulb Pro",
      type: "Lighting",
      privacyScore: "A",
      features: {
        encryption: true,
        localStorage: true,
        dataSharing: false,
        retention: "30 days",
        updates: "Automatic",
      },
    },
    {
      id: 7,
      name: "Smart Plug",
      type: "Power",
      privacyScore: "A",
      features: {
        encryption: true,
        localStorage: true,
        dataSharing: false,
        retention: "30 days",
        updates: "Automatic",
      },
    },
    {
      id: 8,
      name: "Video Doorbell",
      type: "Security Device",
      privacyScore: "B+",
      features: {
        encryption: true,
        localStorage: false,
        dataSharing: true,
        retention: "14 days",
        updates: "Automatic",
      },
    },
  ];

  const sortedDevices = [...devices].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "score") return b.privacyScore.localeCompare(a.privacyScore);
    if (sortBy === "type") return a.type.localeCompare(b.type);
    return 0;
  });

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

  const getFeatureIcon = (feature) => {
    switch (feature) {
      case "encryption":
        return Lock;
      case "retention":
        return Clock;
      case "updates":
        return Cloud;
      default:
        return Shield;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 select-none">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Privacy Scorecard</h1>
          <div className="flex gap-4">
            {["name", "score", "type"].map((sort) => (
              <button
                key={sort}
                onClick={() => setSortBy(sort)}
                className={`px-4 py-2 rounded ${
                  sortBy === sort ? "bg-blue-500 text-white" : "bg-white"
                }`}
              >
                Sort by {sort.charAt(0).toUpperCase() + sort.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {sortedDevices.map((device) => (
            <div key={device.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-lg">{device.name}</h2>
                  <p className="text-sm text-gray-500">{device.type}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Privacy Score</div>
                    <div
                      className={`font-bold text-lg ${getScoreColor(
                        device.privacyScore
                      )}`}
                    >
                      {device.privacyScore}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                {Object.entries(device.features).map(([key, value]) => {
                  const Icon = getFeatureIcon(key);
                  return (
                    <div key={key} className="flex items-center gap-2 select-none">
                      <Icon className="w-4 h-4 text-blue-500" />
                      {typeof value === "boolean" ? (
                        value ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <X className="w-4 h-4 text-red-500" />
                        )
                      ) : (
                        <span>{value}</span>
                      )}
                      <span className="capitalize">{key}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinimalistPrivacyLabel;
