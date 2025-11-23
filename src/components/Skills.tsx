import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const skills = [
  "React.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Tailwind CSS",
  "HTML/CSS",
  "Git",
  "REST APIs",
  "Discord.js",
  "MongoDB",
  "Prisma",
  "Next.js",
  "Express.js",
  "Docker",
  "Figma",
];

export default function Skills() {
  const skillsRef = useRevealOnScroll();

  return (
    <section id="skills" className="py-20 reveal" ref={skillsRef}>
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="reveal px-4 py-2 dark:text-white text-gray-900 text-sm font-medium dark:border-white rounded-xl dark:bg-gray-900 bg-[#f5f5f5] transition-all hover:scale-110"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
