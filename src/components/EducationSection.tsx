import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationItems = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "SENAC",
    period: "2026 – 2028",
    status: "Cursando",
  },
  {
    title: "Curso de Análise de Dados",
    institution: "SENAC",
    period: "2025",
    status: "Concluído",
  },
  {
    title: "Formação autodidata em JavaScript e Node.js",
    institution: "Autodidata",
    period: "Contínuo",
    status: "",
  },
];

const EducationSection = () => {
  return (
    <section id="formacao" className="py-20 md:py-32">
      <div className="container px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-primary" size={20} />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Formação <span className="text-primary">Acadêmica</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-6">
            {educationItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-border bg-card/30 rounded-sm p-6 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                  <span className="text-xs font-mono text-primary">{item.period}</span>
                </div>
                <p className="text-sm text-muted-foreground font-mono">
                  {item.institution}
                  {item.status && (
                    <span className="ml-2 text-primary/70">• {item.status}</span>
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
