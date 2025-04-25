import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, TrendingUp, Award, Shield } from "lucide-react";

const FeaturesBenefits = () => {
  const ref = useRef(null); // Ref for the section
  const isInView = useInView(ref, { once: true, threshold: 0.2 }); // Detect if section is in view

  const features = [
    {
      id: 1,
      icon: <TrendingUp className="text-orange-500 w-10 h-10" />,
      title: "Expert-Led Courses",
      description:
        "Learn from industry professionals with years of experience in trading and stock market investment.",
    },
    {
      id: 2,
      icon: <Award className="text-yellow-500 w-10 h-10" />,
      title: "Certifications",
      description:
        "Get certified and stand out in your career with recognized credentials.",
    },
    {
      id: 3,
      icon: <Shield className="text-orange-500 w-10 h-10" />,
      title: "Risk Management",
      description:
        "Master the art of risk mitigation to secure your financial future.",
    },
    {
      id: 4,
      icon: <CheckCircle className="text-yellow-500 w-10 h-10" />,
      title: "Lifetime Access",
      description:
        "Access course materials anytime, anywhere with lifetime updates included.",
    },
  ];

  // Framer Motion variants for animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Header */}
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6"
        >
          Why Choose GrowMore?
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-600 mb-12"
        >
          Unlock your financial potential with our cutting-edge courses designed
          for aspiring traders and investors.
        </motion.p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="flex flex-col items-center text-center bg-orange-50 p-6 rounded-2xl shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: index * 0.2 }} // Stagger animations
            >
              {/* Icon */}
              <div className="mb-4">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBenefits;
