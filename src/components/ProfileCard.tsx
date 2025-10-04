'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CodeBracketIcon, CloudIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { useTheme } from './ThemeProvider';

interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
}

interface HighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Highlight: React.FC<HighlightProps> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0">
      <div className="p-2 bg-primary/10 rounded-lg">
        {icon}
      </div>
    </div>
    <div>
      <h4 className="font-semibold text-primary dark:text-primary/90">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

export const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, bio }) => {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    setIsDark(
      theme === 'dark' || 
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const highlights = [
    {
      icon: <CodeBracketIcon className="w-5 h-5 text-primary" />,
      title: "Full-Stack Expert",
      description: "12+ years building enterprise solutions with React, Java Spring Boot, and AWS"
    },
    {
      icon: <LightBulbIcon className="w-5 h-5 text-primary" />,
      title: "AI Innovation",
      description: "Pioneering AI-augmented engineering with Amazon Q and RAG/DSPy"
    },
    {
      icon: <CloudIcon className="w-5 h-5 text-primary" />,
      title: "Cloud Architecture",
      description: "Extensive experience with AWS, Kubernetes, and modern DevOps practices"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-card rounded-xl shadow-xl overflow-hidden"
    >
      <div className="relative mt-6 mx-6 h-48 w-full overflow-hidden">
        <div className="relative inset-0 bg-gradient-to-b from-accent-1/40 via-accent-2/20 to-card backdrop-blur-[2px]" />
        <Image
          src={isDark ? "./profile-dark.png" : "./profile-light.png"}
          alt={name}
          width={400}
          height={400}
          className="relative w-auto h-48 object-contain object-left mix-blend-normal z-10"
          priority
        />
      </div>
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
            {name}
          </h2>
          <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-4">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{bio}</p>
          
          <div className="space-y-4 mt-6 border-t pt-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Highlight {...highlight} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};