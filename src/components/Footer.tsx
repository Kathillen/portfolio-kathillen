const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container px-6 text-center">
        <p className="text-xs text-muted-foreground font-mono">
          &lt;/&gt; Kathillen Marianny Maciel de Sousa © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
