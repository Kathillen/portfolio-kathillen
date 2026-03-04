import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-card/20">
      <div className="container px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Mail className="text-primary" size={20} />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Contato
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="tel:+5581992966902"
              className="flex items-center gap-4 border border-border bg-card/40 rounded-sm p-5 hover:border-primary/40 transition-colors duration-300 group"
            >
              <Phone size={20} className="text-primary" />
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">Telefone</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">(81) 99296-6902</p>
              </div>
            </a>

            <a
              href="https://github.com/Kathillen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-border bg-card/40 rounded-sm p-5 hover:border-primary/40 transition-colors duration-300 group"
            >
              <Github size={20} className="text-primary" />
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">GitHub</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">github.com/Kathillen</p>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-border bg-card/40 rounded-sm p-5 hover:border-primary/40 transition-colors duration-300 group sm:col-span-2"
            >
              <Linkedin size={20} className="text-primary" />
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">LinkedIn</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">LinkedIn Profile</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
