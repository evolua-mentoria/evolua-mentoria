import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", to: "hero" },
    { name: "Sobre", to: "about" },
    { name: "Benefícios", to: "benefits" },
    { name: "Mentoria", to: "solution" },
    { name: "Investimento", to: "investment" },
    { name: "Contato", to: "solution" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg"
          : "bg-background/20 backdrop-blur-sm shadow-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      role="banner"
      aria-label="Navegação principal"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" role="navigation" aria-label="Menu principal">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold font-poppins cursor-pointer text-gradient flex items-center gap-3"
        >
          <img 
            src={`/images/logo.webp?v=${Date.now()}`} 
            alt="Evolua – Mentoria psicológica para concursos" 
            className="h-12 w-auto"
            onError={(e) => {
              // Fallback para texto se a imagem não carregar
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling.style.display = 'block';
            }}
          />
          <span className="text-foreground font-bold text-base">
            EVOLUA<span className="text-accent">–</span> Mentoria psicológica para concursos
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="text-foreground/90 hover:text-primary cursor-pointer transition-colors font-medium text-base px-3 py-2 rounded-lg hover:bg-primary/10"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground/90 hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  className="text-foreground/90 hover:text-primary cursor-pointer transition-colors font-medium py-3 px-4 rounded-lg hover:bg-primary/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
