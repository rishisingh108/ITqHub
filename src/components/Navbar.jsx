import { GraduationCap } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <GraduationCap className="text-blue-500 w-10 h-10" />
          <h1 className="text-4xl font-bold text-blue-500">
            ITqHub
          </h1>
        </div>

        <div className="flex items-center gap-10 text-white text-lg">
          <a href="#home" className="hover:text-blue-500 transition">
            Home
          </a>

          <a href="#about" className="hover:text-blue-500 transition">
            About
          </a>

          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;