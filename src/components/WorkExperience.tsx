import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

interface Experience {
  id: number;
  company: string;
  logo: string;
  position: string;
  year: string;
  description: string;
  className?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Fiverr Freelancer",
    logo: "/images/fiverr.png",
    position: "Full Stack Developer",
    year: "April 2024 - Present",
    description:
      "As a freelance Full Stack Developer on Fiverr, I build dynamic, responsive, and high-performing web applications tailored to client needs. I handle both front-end and back-end development, integrating modern technologies to deliver seamless user experiences and scalable digital solutions.",
  },
  {
    id: 2,
    company: "Fluxer Development",
    logo: "/images/fluxer.png",
    position: "Lead Developer",
    year: "June 2025 - Present",
    description:
      "I develop and maintain full-stack applications using React, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver features on schedule. Implementing CI/CD pipelines and automating testing procedures.",
  },
  {
    id: 3,
    company: "Nexora Host Ltd",
    logo: "/images/nexora.png",
    className: "h-10 w-10 rounded-full",
    position: "Cloud Engineer",
    year: "Sep 2024 - May 2025",
    description:
      "I designed, deployed, and managed scalable cloud infrastructure to ensure optimal performance, reliability, and security. My role involved automating deployments, optimizing cloud resources, and supporting DevOps workflows to deliver efficient, high-availability hosting solutions.",
  },
];

export default function WorkExperience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const workRef = useRevealOnScroll();

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 reveal" ref={workRef}>
      <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="space-y-4 max-w-2xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="reveal overflow-hidden transition-all"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <button
              onClick={() => toggleExpand(exp.id)}
              className="w-full p-6 flex items-start gap-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center flex-shrink-0">
                {/* <Building2 className="w-6 h-6 text-gray-600 dark:text-gray-400" /> */}
                <img
                  src={exp.logo}
                  alt="Company Logo"
                  className={
                    exp.className ? exp.className : "w-12 h-12 rounded-full"
                  }
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg">{exp.company}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {exp.position}
                </p>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="text-xs text-gray-500 dark:text-gray-500 sm:text-sm">
                  {exp.year}
                </span>
                {expandedId === exp.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: expandedId === exp.id ? "500px" : "0px",
                opacity: expandedId === exp.id ? 1 : 0,
              }}
            >
              <div className="px-6 pb-6 pl-[88px]">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
