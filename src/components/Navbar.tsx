export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-6">
      <div className="flex items-center gap-2">
        <img
          className="h-10"
          src="src/assets/Logo.png"
          alt="logo"
        />
      </div>

      <nav className="hidden md:flex gap-8 text-red-500 font-semibold text-lg">
        <a href="#" className="hover:text-white transition">
          Accueil
        </a>
        <a href="#" className="hover:text-white transition">
          Programme
        </a>
        <a href="#" className="hover:text-white transition">
          Mon Planning
        </a>
        <a href="#" className="hover:text-white transition">
          Mon passeport
        </a>
      </nav>
    </header>
  );
}