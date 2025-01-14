"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type Feature = {
  title: string;
  description?: string;
  badge?: string;
  color?: string;
  highlight?: boolean;
};

type ProgressLineProps = {
  activeIndex: number;
  totalItems: number;
  color?: string;
  backgroundColor?: string;
};

type FeatureBadgeProps = {
  text: string;
  isVisible: boolean;
  className?: string;
};

type FeatureItemProps = {
  feature: Feature;
  index: number;
  isActive: boolean;
  onHover: (index: number) => void;
};

const ProgressLine = ({
  activeIndex,
  totalItems,
  color = "bg-emerald-400",
  backgroundColor = "bg-gray-100",
}: ProgressLineProps) => (
  <div className="absolute left-8 top-0 bottom-0 w-0.5">
    <div className={`absolute inset-0 bottom-12 ${backgroundColor}`} />
    <motion.div
      className={`absolute -left-[0.8px] w-1 rounded-full bg-primary`}
      initial={{ height: "20%", top: 0 }}
      animate={{
        height: "20%",
        top: `${activeIndex * 18}%`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  </div>
);

const FeatureBadge = ({
  text,
  isVisible,
  className = "",
}: FeatureBadgeProps) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{
      opacity: isVisible ? 1 : 0,
      scale: isVisible ? 1 : 0.9,
    }}
    className={`inline-block px-4 py-1 rounded-full bg-primary text-white text-sm font-medium ${className}`}
  >
    {text}
  </motion.span>
);

const FeatureItem = ({
  feature,
  index,
  isActive,
  onHover,
}: FeatureItemProps) => (
  <motion.div
    className="relative transition-all duration-300"
    onHoverStart={() => onHover(index)}
    onFocus={() => onHover(index)}
    initial={{ opacity: 0, x: -20 }}
    animate={{
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.1 },
    }}
  >
    <motion.div
      className={`pl-6 sm:pl-10 transition-colors ${
        feature.color || "text-gray-300"
      }`}
      animate={{
        opacity: isActive ? 1 : 0.5,
      }}
    >
      <h3
        className={`text-3xl sm:text-4xl md:text-5xl font-crimson ${
          isActive ? "font-medium" : "font-normal"
        }`}
      >
        {feature.title}
      </h3>

      {feature.description && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isActive ? 1 : 0,
            height: isActive ? "auto" : 0,
          }}
          className="text-lg sm:text-xl md:text-2xl mt-1 leading-tight font-crimson"
        >
          {feature.description}
        </motion.p>
      )}

      {feature.badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.9,
          }}
          className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 mt-2 rounded-full bg-emerald-400 text-[#002334] text-base sm:text-lg font-medium"
        >
          {feature.badge}
        </motion.span>
      )}
    </motion.div>
  </motion.div>
);
const FeaturesList = ({
  features,
  defaultActiveIndex = 0,
  progressColor = "bg-emerald-400",
  progressBackground = "bg-gray-100",
}: {
  features: Feature[];
  defaultActiveIndex?: number;
  progressColor?: string;
  progressBackground?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(defaultActiveIndex);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative px-8">
        <ProgressLine
          activeIndex={hoveredIndex}
          totalItems={features.length}
          color={progressColor}
          backgroundColor={progressBackground}
        />

        <div className="space-y-8">
          {features.map((feature, index) => (
            <FeatureItem
              key={feature.title}
              feature={feature}
              index={index}
              isActive={hoveredIndex === index}
              onHover={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export {
  FeaturesList,
  FeatureItem,
  FeatureBadge,
  ProgressLine,
  type Feature,
  type ProgressLineProps,
  type FeatureBadgeProps,
  type FeatureItemProps,
};
