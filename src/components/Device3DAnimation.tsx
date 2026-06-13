import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Device3D {
  name: string;
  svgPath: string;
  color: string;
}

const devices3D: Device3D[] = [
  {
    name: 'Mobile Phone',
    svgPath: '/images/projects/smarphone.svg',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'POS Machine',
    svgPath: '/images/projects/pos.svg',
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'Kiosk',
    svgPath: '/images/projects/kiosk.svg',
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'VR Headset',
    svgPath: '/images/projects/vr-headset.svg',
    color: 'from-pink-500 to-pink-600',
  },
  {
    name: 'SmartWatch',
    svgPath: '/images/projects/smartwatch.svg',
    color: 'from-cyan-500 to-cyan-600',
  },
];

export const Device3DAnimation: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % devices3D.length);
    }, 4000); // 4 seconds per device
    return () => clearInterval(interval);
  }, []);

  const currentDevice = devices3D[activeIndex];
  // Scale factor for devices with different aspect ratios
  const isWideDevice = currentDevice.name === 'POS Machine' || currentDevice.name === 'Kiosk';
  const scale = isWideDevice ? 1.3 : 1;

  return (
    <div className="relative h-64 w-48 flex items-center justify-center">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
        exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.img
          src={currentDevice.svgPath}
          alt={currentDevice.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="object-contain opacity-60 dark:opacity-80"
          style={{
            width: `${160 * scale}px`,
            height: `${160 * scale}px`,
            filter: 'brightness(0)',
          }}
        />
      </motion.div>
    </div>
  );
};
