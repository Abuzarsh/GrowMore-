import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          <strong className="text-orange-500">GrowMore</strong> is a premier
          online trading education platform designed to empower traders with the
          knowledge, strategies, and confidence to succeed in the financial
          markets. Whether you're a beginner or an experienced trader, our
          expert-led courses help you navigate{" "}
          <span className="text-orange-500 font-semibold">
            stocks, forex, commodities, and cryptocurrencies
          </span>{" "}
          with precision.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="bg-gradient-to-b from-orange-50 to-white shadow-lg border border-orange-300 rounded-xl p-6 flex flex-col items-center text-center"
          >
            <div className="text-4xl text-orange-500 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-orange-700">
              {feature.title}
            </h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-12"
      >
        <h3 className="text-2xl font-semibold text-orange-700">
          Join us and start your trading journey today!
        </h3>
        <p className="text-gray-700 mt-2">
          Take control of your financial future with GrowMore.
        </p>
        <a
          href="https://a.aonelink.in/ANGOne/zExpLa0"
          className="mt-4 inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-lg transition duration-300"
        >
          Explore Courses
        </a>
      </motion.div>
    </section>
  );
};

const features = [
  {
    icon: "📈",
    title: "Expert-Led Courses",
    description:
      "Learn from professional traders with years of market experience.",
  },
  {
    icon: "📊",
    title: "Hands-On Learning",
    description:
      "Practice with real-world case studies and live market sessions.",
  },
  {
    icon: "🎯",
    title: "Comprehensive Strategies",
    description:
      "Master technical analysis, risk management, and trading psychology.",
  },
  {
    icon: "🌎",
    title: "Global Trading Community",
    description:
      "Join a network of traders and get mentorship from professionals.",
  },
  {
    icon: "🕒",
    title: "Flexible Learning",
    description: "Access courses anytime, anywhere, at your own pace.",
  },
  {
    icon: "💡",
    title: "Financial Independence",
    description:
      "Gain the confidence to trade profitably and secure your future.",
  },
];

export default AboutUs;
