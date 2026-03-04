import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "API REST Node.js",
    description: "API RESTful construída com Node.js e Express, seguindo o padrão MVC com conexão a banco de dados MySQL.",
    tech: ["Node.js", "Express", "MySQL", "REST"],
    github: "https://github.com/Kathillen",
  },
  {
    name: "CRUD com Express",
    description: "Aplicação CRUD completa com rotas, controllers e models para gerenciamento de dados.",
    tech: ["JavaScript", "Express", "MVC"],
    github: "https://github.com/Kathillen",
  },
  {
    name: "Análise de Dados com Python",
    description: "Projeto de análise exploratória de dados utilizando Pandas e Jupyter Notebook.",
    tech: ["Python", "Pandas", "Jupyter"],
    github: "https://github.com/Kathillen",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-20 md:py-32">
      <div className="container px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <FolderGit2 className="text-primary" size={20} />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Projetos
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group border border-border bg-card/40 rounded-sm p-6 hover:border-primary/50 hover:glow-red transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <FolderGit2 size={20} className="text-primary" />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-primary/70 bg-primary/5 px-2 py-1 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://github.com/Kathillen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary font-mono transition-colors"
            >
              <Github size={16} />
              Ver mais no GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
