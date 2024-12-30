import React from "react";
import myntra from "../assets/myntra.png";

function Projects() {
  return (
    <section id="projects" className="py-20 px-10 bg-gray-200">
      <div className="bg-purple-600 text-white text-center rounded-xl p-4 w-fit mx-auto mb-10 shadow-2xl">
        <h1 className="text-4xl font-bold">My Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Project 1 */}
        <div className="flex flex-col  bg-white p-4 rounded-lg shadow-2xl text-center hover:shadow-xl transition-shadow h-full">
          <img
            src="/Project3.jpg"
            alt="Thella Walla"
            className="rounded-lg mb-4 object-cover h-48 w-full"
          />
          <h2 className="text-xl font-bold text-gray-800">Thella Walla</h2>
          <a
            href="https://github.com/vershat/Byteverse_Team_Blitz"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col bg-white p-4 rounded-lg shadow-2xl text-center hover:shadow-xl transition-shadow h-full">
          <img
            src="/project1.jpg"
            alt="Gmail-Messenger"
            className="rounded-lg mb-4 object-cover h-48 w-full"
          />
          <h2 className="text-xl font-bold text-gray-800">Gmail-Messenger</h2>
          <a
            href="https://github.com/vershat/Gmail_Like_Messenger"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col bg-white p-4 rounded-lg shadow-2xl text-center hover:shadow-xl transition-shadow h-full">
          <img
            src={myntra}
            alt="Myntra"
            className="rounded-lg mb-4 object-cover h-48 w-full"
          />
          <h2 className="text-xl font-bold text-gray-800">Myntra</h2>
          <a
            href="https://github.com/vershat/Heneko_Myntra"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
