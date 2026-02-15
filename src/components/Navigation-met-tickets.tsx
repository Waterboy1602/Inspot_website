import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "figma:asset/827541c5489ac8736a6ba611d18bae13f7e8b70b.png";

export function NavigationMetTickets() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Praktisch", href: "/praktisch" },
    { label: "Programma", href: "/programma" },
    { label: "FAQ", href: "/faq" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="INSPOT" className="h-[148px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-700 hover:text-[#c11720] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://inspot.weticket.io/inspot/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#c11720] text-white rounded-full hover:bg-[#c11720]/90 transition-colors"
            >
              Tickets kopen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
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
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-[#c11720] text-white rounded-full hover:bg-[#c11720]/90 transition-colors text-center"
              >
                Tickets kopen
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
