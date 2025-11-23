import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export default function About() {
  const aboutRef = useRevealOnScroll();

  return (
    <section id="about" className="py-20 reveal" ref={aboutRef}>
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center max-w-2xl mx-auto">
        I'm a developer with a passion for building beautiful and functional web
        applications. With years of experience in modern web technologies, I
        specialize in creating seamless user experiences and writing clean,
        maintainable code. When I'm not coding, you can find me exploring new
        technologies, contributing to open-source projects, or sharing my
        knowledge with the developer community.
      </p>
    </section>
  );
}
