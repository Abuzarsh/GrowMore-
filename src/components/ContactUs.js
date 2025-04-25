import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/banner-background-with-low-poly_1048-10730.jpg?semt=ais_hybrid')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Contact Details */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-90 text-orange-600 p-6 rounded-lg shadow-2xl w-full md:w-1/2 md:mr-4 mb-6 md:mb-0"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <address className="not-italic mb-4 text-center">
          GROWMORE
          <br />
          unit 105 , marwha complex,
          <br />
          4 marwha east andheri east,
          <br />
          sakinaka ,mumbai 400072
        </address>
        <p className="mb-2 text-center">
          <b>Phone:</b> +91 9082904700
        </p>
        <p className="mb-4 text-center">
          <b>Email:</b>{" "}
          <a
            href="mailto:Growmorefinanceeducation@gmail.com"
            className="text-orange-500 hover:underline"
          >
            Growmorefinanceeducation@gmail.com
          </a>
        </p>
        <div className="flex justify-center space-x-6">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="#"
            className="text-orange-600 hover:text-orange-700 transition duration-300 text-2xl"
          >
            <Facebook size={28} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="#"
            className="text-orange-600 hover:text-orange-700 transition duration-300 text-2xl"
          >
            <Instagram size={28} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="#"
            className="text-orange-600 hover:text-orange-700 transition duration-300 text-2xl"
          >
            <Linkedin size={28} />
          </motion.a>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-orange-50 p-8 rounded-lg shadow-2xl w-full md:w-1/2"
      >
        <h2 className="text-3xl font-bold mb-4 text-orange-600 text-center">
          Get In Touch
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
