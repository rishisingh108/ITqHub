import { motion } from "framer-motion";

function Testimonials() {

  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Full Stack Student",
      review:
        "The internship experience at ITqHub helped me improve my practical development skills and confidence.",
    },

    {
      name: "Priya Verma",
      role: "Data Science Learner",
      review:
        "Excellent mentorship and real-time projects. The training environment feels industry-oriented.",
    },

    {
      name: "Aman Gupta",
      role: "Internship Trainee",
      review:
        "I learned modern technologies and gained real project exposure through their internship program.",
    },
  ];

  return (
    <section className="bg-black text-white py-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-blue-400 uppercase tracking-[4px] mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            What Students Say
          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:border-blue-500 transition duration-300"
            >

              <p className="text-gray-300 leading-8 text-lg">
                "{item.review}"
              </p>

              <div className="mt-10">

                <h3 className="text-2xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-blue-400 mt-2">
                  {item.role}
                </p>

              </div>

            </motion.div>

          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;