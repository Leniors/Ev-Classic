import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 w-full px-4 sm:px-8 md:px-16 lg:px-24 border-t border-gray-200 bg-gray-300">
      <div className="max-w-7xl mx-auto bg-white px-8 py-12 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2025 Rauch &amp; Lang Electric Car. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            This vintage car showcase website was designed to capture the
            elegance and innovation. Emphasizing the luxury aspect, while the
            smooth transitions and animations provide a modern touch to the
            historical content.
          </p>
          <p className="mt-2">
            Built by{" "}
            <a
              href="https://leeroy-mokua.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 text-bold"
            >
              Leeroy Mokua
            </a>{" "}
            and brought to you by{" "}
            <a
              href="https://leeroy-mokua.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 text-bold"
            >
              mokualeeroy@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
