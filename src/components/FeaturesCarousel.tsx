"use client";

import { motion } from "framer-motion";
import {
  Award,
  Calendar1,
  ThumbsUp,
  LockKeyholeOpen,
  Star,
  UserRoundSearch,
} from "lucide-react";

const FeaturesCarousel = () => {
  return (
    <div className="my-9 bg-[#BFBFFF] h-fit md:h-[88px] py-4 md:py-8 font-figtree overflow-hidden">
      <motion.div
        animate={{ x: [0, -1035] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex"
      >
        {[0, 1].map((_, index) => (
          <ul
            key={index}
            className="font-semibold flex items-center gap-8 md:gap-16 shrink-0"
          >
            <li className="flex items-center gap-2 md:gap-4 whitespace-nowrap">
              <Award size={16} className="text-[#219F63] md:w-6 md:h-6" />
              <span className="text-[#002334] text-xs md:text-base">
                999 services
              </span>
            </li>
            <li className="flex items-center gap-2 md:gap-4 whitespace-nowrap">
              <Calendar1 size={16} className="text-[#219F63] md:w-6 md:h-6" />
              <span className="text-[#002334] text-xs md:text-base">
                Same day visits
              </span>
            </li>
            <li className="flex items-center gap-2 md:gap-4 whitespace-nowrap">
              <ThumbsUp size={16} className="text-[#219F63] md:w-6 md:h-6" />
              <span className="text-[#002334] text-xs md:text-base">
                95% satisfaction
              </span>
            </li>
            <li className="flex items-center gap-2 md:gap-4 whitespace-nowrap">
              <LockKeyholeOpen
                size={16}
                className="text-[#219F63] md:w-6 md:h-6"
              />
              <span className="text-[#002334] text-xs md:text-base">
                No insurance needed
              </span>
            </li>
            <li className="flex items-center gap-2 md:gap-4 whitespace-nowrap">
              <Star size={16} className="text-[#219F63] md:w-6 md:h-6" />
              <span className="text-[#002334] text-xs md:text-base">
                Experienced Specialists
              </span>
            </li>
            <li className="flex items-center gap-2 md:gap-4 whitespace-nowrap mr-4 md:mr-8">
              <UserRoundSearch
                size={16}
                className="text-[#219F63] md:w-6 md:h-6"
              />
              <span className="text-[#002334] text-xs md:text-base">
                Choose your provider
              </span>
            </li>
          </ul>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturesCarousel;
