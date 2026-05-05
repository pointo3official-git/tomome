import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Tomome" className="h-10 w-auto" />
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tomome. Made with care for every mother.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-smooth">Privacy</a>
          <a href="#" className="hover:text-primary transition-smooth">Terms</a>
          <a href="#" className="hover:text-primary transition-smooth">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;