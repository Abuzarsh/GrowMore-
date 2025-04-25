// import React from "react";
// import { FaPlayCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import trading from "../assets/JoinUs2.mp4"; // Make sure this path is correct

// const JoinUsSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-white py-16 px-6 md:px-12">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
//         {/* Left Side: Video Mockup */}
//         <div className="md:w-1/2 relative group">
//           <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
//             <video
//               className="w-full h-full object-cover"
//               src={trading}
//               type="video/mp4"
//               autoPlay
//               muted
//               loop
//             />
//           </div>
//         </div>

//         {/* Right Side: Text & Button */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4 leading-tight">
//             Join Us & Watch <br className="hidden md:block" /> Our Free Lecture
//           </h2>
//           <p className="text-lg md:text-xl text-gray-700 mb-6">
//             Start your journey to financial mastery with expert insights. Enroll
//             now and gain exclusive access to our free lectures!
//           </p>

//           <button
//             onClick={() => navigate("/free-lecture")}
//             className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-3 px-6 rounded-full text-lg font-semibold flex items-center justify-center mx-auto md:mx-0 transition-transform transform hover:scale-105 shadow-xl"
//           >
//             <FaPlayCircle className="mr-2 text-2xl" />
//             Watch Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JoinUsSection;
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import trading from "../assets/JoinUs.mp4"; // Ensure the path is correct

const JoinUsSection = () => {
  const handleRedirect = () => {
    window.location.href = "https://a.aonelink.in/ANGOne/zExpLa0";
  };
  return (
    <section className="bg-white  py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Video Mockup with Overlay */}
        <motion.div
          className="md:w-1/2 relative group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <video
              className="w-full h-full object-cover"
              src={trading}
              type="video/mp4"
              autoPlay
              muted
              loop
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
          </div>
        </motion.div>

        {/* Right Side: Text & Button */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-5 leading-tight">
            Join Us & Watch <br className="hidden md:block" /> Our Free Lecture
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Begin your journey toward financial mastery with exclusive expert
            insights. Enroll today and access our premium free lectures!
          </p>

          <motion.button
            onClick={handleRedirect}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-3 px-8 rounded-full text-lg font-semibold flex items-center justify-center gap-2 mx-auto md:mx-0 transition-transform transform shadow-lg hover:shadow-2xl"
          >
            <FaPlayCircle className="text-2xl" />
            Watch Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUsSection;
