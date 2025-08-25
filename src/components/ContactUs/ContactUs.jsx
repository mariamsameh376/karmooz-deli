import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ An error occurred while sending.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ An error occurred while connecting to the server.");
    }
  };

  return (
    <section className="[#FAF3E0] text-black py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-impact tracking-wide mb-2">CONTACT US</h2>
        <div className="flex justify-center mb-4">
          <div className="w-16 h-1 bg-[#d99058] rounded-full mx-1" />
          <div className="w-3 h-1 bg-[#d99058] rounded-full mx-1" />
          <div className="w-16 h-1 bg-[#d99058] rounded-full mx-1" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="text-left space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p><span className="font-semibold">Address: </span>614 18th Ave N,Nashville,TN 37203</p>
            <p><span className="font-semibold">Phone: </span>(615) 810 2558</p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border-b-2 border-[#d99058] text-white placeholder-gray-400 focus:outline-none py-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-b-2 border-[#d99058] text-white placeholder-gray-400 focus:outline-none py-2"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-[#d99058] text-white placeholder-gray-400 focus:outline-none py-2"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-[#d99058] text-white placeholder-gray-400 focus:outline-none py-2"
              required
            />
            <button
              type="submit"
              className="bg-[#d99058] text-black hover:bg-[#ce2029] hover:text-white px-6 py-3 font-semibold transition rounded"
            >
              Send Message
            </button>
            {status && <p className="mt-3">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
