import { Sun, Instagram } from 'lucide-react';

export const TopBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-white py-3 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side - Logo and Company Name */}
        <div className="flex items-center space-x-4">
          {/* Logo placeholder - you can replace with actual logo */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/30">
            <span className="text-white font-bold text-sm tracking-wide">LOGO</span>
          </div>
          
          {/* Company name */}
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold tracking-wider">
              RECOVA RENTALS
            </h1>
          </div>
        </div>

        {/* Right side - Social icons */}
        <div className="flex items-center space-x-3">
          <button className="hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
            <Sun className="h-4 w-4" />
          </button>
          <button className="hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
            <Instagram className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};