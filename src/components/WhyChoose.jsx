function WhyChoose() {

  const points = [
    {
      number: "01",
      title: "Real-Time Projects",
      text: "Work on practical industry-level applications instead of only theory-based learning.",
    },

    {
      number: "02",
      title: "Internship Support",
      text: "Gain hands-on experience with internship opportunities and live development tasks.",
    },

    {
      number: "03",
      title: "Placement Guidance",
      text: "Resume building, mock interviews and career support for students and freshers.",
    },

    {
      number: "04",
      title: "Expert Mentors",
      text: "Learn from experienced trainers with real-world software development knowledge.",
    },
  ];

  return (
    <section className="bg-[#050816] text-white px-6 py-28">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row lg:justify-between gap-16 mb-20">

          <div>
            <p className="text-blue-400 uppercase tracking-[4px] text-sm mb-5">
              Why Choose ITqHub
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Learn Beyond <br />
              Traditional Training
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-9 max-w-xl">
            ITqHub focuses on practical learning, internships and real-world implementation to help students become industry ready.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {points.map((item, index) => (

            <div
              key={index}
              className="border border-white/10 p-10 rounded-[30px] hover:border-blue-500 transition duration-300"
            >

              <span className="text-blue-500 text-5xl font-bold">
                {item.number}
              </span>

              <h3 className="text-3xl font-semibold mt-8">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-6 leading-8 text-lg">
                {item.text}
              </p>

            </div>

          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;