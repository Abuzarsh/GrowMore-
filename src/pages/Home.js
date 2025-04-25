import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesBenefits from "../components/FeaturesBenefits";
import Statistics from "../components/Statistics";
import RoadToTradingMastery from "../components/RoadToTradingMastery";
import BookMyDemo from "../components/Bookdemo";
import Footer from "../components/Footer";
import JoinUsSection from "../components/JoinUsSection";

export default function Home() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust threshold for when it should hide
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div>
      {!isFooterVisible && <Navbar />}
      <HeroSection />
      <RoadToTradingMastery />
      <JoinUsSection />
      <FeaturesBenefits />
      <Statistics />
      <BookMyDemo />
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
