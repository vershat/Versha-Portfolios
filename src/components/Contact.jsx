import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uyubuk5",
        "template_3g6jlpp",
        e.target,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: ""
          });
        },
        (error) => {
          setStatus("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-200 py-16 px-3">
      <div className="flex justify-center mb-6">
        <h1 className="text-2xl font-semibold text-center text-white bg-purple-600 px-6 py-2 border-4 border-purple-600 rounded-md">
          Reach out to me
        </h1>
      </div>
      <div className="max-w-md mx-auto bg-white p-4 rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-3 text-center text-base">{status}</p>}
      </div>
    </section>
  );
}

export default Contact;
