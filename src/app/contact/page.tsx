"use client"

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    // You can add the logic here to send form data to your backend or email.
  };

  return (
    <section className="py-16">
      <div className=" container mx-auto px-4 text-center">
        <h2 className="text-4xl font-playfair font-bold text-[#5E3A87] mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-[#F4EDE4]  p-4 rounded-md max-w-xl mx-auto">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5E3A87] mb-4"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5E3A87] mb-4"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5E3A87] mb-4"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-[#5E3A87] text-white rounded-lg hover:bg-[#3D2A5E] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
