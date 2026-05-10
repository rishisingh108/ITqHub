import { motion } from "framer-motion";
import { FaLaptopCode, FaUserGraduate, FaBriefcase } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="bg-black text-white py-24 px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-400 uppercase tracking-[4px] mb-4">
            About ITqHub
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Building Future IT Professionals
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            ITqHub is focused on empowering students with industry-ready
            technical skills through practical learning, internships,
            live projects, and mentorship from experienced professionals.
          </p>

          <p className="text-gray-400 leading-relaxed">
            We help learners gain confidence in real-world technologies
            including Web Development, Full Stack Development, Cyber Security,
            and modern programming tools required in today’s IT industry.
          </p>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >

          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:scale-105 transition duration-300">

            <FaUserGraduate className="text-4xl text-blue-500 mb-6" />

            <h3 className="text-3xl font-bold mb-2">
              500+
            </h3>

            <p className="text-gray-300">
              Students Trained
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 hover:scale-105 transition duration-300 mt-10">

            <FaLaptopCode className="text-4xl mb-6" />

            <h3 className="text-3xl font-bold mb-2">
              Live Projects
            </h3>

            <p className="text-white/80">
              Practical project-based learning experience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:scale-105 transition duration-300 sm:col-span-2">

            <FaBriefcase className="text-4xl text-blue-500 mb-6" />

            <h3 className="text-3xl font-bold mb-2">
              Internship & Career Support
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Resume guidance, internships, interview preparation,
              and placement-focused mentorship to help students
              enter the IT industry confidently.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;