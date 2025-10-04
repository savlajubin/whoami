'use client';

import { motion } from 'framer-motion';

interface SkillProps {
  category: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillProps> = ({ category, skills }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const skillsets = [
    {
      category: "Core Technologies",
      skills: ["React.js", "Java Spring Boot", "Node.js", "GraphQL", "JavaScript/TypeScript"]
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS", "GCP", "Kubernetes/EKS", "Docker", "Istio"]
    },
    {
      category: "Security & IAM",
      skills: ["ForgeRock IAM", "OAuth2", "JWT", "HashiCorp Vault", "WAF"]
    },
    {
      category: "DevOps & Automation",
      skills: ["GitOps", "CI/CD", "Jenkins", "Checkmarks", "BlackDuck", "Twistlock"]
    },
    {
      category: "AI & Innovation",
      skills: ["Amazon Q", "RAG/DSPy", "AI-Augmented Engineering", "Solution Design"]
    },
    {
      category: "Achievements",
      skills: ["NAB Black-Belt Codility", "GovHack Honorable Mention 2020 & 2023"]
    }
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Skills & Technologies</h2>
      {skillsets.map(skillset => (
        <SkillCategory
          key={skillset.category}
          category={skillset.category}
          skills={skillset.skills}
        />
      ))}
    </section>
  );
};