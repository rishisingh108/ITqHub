import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://itqhub.onrender.com/api/contact", formData);

      alert("Message Sent Successfully");

      setFormData({
        name: "",
        email: "",
        course: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error sending message");
    }
  };

  return (
    <section
      id="contact"
      className="bg-black text-white px-6 py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start">
          <div>
            <p className="text-blue-500 uppercase tracking-[5px] text-sm mb-6">
              Contact Us
            </p>

            <h1 className="text-6xl md:text-8xl font-bold leading-none">
              Let’s Talk <br />
              About Your <br />
              Future.
            </h1>

            <p className="text-gray-400 text-xl mt-10 max-w-xl leading-9">
              Whether you want internships, full stack training or real-world
              project experience, ITQHub is here to help you grow
              professionally.
            </p>

            <div className="mt-16 space-y-10">
              <div>
                <p className="text-gray-500 uppercase text-sm tracking-[3px]">
                  Email
                </p>

                <h3 className="text-2xl mt-2">info@itqhub.com</h3>
              </div>

              <div>
                <p className="text-gray-500 uppercase text-sm tracking-[3px]">
                  Phone
                </p>

                <h3 className="text-2xl mt-2">+91 9281433641</h3>
              </div>

              <div>
                <p className="text-gray-500 uppercase text-sm tracking-[3px]">
                  Location
                </p>

                <h3 className="text-2xl mt-2 leading-10">
                  Kukatpally, Hyderabad <br />
                  Telangana
                </h3>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div>
                <label className="text-gray-500 text-sm">Your Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-2xl"
                />
              </div>

              <div>
                <label className="text-gray-500 text-sm">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-2xl"
                />
              </div>

              <div>
                <label className="text-gray-500 text-sm">
                  Interested Course
                </label>

                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full bg-black border-b border-white/20 py-4 outline-none text-2xl text-gray-300"
                >
                  <option value="">Select Course</option>
                  <option value="Full Stack Development">
                    Full Stack Development
                  </option>
                  <option value="Data Science">Data Science</option>
                  <option value="Salesforce Training">
                    Salesforce Training
                  </option>
                  <option value="AWS & Cloud">AWS & Cloud</option>
                  <option value="Java Full Stack">Java Full Stack</option>
                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>
                </select>
              </div>

              <div>
                <label className="text-gray-500 text-sm">Message</label>

                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-2xl resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-8 text-2xl border-b border-blue-500 text-blue-500 pb-2 hover:text-blue-400 transition"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;