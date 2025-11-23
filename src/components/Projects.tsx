import { ExternalLink, Image as ImageIcon } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

interface Project {
  id: number;
  name: string;
  date: string;
  description: string;
  url: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Avon Bot Website",
    date: "June 2025",
    description:
      "A sleek, modern website for Avon Bot, featuring interactive elements, responsive design, and seamless user experience.",
    url: "https://github.com/glaxindev/avon-website",
    image: "/images/avonbot-web.png",
  },
  {
    id: 2,
    name: "Bumblebee Bot Website",
    date: "Feb 2025",
    description:
      "A vibrant and engaging website for Bumblebee Bot, showcasing its features, community, and support resources.",
    url: "https://www.bumblebeebot.xyz/",
    image: "/images/bumblebee-web.png",
  },
  {
    id: 3,
    name: "Arvo Solutions Website",
    date: "Nov 2025",
    description:
      "A professional website for Arvo Solutions, highlighting their services, about us, and contact information.",
    url: "https://www.arvosolutions.pro/",
    image: "/images/arvosolutions-web.png",
  },
  {
    id: 4,
    name: "Discord TS Bot Template",
    date: "July 2025",
    description:
      "An All-in-one Discord.js v14 TypeScript bot template with hybrid commands, MongoDB, and more.",
    url: "https://github.com/glaxindev/discord-ts-template",
    image: "/images/djs-ts-template.png",
  },
];

export default function Projects() {
  const projectsRef = useRevealOnScroll();

  return (
    <section id="projects" className="py-20 reveal" ref={projectsRef}>
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium mb-4">
          My Projects
        </span>
        <h2 className="text-3xl font-bold mb-4 sm:text-5xl">
          Check out my work
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto sm:text-xl">
          I’ve built a range of projects, from basic websites to advanced
          applications. Here are some of my personal favorites.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="reveal border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-gray-900 dark:hover:border-white hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all hover:shadow-lg"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
              {project.image ? (
                <img
                  src={project.image}
                  alt="Project Image"
                  className="aspect-video"
                />
              ) : (
                <ImageIcon className="w-12 h-12 text-gray-400 dark:text-gray-600" />
              )}
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg">{project.name}</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                {project.date}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:scale-110"
              >
                Visit Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
