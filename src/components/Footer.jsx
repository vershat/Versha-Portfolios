import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="text-center">
        <p>&copy; 2024 Versha. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/in/versha-yadav-491583225/"
            className="text-2xl hover:text-purple-600 transition duration-300"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/your-vershat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-purple-600 transition duration-300"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
