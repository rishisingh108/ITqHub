import { FaArrowRight } from "react-icons/fa";

function Services() {
  const courses = [
    {
      title: "Full Stack Development",
      text: "Frontend, backend, database and deployment with real-time projects.",
    },

    {
      title: "Data Science",
      text: "Python, machine learning, analytics and AI-based practical training.",
    },

    {
      title: "Salesforce Training",
      text: "CRM development, admin tools and cloud-based solutions.",
    },

    {
      title: "AWS & Cloud",
      text: "Cloud deployment, hosting and infrastructure management skills.",
    },
  ];

  return (
    <section id="services" className="bg-[#050816] text-white px-6 py-24">

      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">

          <div>
            <span className="text-blue-400 uppercase tracking-[3px] text-sm">
              Courses & Training
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
              Learn Skills That <br />
              Companies Actually Need
            </h2>
          </div>

          <p className="text-gray-400 max-w-md leading-7">
            Industry-oriented programs designed for students who want practical exposure, internships and placement support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {courses.map((course, index) => (
            <div
              key={index}
              className="group border border-white/10 bg-white/5 rounded-3xl p-8 hover:border-blue-500 transition duration-300"
            >

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-semibold">
                  {course.title}
                </h3>

                <FaArrowRight className="text-blue-400 group-hover:translate-x-2 transition duration-300" />
              </div>

              <p className="text-gray-400 mt-6 leading-7">
                {course.text}
              </p>

              <button className="mt-8 text-blue-400 font-medium hover:text-blue-300">
                Learn More
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;