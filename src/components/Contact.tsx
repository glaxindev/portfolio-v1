import { Mail } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import config from "../../config.ts";

export default function Contact() {
  const contactRef = useRevealOnScroll();

  return (
    <section id="contact" className="py-20 reveal" ref={contactRef}>
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block px-4 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium mb-4">
          Contact Me
        </span>
        <h2 className="text-3xl font-bold mb-4 sm:text-5xl">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 sm:text-xl">
          Want to chat? Just send me an email with your question, and I’ll get
          back to you as soon as I can.
        </p>
        <a
          href={"mailto:" + config.contact.email}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-black dark:hover:bg-gray-100 transition-all hover:shadow-lg hover:scale-105"
        >
          <Mail className="w-5 h-5" />
          Email Me Now
        </a>
      </div>
    </section>
  );
}
