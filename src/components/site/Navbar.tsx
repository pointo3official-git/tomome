import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#how", label: "Journey" },
  { href: "#why", label: "Why Tomome" },
  { href: "#stories", label: "Stories" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/80 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Tomome logo" className="h-10 w-auto" />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-foreground/80 hover:text-primary transition-smooth"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button variant="hero" size="lg" asChild>
            <a href="#cta">Book Consultation</a>
          </Button>
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <ul className="container flex flex-col gap-4 py-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <Button variant="hero" asChild>
              <a href="#cta">Book Consultation</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;