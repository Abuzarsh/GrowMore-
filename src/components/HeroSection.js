// import React from "react";
// import { motion } from "framer-motion"; // Install Framer Motion via `npm install framer-motion`
// import video from "../assets/Intro.mp4"; // Replace with your video file path

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-[70vh]">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src={video}
//         type="video/mp4"
//         autoPlay
//         muted
//         loop
//       />

//       {/* Content Overlay */}
//       {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>  */}

//       {/* Hero Content */}
//       <div className="relative z-10 flex items-center justify-start px-10 w-full h-full text-left text-white">
//         <div>
//           {/* Header Animation */}
//           <motion.h1
//             className="text-3xl sm:text-5xl font-bold mb-4 text-orange-400"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Welcome to <span className="text-white">GrowMore</span>, <br />
//             Your Gateway to Financial Success
//           </motion.h1>

//           {/* Sub-header Animation */}
//           <motion.p
//             className="text-lg mb-6 text-white"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             <span className="font-medium">
//               "Master the art of trading and investment"
//             </span>
//             <br />
//             with courses crafted for both beginners and professionals.
//           </motion.p>

//           {/* Button Animation */}
//           <motion.a
//             href="#services"
//             className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-full text-white hover:from-yellow-500 hover:to-orange-600 transition"
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.5, delay: 1 }}
//           >
//             Explore Services
//           </motion.a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { motion } from "framer-motion";
import video from "../assets/Intro.mp4";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        type="video/mp4"
        autoPlay
        muted
        loop
      />
      <div className="absolute bottom-5 left-0 w-full px-10 text-center bg-black bg-opacity-25 text-white z-10">
        <div>
          <motion.h3
            className="text-3xl sm:text-5xl font-bold mb-4 text-orange-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to <span className="text-white">GrowMore</span>, <br />
            Your Gateway to Financial Success
          </motion.h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
