import { motion } from "framer-motion";

function Internship() {
  return (
    <section id="internship" className="bg-[#050816] text-white py-28 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p className="text-blue-400 uppercase tracking-[4px] mb-5">
              Internship Program
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Get Real Industry Exposure
            </h2>

            <p className="text-gray-400 text-lg leading-9 mt-8">
              At ITqHub, students work on practical assignments and
              real-time development projects that simulate actual
              industry workflows.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-start gap-5">
                <div className="w-4 h-4 bg-blue-500 rounded-full mt-3"></div>

                <p className="text-gray-300 text-lg">
                  Live project experience with modern technologies
                </p>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-4 h-4 bg-blue-500 rounded-full mt-3"></div>

                <p className="text-gray-300 text-lg">
                  Internship certification and mentorship support
                </p>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-4 h-4 bg-blue-500 rounded-full mt-3"></div>

                <p className="text-gray-300 text-lg">
                  Placement preparation and mock interviews
                </p>
              </div>

            </div>

            <button className="mt-12 bg-blue-600 hover:bg-blue-700 transition duration-300 px-8 py-4 rounded-2xl text-lg font-semibold">
              Apply For Internship
            </button>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>

            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 rounded-[40px] p-10 backdrop-blur-lg">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-black/30 rounded-3xl p-8">
                  <h3 className="text-5xl font-bold text-blue-400">
                    100+
                  </h3>

                  <p className="text-gray-300 mt-4">
                    Internship Programs
                  </p>
                </div>

                <div className="bg-black/30 rounded-3xl p-8 mt-10">
                  <h3 className="text-5xl font-bold text-blue-400">
                    50+
                  </h3>

                  <p className="text-gray-300 mt-4">
                    Real-Time Projects
                  </p>
                </div>

                <div className="bg-black/30 rounded-3xl p-8 -mt-4">
                  <h3 className="text-5xl font-bold text-blue-400">
                    24/7
                  </h3>

                  <p className="text-gray-300 mt-4">
                    Student Support
                  </p>
                </div>

                <div className="bg-black/30 rounded-3xl p-8">
                  <h3 className="text-5xl font-bold text-blue-400">
                    Career
                  </h3>

                  <p className="text-gray-300 mt-4">
                    Guidance & Mentorship
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Internship;