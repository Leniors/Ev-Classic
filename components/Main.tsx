import React from "react";
import HeroCarousel from "./HeroCarousel";

const Main = () => {
  return (
    <div className="bg-white">
      <HeroCarousel />

      <section
        id="features"
        className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-gray-900">
            RESTORATION FEATURES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="group flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src="/2.webp"
                  alt="BATTERY RENOVATION"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-light mb-2 text-gray-900">
                  BATTERY RENOVATION
                </h3>
                <p className="text-sm text-gray-600">
                  Front and back compartments meticulously restored
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src="/14.webp"
                  alt="INTERIOR LUXURY"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-light mb-2 text-gray-900">
                  INTERIOR LUXURY
                </h3>
                <p className="text-sm text-gray-600">
                  Burgundy edge-trimmed cloth with pleated seats
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="group flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src="/6.webp"
                  alt="HYBRID SYSTEM"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-light mb-2 text-gray-900">
                  HYBRID SYSTEM
                </h3>
                <p className="text-sm text-gray-600">
                  Advanced hydrogen hybrid technology integration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:min-h-screen bg-gray-300 px-4 py-8 md:py-16">
        <div className="max-w-7xl mx-auto bg-white px-8 py-8 md:py-24 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-gray-900">
                HYDROGEN HYBRID INNOVATION
              </h3>
              <p className="text-gray-600">
                Our groundbreaking conversion preserves the car&apos;s
                historical integrity while incorporating cutting-edge hydrogen
                hybrid technology.
              </p>
              <button className="flex items-center text-sm group text-gray-900">
                EXPLORE TECHNOLOGY
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="w-full h-auto">
              <img
                src="/6.webp"
                alt="Engineering Excellence"
                className="w-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16"
      >
        <section className="max-w-7xl mx-auto bg-white">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center text-gray-900">
            RESTORATION PROCESS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Battery Compartment",
                text: "Meticulous restoration of front and rear battery compartments to ensure optimal performance and safety.",
                src: "/2.webp",
              },
              {
                title: "Suspension System",
                text: "Comprehensive overhaul of the suspension system for a smooth and comfortable ride.",
                src: "/18.webp",
              },
              {
                title: "Roof Restoration",
                text: "Careful restoration of the roof structure and materials to maintain the vehicle’s classic aesthetics.",
                src: "/11.webp",
              },
              {
                title: "Interior Crafting",
                text: "Exquisite craftsmanship in restoring and upgrading the interior for modern luxury and comfort.",
                src: "/15.webp",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="object-cover absolute w-full h-full left-0 top-0 transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <h3 className="text-xl sm:text-2xl font-light mb-1 sm:mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 line-clamp-3">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section
        id="trailer"
        className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-gray-300"
      >
        <section className="max-w-7xl mx-auto">
          <div className="bg-white px-8 md:px-16 lg:px-24 py-24 rounded-lg shadow-md">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-16">
              <div className="mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-truck text-gray-900"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                  <path d="M15 18H9" />
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                  <circle cx="17" cy="18" r="2" />
                  <circle cx="7" cy="18" r="2" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
                CUSTOM TAILORED TRAILER
              </h2>
              <p className="text-gray-600 max-w-2xl">
                A specially designed transport solution that keeps this
                historical masterpiece protected and preserved during transit.
                The custom-built trailer ensures the safety and integrity of the
                vehicle's original components while providing optimal conditions
                for transportation.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Climate-controlled environment",
                "Custom suspension system",
                "Secure mounting points",
                "Easy loading mechanism",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center space-x-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield w-5 h-5 text-gray-900"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                  <p className="text-sm font-light text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <section id="contact" className="px-4 sm:px-8 md:px-16 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto bg-white px-8 md:px-16 py-16 text-center rounded-lg shadow-md">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
            EXCLUSIVE AVAILABILITY
          </h2>
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            A rare opportunity to own a fully restored 1917 Rauch & Lang
            Electric Car. This historical masterpiece is now available for
            private acquisition.
          </p>
          <p className="text-xl font-medium text-gray-800 mb-8">
            <span className="text-gray-500">Starting at</span>{" "}
            <span className="text-green-700">$350,000</span>
          </p>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm text-gray-700 mt-8 mb-12">
            <div>
              <h3 className="font-medium text-gray-900">Contact</h3>
              <p>Hans S. Kammler</p>
              <p>Etihad Towers, Abu Dhabi, UAE</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Phone & Skype</h3>
              <p>
                <a href="tel:+971506088088" className="hover:underline">
                  +971 5060 88088
                </a>
              </p>
              <p>Skype: oeko-k</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Email</h3>
              <p>
                <a
                  href="mailto:vote4solar@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  vote4solar@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:vote4solar@gmail.com"
              className="bg-gray-900 text-white px-6 py-2 text-sm rounded-md hover:bg-gray-700 transition"
            >
              Send Email
            </a>
            <a
              href="tel:+971506088088"
              className="border border-gray-900 text-gray-900 px-6 py-2 text-sm rounded-md hover:bg-gray-900 hover:text-white transition"
            >
              Call Now
            </a>
            <a
              href="skype:oeko-k?chat"
              className="border border-gray-900 text-gray-900 px-6 py-2 text-sm rounded-md hover:bg-gray-900 hover:text-white transition"
            >
              Chat on Skype
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
