'use client';

import { motion } from 'framer-motion';

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  duration,
  description
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="mb-8 relative pl-6 border-l-2 border-gray-200 dark:border-gray-700"
    >
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 border-4 border-white dark:border-gray-900" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        {company} • {duration}
      </p>
      <ul className="list-disc list-inside space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-400">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Solution Designer & Senior Engineer",
      company: "National Australia Bank (NAB)",
      duration: "2025 - Present",
      description: [
        "Led design and delivery of strategic data verification solution integrating multiple enterprise systems",
        "Built an internal AI accelerator using Amazon Q for solution designs/code scaffolds and automated PRs",
        "Containerized and deployed services to Kubernetes via enterprise pipelines",
        "Achieved Black-Belt in NAB's Codility test"
      ]
    },
    {
      title: "Lead Engineer",
      company: "ANZ Bank",
      duration: "2019 - 2025",
      description: [
        "Led UI team for Login & Registration modernization to React and early Open Banking initiatives",
        "Implemented OAuth2, JWT token-based authentication, and ForgeRock IAM",
        "Containerized services and deployed to Kubernetes with GitOps CI/CD",
        "Centralized secrets handling with HashiCorp Vault and platform controls"
      ]
    },
    {
      title: "Senior Engineer",
      company: "Suncorp Bank",
      duration: "2018 - 2019",
      description: [
        "Built reusable standalone payment app serving 100+ applications/brands using React and Java",
        "Implemented Jenkins CI/CD to streamline multi-brand releases",
        "Packaged artifacts into AWS containers for consistent runtime",
        "Developed AWS Lambda-based BFF Layer"
      ]
    },
    {
      title: "Software Engineer",
      company: "HSBC",
      duration: "2016 - 2018",
      description: [
        "Contributed to global multi-channel appointment booking system",
        "Implemented CI/CD pipelines for standardized containerized deployments",
        "Demonstrated proactive problem-solving in application design and implementation"
      ]
    }
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};