import { motion } from "framer-motion";
import { FaUsers, FaProjectDiagram, FaComments, FaWallet } from "react-icons/fa";

const achievements = [
  {
    id: 1,
    icon: <FaUsers size={40} />,
    label: "Happy Clients",
    count: "5K+"
  },
  {
    id: 2,
    icon: <FaProjectDiagram size={40} />,
    label: "Projects",
    count: "250+"
  },
  {
    id: 3,
    icon: <FaComments size={40} />,
    label: "Customer Reviews",
    count: "1.2K+"
  },
  {
    id: 4,
    icon: <FaWallet size={40} />,
    label: "Accounts Open",
    count: "3K+"
  },
];

export default function AchievementSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-orange-600 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Achievements
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}

              className="bg-orange-50 shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 border border-orange-200"
            >
              <div className="text-orange-500">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800">{item.count}</h3>
              <p className="text-gray-500">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
