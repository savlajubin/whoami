'use client';

import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  CodeBracketIcon,
  UserCircleIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <span>{label}</span>
  </motion.a>
);

export const Contact: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
      <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
        <ContactLink
          href="mailto:savlajubin@gmail.com"
          icon={<EnvelopeIcon className="w-6 h-6" />}
          label="savlajubin@gmail.com"
        />
        <ContactLink
          href="tel:+61478525547"
          icon={<ChatBubbleBottomCenterTextIcon className="w-6 h-6" />}
          label="+61 478 525 547"
        />
        <ContactLink
          href="https://linkedin.com/in/savlajubin"
          icon={<UserCircleIcon className="w-6 h-6" />}
          label="LinkedIn"
        />
        <ContactLink
          href="https://github.com/savlajubin"
          icon={<CodeBracketIcon className="w-6 h-6" />}
          label="Github"
        />
      </div>
    </section>
  );
};