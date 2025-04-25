// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";
// import logo from "../assets/GrowMore.png";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-[#EA580C] to-[#ffdd8e] text-white py-8">
//       <div className="container mx-auto px-6 md:px-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//           {/* Logo and Description */}
//           <div>
//             <img
//               src={logo}
//               alt="GrowMore Logo"
//               className="h-14 mx-auto md:mx-0 hover:scale-105 transition-transform duration-300 ease-in-out"
//             />
//             <p className="mt-4 text-sm md:text-base">
//               Empowering you with financial knowledge for a successful future.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {["Home", "Begin your master journey", "About", "Contact"].map(
//                 (item) => (
//                   <li key={item}>
//                     <a
//                       href={`#${item.toLowerCase()}`}
//                       className="hover:text-gray-300 transition-colors duration-300 ease-in-out hover:underline"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           {/* Contact & Social Media */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//             <p className="text-sm md:text-base">
//               Email: Growmorefinanceeducation@gmail.com
//             </p>
//             <p className="text-sm md:text-base mb-4">Phone: +91 9082904700</p>
//             <div className="flex justify-center md:justify-start space-x-4 text-lg">
//               {[
//                 { icon: FaFacebookF, link: "#" },
//                 { icon: FaTwitter, link: "#" },
//                 { icon: FaLinkedinIn, link: "#" },
//                 { icon: FaInstagram, link: "#" },
//               ].map(({ icon: Icon, link }, index) => (
//                 <a
//                   key={index}
//                   href={link}
//                   className="hover:text-gray-300 transition-colors duration-300 ease-in-out transform hover:scale-110"
//                 >
//                   <Icon />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <p className="text-center text-sm md:text-base text-gray-100 mt-6">
//           &copy; {new Date().getFullYear()} GrowMore. All rights reserved.
//         </p>

//         {/* Development Team */}
//         <div className="flex justify-end mt-4">
//           <p className="text-sm md:text-base text-gray-100">
//             Developed by <span className="font-semibold">Inftechcore</span>
//           </p>
//         </div>
//       </div>

//       {/* Responsive Adjustments */}
//       <style jsx>{`
//         @media (max-width: 768px) {
//           footer {
//             padding: 1.5rem;
//           }
//           .grid {
//             grid-template-columns: 1fr;
//           }
//           img {
//             height: 12rem;
//           }
//           p {
//             font-size: 0.9rem;
//           }
//         }

//         @media (min-width: 769px) {
//           footer {
//             padding: 3rem;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/GrowMore.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Description */}
          <div>
            <img
              src={logo}
              alt="GrowMore Logo"
              className="h-16 mx-auto md:mx-0 hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <p className="mt-4 text-sm md:text-base text-gray-200">
              Empowering you with financial knowledge for a successful future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="relative text-gray-100 hover:text-[#FFD700] transition-colors duration-300 ease-in-out 
                    before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#FFD700] 
                    before:transition-all before:duration-300 hover:before:w-full"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <p className="text-sm md:text-base text-gray-200">
              Email:{" "}
              <span className="text-[#FFD700]">
                Growmorefinanceeducation@gmail.com
              </span>
            </p>
            <p className="text-sm md:text-base text-gray-200 mb-4">
              Phone: <span className="text-[#FFD700]">+91 9082904700</span>
            </p>
            <div className="flex justify-center md:justify-start space-x-4 text-xl">
              {[
                { icon: FaFacebookF, link: "#" },
                { icon: FaTwitter, link: "#" },
                { icon: FaLinkedinIn, link: "#" },
                { icon: FaInstagram, link: "#" },
              ].map(({ icon: Icon, link }, index) => (
                <Link
                  to={link}
                  className="p-2 bg-white text-orange-500 rounded-full shadow-lg
                  hover:shadow-[#FFD700] transition-all duration-300 ease-in-out
                  hover:scale-110"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 opacity-20 my-6"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm md:text-base text-gray-100">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#FFD700]">GrowMore</span>. All
            rights reserved.
          </p>

          <p className="text-sm md:text-base text-gray-100 mt-3 md:mt-0">
            Developed by{" "}
            <span className="font-semibold text-[#FFD700]">
              Inftechcore Solutions
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
