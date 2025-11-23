// import { User } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export default function Hero() {
  const heroRef = useRevealOnScroll();

  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center justify-center py-20"
    >
      <div className="text-center reveal" ref={heroRef}>
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
            {/* <User className="w-20 h-20 text-white dark:text-gray-300" /> */}
            <img
              src="/images/pfp.png"
              alt="Profile Photo"
              className="w-32 h-32"
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Glaxin</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
          A passionate developer creating elegant solutions to complex problems.
          Welcome to my digital space where creativity meets functionality and
          innovation.
        </p>
      </div>
    </section>
  );
}
