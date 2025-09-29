import { Sun, Instagram } from 'lucide-react';

export const TopBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary/95 via-primary to-primary/95 text-white py-4 px-4 shadow-lg glow-primary animate-glow-pulse">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side - Logo and Company Name */}
        <div className="flex items-center space-x-6">
          {/* Logo placeholder - you can replace with actual logo */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/30 glow-accent">
            <span className="text-white font-bold text-sm tracking-wide">LOGO</span>
          </div>
          
          {/* Company name - prominente como en la referencia */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-black tracking-wider text-white drop-shadow-lg">
              RECOVA
            </h1>
            <h1 className="text-2xl md:text-3xl font-black tracking-wider text-white drop-shadow-lg ml-2">
              RENTALS
            </h1>
          </div>
        </div>

        {/* Right side - Social icons */}
        <div className="flex items-center space-x-3">
          <button className="hover:bg-white/20 p-2 rounded-full transition-colors duration-300 hover:glow-accent">
            <Sun className="h-4 w-4" />
          </button>
          <button className="hover:bg-white/20 p-2 rounded-full transition-colors duration-300 hover:glow-accent">
            <Instagram className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};