'use client';

import { Terminal } from "@/components/Terminal";
import { ProfileCard } from "@/components/ProfileCard";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-16"
        >
          {/* Hero Section */}
          <div className="grid gap-8 md:grid-cols-2">
            <ProfileCard
              name="Jubin Savla"
              title="Full Stack Developer"
              bio="Passionate about building scalable web applications and solving complex problems with elegant solutions."
            />
            
            <Terminal className="h-full">
              <div className="space-y-4">
                <p>$ whoami</p>
                <p className="pl-4">Jubin Savla | Solution Designer & Senior Engineer</p>
                
                <p>$ cat about.txt</p>
                <div className="pl-4">
                  <p>Seasoned software engineer (12+ years) specializing in:</p>
                  <p>• Full Stack Development (React.js, Java Spring Boot)</p>
                  <p>• AI-Augmented Engineering (Amazon Q, RAG/DSPy)</p>
                  <p>• Cloud & DevOps (AWS, Kubernetes, GitOps)</p>
                  <p>• Security & IAM (ForgeRock, OAuth2, Vault)</p>
                </div>

                <p>$ ls achievements/</p>
                <div className="pl-4">
                  <p>• black-belt-nab-codility/</p>
                  <p>• govhack-honourable-mention-2020/</p>
                  <p>• govhack-honourable-mention-2023/</p>
                </div>

                <p>$ cat strengths.txt</p>
                <div className="pl-4">
                  <p>• Design Thinker</p>
                  <p>• Analytical Problem Solver</p>
                  <p>• Innovation & Ideation</p>
                  <p>• Continuous Learner</p>
                </div>
              </div>
            </Terminal>
          </div>

          {/* Skills Section */}
          <Skills />

          {/* Experience Section */}
          <Experience />

          {/* Contact Section */}
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}