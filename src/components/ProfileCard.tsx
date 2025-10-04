'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, bio }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
    >
      <div className="relative h-48 w-full bg-white">
        <Image
          src="/profile.png"
          alt={name}
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <h3 className="text-lg text-gray-600 dark:text-gray-300 mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{bio}</p>
      </div>
    </motion.div>
  );
};