import { motion } from "framer-motion";
import { Code2, Database, GitBranch, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    icon: Code2,
    skills: ["JavaScript", "Node.js", "Express", "API REST", "MVC"],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    skills: ["MySQL"],
  },
  {
    title: "Ferramentas",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Boas práticas de desenvolvimento"],
  },
  {
    title: "Outros",
    icon: Layout,
    skills: ["HTML", "CSS", "Python básico", "Jupyter", "Pandas"],
  },
];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-20 md:py-32 bg-card/20">
      <div className="container px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="text-primary" size={20} />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Habilidades <span className="text-primary">Técnicas</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-border bg-card/40 rounded-sm p-6 hover:border-primary/40 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <cat.icon size={18} className="text-primary" />
                  <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 bg-secondary rounded-sm text-muted-foreground group-hover:text-primary transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
