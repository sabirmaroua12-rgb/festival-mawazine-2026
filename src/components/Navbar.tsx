import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <Link to="/" className="flex items-center gap-2">
        <img
          className="h-10"
          src={logo}
          alt="logo"
        />
      </Link>

      <nav className="hidden md:flex gap-8 text-red-500 font-semibold text-lg">
        <Link to="/" className="hover:text-white transition">
          Accueil
        </Link>
        <Link to="/programme" className="hover:text-white transition">
          Programme
        </Link>
        <Link to="/planning" className="hover:text-white transition">
          Mon Planning
        </Link>
        <Link to="/passeport" className="hover:text-white transition">
          Mon passeport
        </Link>
      </nav>
    </header>
  );
}