import React, { useState } from "react";
import {
  AlertTriangle,
  Shield,
  Database,
  Lock,
  Share2,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  Filter,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
// Keep existing devices array
const devices = [
  {
    id: 1,
    name: "ALECTO Video-Babyphone SMARTBABY5",
    category: "Baby Monitoring",
    manufacturer: "ALECTO",
    price: "$99.99",
    privacyScore: "B+",
    imageUrl: product1,
    privacyDetails: {
      dataCollection: ["Video", "Audio"],
      dataTypes: {
        personal: 30,
        usage: 40,
        environmental: 30,
      },
      features: {
        encryption: "AES-256",
        storage: "Local with cloud backup",
        sharing: "Optional third-party",
        retention: "14 days",
        updates: "Automatic weekly",
      },
      risks: ["Cloud storage optional"],
      certifications: ["GDPR", "CE"],
    },
  },
  {
    id: 2,
    name: "BOIFUN Babyphone mit Kamera",
    category: "Baby Monitoring",
    manufacturer: "BOIFUN",
    price: "$89.99",
    privacyScore: "B",
    imageUrl: product2,
    privacyDetails: {
      dataCollection: ["Video", "Audio"],
      dataTypes: {
        personal: 35,
        usage: 35,
        environmental: 30,
      },
      features: {
        encryption: "AES-128",
        storage: "Local only",
        sharing: "No third-party",
        retention: "7 days",
        updates: "Manual",
      },
      risks: ["No cloud backup"],
      certifications: ["CE"],
    },
  },
  {
    id: 3,
    name: "APPLE HomePod Lautsprecher",
    category: "Audio",
    manufacturer: "APPLE",
    price: "$299.99",
    privacyScore: "A",
    imageUrl: product3,
    privacyDetails: {
      dataCollection: ["Voice Commands", "Usage History"],
      dataTypes: {
        personal: 25,
        usage: 50,
        environmental: 25,
      },
      features: {
        encryption: "End-to-end",
        storage: "Local with cloud sync",
        sharing: "Apple services only",
        retention: "User-controlled",
        updates: "Automatic",
      },
      risks: ["Data shared within Apple ecosystem"],
      certifications: ["GDPR", "ISO 27001"],
    },
  },
  {
    id: 4,
    name: "GOOGLE Nest Mini 2",
    category: "Audio",
    manufacturer: "GOOGLE",
    price: "$49.99",
    privacyScore: "A",
    imageUrl: product4,
    privacyDetails: {
      dataCollection: ["Voice Commands", "Usage History"],
      dataTypes: {
        personal: 30,
        usage: 50,
        environmental: 20,
      },
      features: {
        encryption: "AES-256",
        storage: "Cloud",
        sharing: "Google services and partners",
        retention: "User-controlled",
        updates: "Automatic",
      },
      risks: ["Data used for ad personalization"],
      certifications: ["GDPR", "ISO 27001"],
    },
  },
  {
    id: 5,
    name: "MEATER Block",
    category: "Cooking",
    manufacturer: "MEATER",
    price: "$249.99",
    privacyScore: "A+",
    imageUrl: product5,
    privacyDetails: {
      dataCollection: ["Temperature Data", "Cooking Logs"],
      dataTypes: {
        personal: 10,
        usage: 60,
        environmental: 30,
      },
      features: {
        encryption: "AES-256",
        storage: "Local",
        sharing: "No third-party",
        retention: "User-controlled",
        updates: "Automatic",
      },
      risks: ["Limited data collection"],
      certifications: ["GDPR", "CE"],
    },
  },
  {
    id: 6,
    name: "EUFY Überwachungskamera Security by ANKER eufyCam 2 Pro",
    category: "Security",
    manufacturer: "EUFY",
    price: "$199.99",
    privacyScore: "A",
    imageUrl: product6,
    privacyDetails: {
      dataCollection: ["Video", "Audio", "Motion"],
      dataTypes: {
        personal: 40,
        usage: 40,
        environmental: 20,
      },
      features: {
        encryption: "AES-256",
        storage: "Local with cloud option",
        sharing: "Optional third-party",
        retention: "30 days",
        updates: "Automatic",
      },
      risks: ["Potential cloud vulnerabilities"],
      certifications: ["GDPR", "CE"],
    },
  },
  {
    id: 7,
    name: "PetTec Cam Lite",
    category: "Pet Monitoring",
    manufacturer: "PetTec",
    price: "$59.99",
    privacyScore: "B+",
    imageUrl: product7,
    privacyDetails: {
      dataCollection: ["Video", "Audio"],
      dataTypes: {
        personal: 30,
        usage: 40,
        environmental: 30,
      },
      features: {
        encryption: "AES-128",
        storage: "Local",
        sharing: "No third-party",
        retention: "7 days",
        updates: "Manual",
      },
      risks: ["No cloud backup", "Manual updates"],
      certifications: ["CE"],
    },
  },
  {
    id: 8,
    name: "Roborock Qrevo Plus Saug-und Wischroboter Weiß App gesteuert",
    category: "Cleaning",
    manufacturer: "Roborock",
    price: "$799.99",
    privacyScore: "A",
    imageUrl: product8,
    privacyDetails: {
      dataCollection: ["Usage Data", "Cleaning Logs"],
      dataTypes: {
        personal: 20,
        usage: 50,
        environmental: 30,
      },
      features: {
        encryption: "AES-256",
        storage: "Cloud",
        sharing: "Roborock services",
        retention: "User-controlled",
        updates: "Automatic",
      },
      risks: ["Data shared with manufacturer"],
      certifications: ["GDPR", "CE"],
    },
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

const DataCollectionChart = ({ data }) => {
  const dataTypes = Object.entries(data).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
  }));

  const getColorForValue = (value) => {
    if (value <= 30) return "#22c55e"; // green
    if (value <= 60) return "#3b82f6"; // blue
    return "#eab308"; // yellow
  };

  return (
    <div className="space-y-3">
      {dataTypes.map(({ name, value }) => (
        <div key={name} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="font-medium">{name}</span>
            <span>{value}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5">
            <div
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: `${value}%`,
                backgroundColor: getColorForValue(value),
              }}
            />
          </div>
          <div className="text-xs text-gray-500">
            {value <= 30 && "Low Impact"}
            {value > 30 && value <= 60 && "Medium Impact"}
            {value > 60 && "High Impact"}
          </div>
        </div>
      ))}
    </div>
  );
};

const DeviceCard = ({ device }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
      <div className="relative">
        <img
          src={device.imageUrl}
          alt={device.name}
          className="w-full h-64 object-contain bg-gray-50"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreClass(
              device.privacyScore
            )}`}
          >
            Privacy: {device.privacyScore}
          </span>
          {device.securityScore && (
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Security: {device.securityScore}
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold mb-1">{device.name}</h2>
            <p className="text-gray-600">
              {device.manufacturer} • {device.price}
            </p>
            <p className="text-sm text-gray-500 mt-1">{device.category}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {device.privacyDetails.dataCollection.map((item, i) => (
            <span
              key={i}
              className="bg-gray-100 px-2 py-1 rounded text-sm flex items-center gap-1"
            >
              <Database className="w-4 h-4" />
              {item}
            </span>
          ))}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 text-sm flex items-center gap-1 mb-4"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show Details
            </>
          )}
        </button>

        {isExpanded && (
          <div className="space-y-6 border-t pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Privacy Features</h3>
                <div className="space-y-2">
                  {Object.entries(device.privacyDetails.features).map(
                    ([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="font-medium capitalize">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    )
                  )}
                </div>

                {device.privacyDetails.risks.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2 text-yellow-700">
                      Privacy Considerations
                    </h3>
                    <ul className="space-y-1">
                      {device.privacyDetails.risks.map((risk, index) => (
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
                    {device.privacyDetails.certifications.map((cert, index) => (
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

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Data Collection Analysis
                </h3>
                <DataCollectionChart data={device.privacyDetails.dataTypes} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const DetailedIoTView = () => {
  const [viewType, setViewType] = useState("grid");
  const [filters, setFilters] = useState({
    privacyScore: "all",
    category: "all",
  });

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

  const categories = [...new Set(devices.map((device) => device.category))];
  const privacyScores = [
    ...new Set(devices.map((device) => device.privacyScore)),
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">IoT Privacy Platform</h1>
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

        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex gap-4">
            <select
              value={filters.privacyScore}
              onChange={(e) =>
                setFilters({ ...filters, privacyScore: e.target.value })
              }
              className="rounded border p-2"
            >
              <option value="all">All Privacy Scores</option>
              {privacyScores.map((score) => (
                <option key={score} value={score}>
                  {score} Score
                </option>
              ))}
            </select>

            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
              className="rounded border p-2"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div
          className={`grid gap-8 ${
            viewType === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {filteredDevices.map((device) => (
            <DeviceCard key={device.id} device={device} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedIoTView;
