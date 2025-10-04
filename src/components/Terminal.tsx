'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-black/90 rounded-lg overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="p-4 font-mono text-sm text-green-400">
        {children}
      </div>
    </motion.div>
  );
};