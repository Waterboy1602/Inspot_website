import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logo from "figma:asset/827541c5489ac8736a6ba611d18bae13f7e8b70b.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t('nav.praktisch'), href: "/praktisch" },
    { label: t('nav.bedrijven'), href: "/voor-bedrijven" },
    { label: t('nav.faq'), href: "/faq" },
    { label: t('nav.overOns'), href: "/over-ons" },
    { label: t('nav.sponsors'), href: "/sponsors" },
    { label: t('nav.contact'), href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="InSpot" className="h-[148px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-700 hover:text-[#c11720] transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center bg-gray-100 rounded-full p-1 ml-2">
              <button
                onClick={() => setLanguage('nl')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                  language === 'nl' ? "bg-[#c11720] text-white" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                NL
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                  language === 'en' ? "bg-[#c11720] text-white" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                EN
              </button>
            </div>

            <a 
              href="https://inspot.weticket.io/inspot/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c11720] text-white px-5 py-2 rounded-full font-medium hover:bg-[#a1131a] transition-colors whitespace-nowrap ml-2"
            >
              {t('nav.buyTickets')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <div className="flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                className="p-1 text-gray-700 flex items-center gap-1 text-sm font-bold uppercase"
              >
                <Globe className="size-4" />
                {language}
              </button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-[#c11720] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a 
                href="https://inspot.weticket.io/inspot/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c11720] text-white px-5 py-3 rounded-full font-medium hover:bg-[#a1131a] transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.buyTickets')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
