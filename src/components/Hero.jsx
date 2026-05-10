import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 max-w-4xl relative"
      >
        <p className="text-blue-400 text-lg mb-4 tracking-wide uppercase">
          Innovative Training & Quality Hub
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Build Your IT Career <br />

          <span className="text-blue-500">
            With ITqHub
          </span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Learn industry-ready skills with real-time projects,
          internships, and placement-focused training programs.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          
          <button
            onClick={() =>
              document.getElementById("services").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] px-8 py-4 rounded-xl text-lg font-semibold transition duration-300"
          >
            Explore Courses
          </button>

          <button
            onClick={() =>
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold transition duration-300"
          >
            Contact Us
          </button>

        </div>
      </motion.div>
    </section>
  );
}

export default Hero;