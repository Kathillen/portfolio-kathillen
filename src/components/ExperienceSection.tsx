import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-20 md:py-32 bg-card/20">
      <div className="container px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-primary" size={20} />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Experiência <span className="text-primary">Profissional</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
            <div className="absolute w-4 h-4 rounded-full bg-primary glow-red -left-[9px] top-0" />
            <div className="mb-2">
              <span className="text-xs font-mono text-primary">2025 – Presente</span>
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-1">
              Jovem Aprendiz – Assistente Administrativo
            </h3>
            <p className="text-sm text-muted-foreground font-mono mb-3">SESC</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Apoio em tarefas administrativas, organização de documentos e rotinas de escritório.
              Desenvolvimento de responsabilidade e comunicação, aplicáveis ao trabalho em equipe
              no ambiente de tecnologia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
