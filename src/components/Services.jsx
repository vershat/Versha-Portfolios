import React from "react";

function Services() {
  const services = [
    { title: "Web Development", description: "I build responsive and modern websites." },
    { title: "Video Editing", description: "Editing and enhancing videos." },
    { title: "App development", description: "Exploring app developement and AI/ML technologies" },
  ];

  return (
    <section id="services" className="py-20 bg-white px-10">
      <div className="bg-purple-600 text-white text-center rounded-lg p-4 w-fit mx-auto mb-10">
        <h1 className="text-4xl font-bold">Skills</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-gray-300 shadow-lg text-center hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-bold text-purple-600 mb-4">{service.title}</h2>
            <p className="font-semibold text-gray-800">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
