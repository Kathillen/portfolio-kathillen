import { motion } from "framer-motion";
import { Github, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">
            {'// hello world'}
          </p>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
            Kathillen Marianny
            <br />
            <span className="text-primary text-glow">Maciel de Sousa</span>
          </h1>
          
          <div className="inline-block border border-border bg-card/50 px-4 py-2 rounded-sm mb-6">
            <span className="text-muted-foreground font-mono text-sm">
              &lt;<span className="text-primary">Backend</span> Developer Júnior /&gt;
            </span>
          </div>
          
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base leading-relaxed mb-10">
            Estudante de programação com foco em backend, desenvolvendo aplicações 
            em Node.js, APIs REST e bancos de dados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-sm glow-red hover:glow-red-strong transition-shadow duration-300"
            >
              Ver Projetos
            </a>
            <a
              href="https://github.com/Kathillen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary/50 text-primary font-mono text-sm font-semibold rounded-sm hover:bg-primary/10 transition-colors duration-300"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
