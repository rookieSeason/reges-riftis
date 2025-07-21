import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RosterPage from "./pages/RosterPage";
import CommunityPage from "./pages/CommunityPage";
import JoinPage from "./pages/JoinPage";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g. 2 seconds)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <HomePage />
          <AboutPage />
          <RosterPage />
          <CommunityPage />
          <JoinPage />
          {/* Ensure Footer is always at the bottom */}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
