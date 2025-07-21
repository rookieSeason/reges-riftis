// components/Preloader.jsx
import logo from "../assets/logo.png"; // update path if needed

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <img src={logo} alt="Guild Logo" className="w-30 h-30 animate-pulse" />
    </div>
  );
}
