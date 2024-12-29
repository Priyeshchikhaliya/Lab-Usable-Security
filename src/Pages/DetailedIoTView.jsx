import React, { useState } from "react";
import {
  Shield,
  AlertTriangle,
  Check,
  X,
  Eye,
  Cloud,
  Lock,
  Clock,
  Share2,
} from "lucide-react";
import securityCameraImg from "../assets/smart-security-camera-pro.png";
import smartDoorbellImg from "../assets/smart-doorbell-plus.png";
import smartThermostatImg from "../assets/smart-thermostat-elite.png";
import smartLightImg from "../assets/smart-light-system.png";
import smartSpeakerImg from "../assets/smart-speaker-hub.png";
import doorLockImg from "../assets/smart-door-lock-pro.png";

const DetailedIoTView = () => {
  const [activeDeviceTab, setActiveDeviceTab] = useState({});

  const devices = [
    {
      id: 1,
      name: "Smart Security Camera Pro",
      category: "Security",
      manufacturer: "SecureTech",
      price: "$199.99",
      privacyScore: "A",
      securityScore: "A+",
      riskLevel: "low",
      imageUrl: securityCameraImg,
      features: {
        encryption: true,
        localStorage: true,
        cloudStorage: true,
        dataSharing: false,
        aiProcessing: true,
        voiceControl: false,
      },
      privacyDetails: {
        dataCollection: ["Video", "Audio", "Motion", "Temperature"],
        dataSharingPartners: "None",
        retentionPeriod: "30 days",
        userControls: ["Delete Data", "Disable Features", "Export Data"],
        updateFrequency: "Monthly",
      },
      certifications: ["GDPR Compliant", "ISO 27001", "Privacy Shield"],
      warnings: [],
    },
    {
      id: 2,
      name: "Smart Doorbell Plus",
      category: "Security",
      manufacturer: "HomeSafe",
      price: "$149.99",
      privacyScore: "B+",
      securityScore: "A",
      riskLevel: "medium",
      imageUrl: smartDoorbellImg,
      features: {
        encryption: true,
        localStorage: false,
        cloudStorage: true,
        dataSharing: true,
        aiProcessing: true,
        voiceControl: true,
      },
      privacyDetails: {
        dataCollection: ["Video", "Audio", "Motion"],
        dataSharingPartners: "Limited third-party analytics",
        retentionPeriod: "14 days",
        userControls: ["Delete Data", "Privacy Mode"],
        updateFrequency: "Quarterly",
      },
      certifications: ["GDPR Compliant"],
      warnings: ["Third-party data sharing", "Cloud-only storage"],
    },
    {
      id: 3,
      name: "Smart Thermostat Elite",
      category: "Climate Control",
      manufacturer: "EcoTech",
      price: "$179.99",
      privacyScore: "A",
      securityScore: "A",
      riskLevel: "low",
      imageUrl: smartThermostatImg,
      features: {
        encryption: true,
        localStorage: true,
        cloudStorage: true,
        dataSharing: false,
        aiProcessing: true,
        voiceControl: true,
      },
      privacyDetails: {
        dataCollection: ["Temperature", "Humidity", "Motion", "Energy Usage"],
        dataSharingPartners: "Anonymous data sharing with utility providers",
        retentionPeriod: "90 days",
        userControls: ["Data Export", "Usage History", "Sharing Preferences"],
        updateFrequency: "Monthly",
      },
      certifications: ["Energy Star", "GDPR Compliant"],
      warnings: ["Optional utility provider data sharing"],
    },
    {
      id: 4,
      name: "Smart Light System",
      category: "Lighting",
      manufacturer: "LightTech",
      price: "$129.99",
      privacyScore: "A",
      securityScore: "A",
      riskLevel: "low",
      imageUrl: smartLightImg,
      features: {
        encryption: true,
        localStorage: true,
        cloudStorage: false,
        dataSharing: false,
        aiProcessing: false,
        voiceControl: true,
      },
      privacyDetails: {
        dataCollection: ["Usage Patterns", "Schedule", "Power Consumption"],
        dataSharingPartners: "None",
        retentionPeriod: "60 days",
        userControls: ["Usage History", "Schedule Control", "Remote Access"],
        updateFrequency: "Quarterly",
      },
      certifications: ["Energy Star", "UL Certified"],
      warnings: [],
    },
    {
      id: 5,
      name: "Smart Speaker Hub",
      category: "Audio",
      manufacturer: "SoundTech",
      price: "$199.99",
      privacyScore: "B",
      securityScore: "B+",
      riskLevel: "medium",
      imageUrl: smartSpeakerImg,
      features: {
        encryption: true,
        localStorage: false,
        cloudStorage: true,
        dataSharing: true,
        aiProcessing: true,
        voiceControl: true,
      },
      privacyDetails: {
        dataCollection: [
          "Voice Commands",
          "Usage History",
          "Connected Devices",
        ],
        dataSharingPartners: "Third-party voice processing",
        retentionPeriod: "30 days",
        userControls: ["Voice History Delete", "Microphone Control"],
        updateFrequency: "Monthly",
      },
      certifications: ["GDPR Compliant"],
      warnings: ["Always-listening mode", "Cloud processing required"],
    },
    {
      id: 6,
      name: "Smart Door Lock Pro",
      category: "Security",
      manufacturer: "LockSafe",
      price: "$249.99",
      privacyScore: "A+",
      securityScore: "A+",
      riskLevel: "low",
      imageUrl: doorLockImg,
      features: {
        encryption: true,
        localStorage: true,
        cloudStorage: true,
        dataSharing: false,
        aiProcessing: false,
        voiceControl: false,
      },
      privacyDetails: {
        dataCollection: ["Access Logs", "Battery Status", "Lock Status"],
        dataSharingPartners: "None",
        retentionPeriod: "90 days",
        userControls: ["Access History", "User Management", "Remote Lock"],
        updateFrequency: "Monthly",
      },
      certifications: ["UL Certified", "GDPR Compliant", "ISO 27001"],
      warnings: [],
    },
  ];

  const getScoreClass = (score) => {
    const scores = {
      "A+": "bg-green-100 text-green-800",
      A: "bg-green-100 text-green-800",
      "B+": "bg-blue-100 text-blue-800",
      B: "bg-blue-100 text-blue-800",
      C: "bg-yellow-100 text-yellow-800",
      D: "bg-red-100 text-red-800",
    };
    return scores[score] || "bg-gray-100 text-gray-800";
  };

  const getRiskBadge = (level) => {
    const badges = {
      low: "bg-green-100 text-green-800",
      medium: "bg-yellow-100 text-yellow-800",
      high: "bg-red-100 text-red-800",
    };
    return badges[level] || "bg-gray-100 text-gray-800";
  };

  const toggleDeviceTab = (deviceId, tab) => {
    setActiveDeviceTab((prev) => ({
      ...prev,
      [deviceId]: prev[deviceId] === tab ? null : tab,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 select-none">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">IoT Privacy Directory</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {devices.map((device) => (
            <div
              key={device.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={device.imageUrl}
                  alt={device.name}
                  className="w-full h-64 object-contain"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreClass(
                      device.privacyScore
                    )}`}
                  >
                    Privacy: {device.privacyScore}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskBadge(
                      device.riskLevel
                    )}`}
                  >
                    {device.riskLevel.charAt(0).toUpperCase() +
                      device.riskLevel.slice(1)}{" "}
                    Risk
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold mb-1">{device.name}</h2>
                    <p className="text-gray-600">
                      {device.manufacturer} • {device.price}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {device.category}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Feature Overview */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(device.features).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        {value ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <X className="w-4 h-4 text-red-500" />
                        )}
                        <span className="text-sm capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Privacy Details */}
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {device.privacyDetails.dataCollection.map((item, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 px-2 py-1 rounded text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Warnings */}
                  {device.warnings.length > 0 && (
                    <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                      <h3 className="font-medium flex items-center gap-2 text-yellow-800">
                        <AlertTriangle className="w-4 h-4" />
                        Privacy Considerations
                      </h3>
                      <ul className="mt-2 space-y-1">
                        {device.warnings.map((warning, i) => (
                          <li key={i} className="text-sm text-yellow-700">
                            • {warning}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {device.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedIoTView;
