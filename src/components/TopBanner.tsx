import { Sun, Instagram } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import logoMark from "@/assets/rentalsblanco-1.png";
import wordmark from "@/assets/rentalsblanco-2.png";

export const TopBanner = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/95 via-primary to-primary/95 text-white h-12 md:h-14 px-4 border-b border-primary/30 shadow-lg">
      {/* brillo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-[pulse_4.5s_ease-in-out_infinite]" />

      {/* contenido centrado verticalmente */}
      <div className="container mx-auto h-full flex items-center justify-between relative z-10">
        {/* Izquierda: logo + wordmark */}
        <div className="flex items-center gap-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/30 glow-accent animate-pulse shadow-lg shadow-primary/50">
            <img src={logoMark} alt="Recova Rentals - logo" width={130} height={30} />
          </div>
          <div className="flex items-center leading-none whitespace-nowrap">
            <img src={wordmark} alt="RECOVA RENTALS" width={105} height={50} className="translate-y-[3px] md:translate-y-[4px]" />
          </div>
        </div>

        {/* Derecha: acciones */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full hover:bg-white/20 transition-transform duration-200 hover:scale-110"
            aria-label="Cambiar tema"
            title="Cambiar tema"
          >
            <Sun className="h-4 w-4" />
          </button>
          <a
            href="https://www.instagram.com/recovarentals/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:bg-white/20 transition-transform duration-200 hover:scale-110"
            aria-label="Instagram Recova Rentals"
            title="Instagram Recova Rentals"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
