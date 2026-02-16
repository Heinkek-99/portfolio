const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display font-bold text-sm text-foreground">
        HKD<span className="text-primary">_</span>
      </p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Heidy Kengne. Conçu avec passion.
      </p>
    </div>
  </footer>
);

export default Footer;
