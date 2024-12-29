import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import VisualPrivacyLabel from "./Pages/VisualPrivacyLabel";
import MinimalistPrivacyLabel from "./Pages/MinimalistPrivacyLabel";
import InteractivePrivacyLabel from "./Pages/InteractivePrivacyLabel";
import DetailedIoTView from "./Pages/DetailedIoTView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visual-label" element={<VisualPrivacyLabel />} />
        <Route path="/minimalist-label" element={<MinimalistPrivacyLabel />} />
        <Route
          path="/interactive-label"
          element={<InteractivePrivacyLabel />}
        />{" "}
        <Route
          path="/detailed-iot-view"
          element={<DetailedIoTView />}
        />
      </Routes>
    </Router>
  );
}

export default App;
