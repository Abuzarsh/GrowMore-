import React from "react";
import {
  ChevronRight,
  BookOpen,
  TrendingUp,
  BarChart2,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
  {
    icon: BookOpen,
    title: "Fundamentals",
    description: "Master the basics of trading and financial markets",
  },
  {
    icon: TrendingUp,
    title: "Technical Analysis",
    description: "Decode chart patterns and market indicators",
  },
  {
    icon: BarChart2,
    title: "Risk Management",
    description: "Develop strategies to protect and grow your capital",
  },
  {
    icon: Award,
    title: "Advanced Strategies",
    description: "Excel with complex trading techniques",
  },
];

const RoadToTradingMastery = () => {
  return (
    <section className="lg:px-20 md:px-20 px-5 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-orange-600">
          Your Road to Trading Mastery
        </h2>

        {/* Grid for two rows with two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-6"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
              }}
            >
              {/* Icon Container */}
              <div className="lg:w-24 lg:h-24 md:w-24 md:h-24 h-20 w-20 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 flex items-center justify-center shadow-lg">
                <milestone.icon className="lg:w-12 lg:h-12 md:w-12 md:h-12 h-8 w-8 text-white" />
              </div>

              {/* Text Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-orange-600">
                  {milestone.title}
                </h3>
                <p className="text-lg text-gray-700">{milestone.description}</p>
              </div>

              {/* Chevron (Only for first 3 items) */}
              {index < milestones.length && (
                <ChevronRight className="hidden md:block w-8 h-8 text-amber-400" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-16 text-center">
          <a
            href="https://a.aonelink.in/ANGOne/zExpLa0"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold text-lg py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-95 hover:shadow-lg"
          >
            Begin Your Mastery Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoadToTradingMastery;
