import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32">
      <div className="container px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="text-primary" size={20} />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Sobre <span className="text-primary">mim</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="border border-border bg-card/30 rounded-sm p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground font-mono">
              <span className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="w-3 h-3 rounded-full bg-muted" />
              <span className="w-3 h-3 rounded-full bg-muted" />
              <span className="ml-2">sobre.md</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Sou estudante de programação com foco em{" "}
              <span className="text-primary font-semibold">Backend</span> e atualmente
              trabalho como Jovem Aprendiz na área administrativa. Tenho experiência com{" "}
              <span className="text-primary font-semibold">JavaScript</span> e estou em
              constante evolução, sempre buscando aprender novas tecnologias e melhorar
              minhas habilidades. Meu objetivo é crescer como desenvolvedor, contribuir em
              projetos reais e agregar valor à equipe.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
