import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 mt-auto">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="/"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Invoice App
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          A modern, comprehensive invoice management system built for high
          maintainability and scalability.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              Home
            </a>
          </li>
          <li>
            <a href="/about-us" className="mr-4 hover:underline md:mr-6">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact-us" className="mr-4 hover:underline md:mr-6 ">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/dashboard" className="mr-4 hover:underline md:mr-6">
              Dashboard
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="/" className="hover:underline">
            Invoice App™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
