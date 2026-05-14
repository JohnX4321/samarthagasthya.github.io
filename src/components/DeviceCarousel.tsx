import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Layers, Headphones, Watch } from 'lucide-react';

interface Device {
  name: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const devices: Device[] = [
  {
    name: 'Mobile Phone',
    icon: <Smartphone className="w-16 h-16" />,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    name: 'POS Machine',
    icon: <Zap className="w-16 h-16" />,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    name: 'Kiosk',
    icon: <Layers className="w-16 h-16" />,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    name: 'VR Device',
    icon: <Headphones className="w-16 h-16" />,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-100 dark:bg-pink-900/30',
  },
  {
    name: 'SmartWatch',
    icon: <Watch className="w-16 h-16" />,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
  },
];

export const DeviceCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % devices.length);
    }, 3000); // Change device every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const getRotY = (index: number) => {
    const diff = (index - activeIndex + devices.length) % devices.length;
    if (diff === 0) return 0; // Front
    if (diff === 1 || diff === devices.length - 4) return 90; // Right
    if (diff === 2 || diff === devices.length - 3) return 180; // Back
    if (diff === 3 || diff === devices.length - 2) return -90; // Left
    return -180;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* 3D Carousel Container */}
      <div className="relative perspective w-full h-72 flex items-center justify-center">
        <div
          style={{
            perspective: '1200px',
            transformStyle: 'preserve-3d',
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Device Items in 3D Space */}
          {devices.map((device, index) => {
            const isActive = index === activeIndex;
            const rotY = getRotY(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isActive ? 1 : 0.3,
                  rotateY: rotY,
                  z: isActive ? 0 : -200,
                }}
                transition={{
                  duration: 0.8,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                }}
                className="w-48 h-64"
              >
                <motion.div
                  className={`w-full h-full rounded-3xl p-8 flex flex-col items-center justify-center gap-4 shadow-2xl ${device.bgColor} border-2 border-gradient-to-r ${device.color}`}
                  whileHover={isActive ? { scale: 1.05 } : {}}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    animate={isActive ? { y: [0, -10, 0], rotate: [0, 5, 0] } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className={`bg-gradient-to-br ${device.color} p-6 rounded-2xl text-white`}
                  >
                    {device.icon}
                  </motion.div>
                  <h3 className="text-center font-bold text-gray-900 dark:text-white text-sm">
                    {device.name}
                  </h3>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-2 justify-center">
        {devices.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            animate={{
              scale: index === activeIndex ? 1.2 : 1,
              opacity: index === activeIndex ? 1 : 0.5,
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex
                ? 'bg-gradient-to-r from-blue-500 to-accent-600'
                : 'bg-gray-400 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Device Label */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-widest">
          Platforms Developed
        </p>
        <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-accent-600 bg-clip-text text-transparent">
          {devices[activeIndex].name}
        </p>
      </motion.div>
    </div>
  );
};
