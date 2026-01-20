import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';



const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      {/* Top Banner - Slimmer and more minimalist */}
      <div className="bg-luxury-black text-luxury-cream/80 py-2 px-5 flex justify-center items-center text-[11px] uppercase tracking-widest relative border-b border-white/5">
        <p className="m-0">
          Curated Excellence - Free Global Express Shipping on All Orders
        </p>
        <div className="absolute right-5 flex gap-4 opacity-70 hover:opacity-100 transition-opacity">
          <span className="cursor-pointer">USD</span>
          <span className="cursor-pointer">EN</span>
        </div>
      </div>


      {/* Main Header - Glassmorphism */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm' : 'py-6 bg-white border-b border-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center gap-10">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tighter text-luxury-black no-underline">EXCLUSIVE</Link>

          <nav className="hidden md:flex gap-10 items-center">
            <Link
              to="/"
              className={`text-luxury-black no-underline text-sm uppercase tracking-widest transition-all relative hover:text-luxury-gold ${pathname === '/' ? 'text-luxury-gold' : ''}`}
            >
              Home
              {pathname === '/' && <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-luxury-gold animate-in fade-in slide-in-from-left-1" />}
            </Link>
            <Link
              to="/contact"
              className={`text-luxury-black no-underline text-sm uppercase tracking-widest transition-all relative hover:text-luxury-gold ${pathname === '/contact' ? 'text-luxury-gold' : ''}`}
            >
              Contact
              {pathname === '/contact' && <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-luxury-gold animate-in fade-in slide-in-from-left-1" />}
            </Link>
            <Link
              to="/about"
              className={`text-luxury-black no-underline text-sm uppercase tracking-widest transition-all relative hover:text-luxury-gold ${pathname === '/about' ? 'text-luxury-gold' : ''}`}
            >
              About
              {pathname === '/about' && <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-luxury-gold animate-in fade-in slide-in-from-left-1" />}
            </Link>
            <Link
              to="/signup"
              className={`text-luxury-black no-underline text-sm uppercase tracking-widest transition-all relative hover:text-luxury-gold ${pathname === '/signup' ? 'text-luxury-gold' : ''}`}
            >
              Sign Up
              {pathname === '/signup' && <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-luxury-gold animate-in fade-in slide-in-from-left-1" />}
            </Link>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex relative items-center group">
              <input
                type="text"
                placeholder="Search Collection"
                className="border-b border-gray-200 bg-transparent outline-none text-xs w-[150px] focus:w-[200px] focus:border-luxury-gold transition-all duration-500 py-1 placeholder:text-gray-400 placeholder:uppercase placeholder:tracking-tighter"
              />
              <svg className="absolute right-0 group-hover:text-luxury-gold transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-transparent border-none cursor-pointer relative p-1 text-luxury-black hover:text-luxury-gold transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>

              <button className="bg-transparent border-none cursor-pointer relative p-1 text-luxury-black hover:text-luxury-gold transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="absolute top-0 -right-1 bg-luxury-gold text-white rounded-full w-[16px] h-[16px] flex items-center justify-center text-[9px] font-bold">
                  2
                </span>
              </button>

              <button
                className="md:hidden p-1 text-luxury-black"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {isMenuOpen ? (
                    <path d="M18 6L6 18M6 6l12 12" />
                  ) : (
                    <path d="M4 8h16M4 16h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay - Luxury style */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl transition-all duration-500 ease-in-out border-b border-gray-100 overflow-hidden ${isMenuOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-10 gap-8 items-center justify-center">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`text-luxury-black no-underline text-lg uppercase tracking-widest ${pathname === '/' ? 'text-luxury-gold italic' : ''}`}>Home</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={`text-luxury-black no-underline text-lg uppercase tracking-widest ${pathname === '/contact' ? 'text-luxury-gold italic' : ''}`}>Contact</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`text-luxury-black no-underline text-lg uppercase tracking-widest ${pathname === '/about' ? 'text-luxury-gold italic' : ''}`}>About</Link>
            <Link to="/signup" onClick={() => setIsMenuOpen(false)} className={`text-luxury-black no-underline text-lg uppercase tracking-widest ${pathname === '/signup' ? 'text-luxury-gold italic' : ''}`}>Sign Up</Link>
          </div>
        </div>
      </header>


    </>
  );
};

export default Header;
