import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#050816] text-white px-6 py-16 border-t border-white/10">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        
        {/* Logo + About */}
        <div>
          <h1 className="text-4xl font-bold text-blue-500">ITqHub</h1>

          <p className="text-gray-400 mt-6 leading-8">
            ITqHub helps students build industry-ready skills through
            internships, live projects, and practical training programs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Quick Links
          </h2>

          <div className="flex flex-col gap-4 text-gray-400">
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#services" className="hover:text-blue-400 transition">
              Services
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Connect With Us
          </h2>

          <div className="flex gap-6 text-3xl">
            
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

          </div>

          <p className="text-gray-500 mt-8">
            info@itqhub.com
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500">
        © 2026 ITqHub. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;