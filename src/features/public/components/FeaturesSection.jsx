import React from "react";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Everything You Need to Run Your Business
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Our feature-rich dashboard provides all the tools necessary for
            modern invoice and voucher management.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
              <svg
                className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Product Management
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Easily track your inventory, update prices, and manage product
              details in one centralized place.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
              <svg
                className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Sale System
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Process transactions quickly and efficiently with our intuitive
              sale interface designed for speed.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
              <svg
                className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 2V4H7v2h6zm-4 8H7v2h6v-2H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Voucher Generation
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Create professional PDF vouchers for every sale, ready for
              printing or digital sharing with customers.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
              <svg
                className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Real-time Dashboard
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Get a high-level overview of your business metrics and sales
              performance at a glance with live updates.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
              <svg
                className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Secure Authentication
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Keep your business data safe with robust user authentication and
              secure session management.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
              <svg
                className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Modular Architecture
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Built with a feature-based structure for high maintainability,
              scalability, and easy future updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
