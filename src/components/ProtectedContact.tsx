'use client';

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

// This component encrypts the contact info using Base64 to avoid direct exposure
// while still being accessible for legitimate users
const ProtectedContact = () => {
  // Base64 encoded contact details - will be decoded only when user clicks
  const encodedEmail = 'c2F2bGFqdWJpbkBnbWFpbC5jb20='; // Example: replace with your encoded email
  const encodedPhone = 'KzYxNDc4NTI1NTQ3'; // Example: replace with your encoded phone

  const handleEmailClick = () => {
    const email = atob(encodedEmail);
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    const phone = atob(encodedPhone);
    window.location.href = `tel:${phone}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col sm:flex-row gap-4 items-center justify-center"
    >
      <button
        onClick={handleEmailClick}
        className="flex items-center gap-2 px-6 py-3 bg-accent-1 hover:bg-accent-2 text-primary rounded-lg transition-all ring-1 ring-border/5"
      >
        <EnvelopeIcon className="w-5 h-5" />
        <span>Email Me</span>
      </button>
      <button
        onClick={handlePhoneClick}
        className="flex items-center gap-2 px-6 py-3 bg-accent-1 hover:bg-accent-2 text-primary rounded-lg transition-all ring-1 ring-border/5"
      >
        <PhoneIcon className="w-5 h-5" />
        <span>Call Me</span>
      </button>
    </motion.div>
  );
};

export default ProtectedContact;