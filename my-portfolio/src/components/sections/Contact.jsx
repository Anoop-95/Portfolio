import React, { useState } from 'react';
import RevealonScroll from '../RevealonScroll';
import emailjs from 'emailjs-com';
import { FaUser, FaEnvelope } from 'react-icons/fa'; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <>
    <section id="contact" className="p-10 md:p-24 text-white  bg-gray-100">
    <h2 className="text-2xl md:text-4xl text-black font-bold">Get In Touch</h2>
      <RevealonScroll>
        <div className="flex items-center justify-center py-20 ">

        <div className="px-4 w-full max-w-3xl">
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Row for Name & Email*/}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Name */}
              <div className="relative flex-1">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Name"
                  required
                  className="w-full bg-[#565454] text-white border border-gray-700 rounded px-10 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-[#565454] hover:shadow-[0_8px_20px_rgba(59,130,226,0.45)]"
                />
              </div>

              {/* Email */}
              <div className="relative flex-1">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-[#565454] text-white border border-gray-700 rounded px-10 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-[#565454] hover:shadow-[0_8px_20px_rgba(59,130,226,0.45)]"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your Message..."
                rows={5}
                required
                className="w-full bg-[#565454] text-white border border-gray-700 rounded px-10 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-[#565454] hover:shadow-[0_8px_20px_rgba(59,130,226,0.45)]"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition w-full md:w-auto"
            >
              Submit &rarr;
            </button>
          </form>
        </div>
        </div>
      </RevealonScroll>
    </section>
    </>
  );
};

export default Contact;
