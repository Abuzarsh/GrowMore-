import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "../assets/img.jpg";

export default function BookMyDemo() {
  return (
    <motion.div
      className="relative w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center bg-white text-gray-800 p-12"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Image Section with Overlay */}
      <motion.div
        className="md:w-1/2 flex justify-center relative mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative rounded-xl overflow-hidden shadow-xl w-[90%] max-w-md">
          <img
            src={Image}
            alt="Demo"
            className="w-full h-auto object-cover transition-transform duration-500 transform hover:scale-105"
          />
          {/* <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-all duration-300"></div> */}
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left max-w-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-6 leading-tight transform hover:text-orange-800 transition duration-300">
          Book Your <span className="text-orange-400">Free Demo</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Step into the world of cutting-edge finance and trading with{" "}
          <span className="font-semibold text-gray-900">Growmore</span>'s
          expertly designed courses. Experience a hands-on demo session to
          explore our unique strategies, tools, and techniques.{" "}
          <span className="text-orange-500 font-semibold">
            Reserve your spot today!
          </span>
        </p>

        {/* Button */}
        <motion.a
          href="https://a.aonelink.in/ANGOne/zExpLa0"
          className="mt-6 px-8 py-4 flex items-center justify-center gap-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCalendarAlt className="text-xl" />
          <span>Book Now</span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
