import { Home, Github, Instagram, Mail, Sun, Moon } from "lucide-react";
import { createPortal } from "react-dom";
import { useTheme } from "../contexts/ThemeContext";
import Tooltip from "./Tooltip";
import config from "../../config";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return createPortal(
    <nav className="pointer-events-none fixed inset-x-0 bottom-6 z-[100] flex justify-center">
      <div className="pointer-events-auto flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-800 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 group hover:px-8 hover:py-4 hover:shadow-2xl hover:scale-105">
        <Tooltip label="Home">
          <button
            onClick={() => scrollToSection("home")}
            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            aria-label="Home"
          >
            <Home className="w-5 h-5" />
          </button>
        </Tooltip>
        <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 mx-1"></div>
        <Tooltip label="GitHub">
          <a
            href={config.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </Tooltip>
        <Tooltip label="Instagram">
          <a
            href={config.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </Tooltip>
        <Tooltip label="Email">
          <a
            href={`mailto:${config.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </Tooltip>
        <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 mx-1"></div>
        <Tooltip label={theme === "light" ? "Light Mode" : "Dark Mode"}>
          <button
            onClick={toggleTheme}
            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </Tooltip>
      </div>
    </nav>,
    document.body
  );
}
