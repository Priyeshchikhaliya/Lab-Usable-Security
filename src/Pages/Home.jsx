import { Link } from "react-router-dom";
import { Grid, List, LineChart, Shield } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 select-none">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          IoT Privacy Label Platform
        </h1>
        <p className="text-gray-600 text-center mb-4 max-w-2xl mx-auto">
          Explore IoT device privacy features through different visualization
          approaches. Each view is optimized for different use cases and user
          preferences.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mt-12">
          {/* Each Link is now set to h-full to fill the grid cell height */}
          <Link to="/visual-label" className="block h-full">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow relative overflow-hidden h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <Grid className="w-8 h-8 text-blue-500 shrink-0" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Visual Category View
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                A category-based approach with visual cards showing privacy
                scores and features:
              </p>
              <ul className="text-gray-600 space-y-2 mb-4 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                  Category-based filtering system
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                  Visual privacy and security indicators
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                  Key features and privacy highlights
                </li>
              </ul>
              <p className="text-sm text-blue-600 mt-auto">
                Best for: Visual exploration of devices by category
              </p>
            </div>
          </Link>

          <Link to="/minimalist-label" className="block h-full">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow relative overflow-hidden h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <List className="w-8 h-8 text-blue-500 shrink-0" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Minimalist List View
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                A streamlined list-based presentation focusing on essential
                privacy information:
              </p>
              <ul className="text-gray-600 space-y-2 mb-4 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                  Clean, sortable list layout
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                  Core privacy features and scores
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                  Quick comparison capabilities
                </li>
              </ul>
              <p className="text-sm text-blue-600 mt-auto">
                Best for: Quick device comparison and overview
              </p>
            </div>
          </Link>

          <Link to="/interactive-label" className="block h-full">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow relative overflow-hidden h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <LineChart className="w-8 h-8 text-blue-500 shrink-0" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Interactive Analysis View
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Detailed interactive analysis with charts and comprehensive
                privacy data:
              </p>
              <ul className="text-gray-600 space-y-2 mb-4 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                  Data collection visualization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                  Advanced filtering options
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                  Detailed privacy breakdowns
                </li>
              </ul>
              <p className="text-sm text-blue-600 mt-auto">
                Best for: In-depth privacy analysis and exploration
              </p>
            </div>
          </Link>

          <Link to="/detailed-iot-view" className="block h-full">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow relative overflow-hidden h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-8 h-8 text-blue-500 shrink-0" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Comprehensive Device View
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Full device profiles with detailed privacy and security
                information:
              </p>
              <ul className="text-gray-600 space-y-2 mb-4 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                  Product images and specifications
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                  Privacy risk assessments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                  Certifications and compliance details
                </li>
              </ul>
              <p className="text-sm text-blue-600 mt-auto">
                Best for: Detailed device privacy profiles and documentation
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
