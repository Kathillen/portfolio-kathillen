import { motion } from "framer-motion";
import { Github, GitCommit, Star, GitFork } from "lucide-react";

const stats = [
  { icon: Github, label: "Repositórios", value: "10+" },
  { icon: GitCommit, label: "Commits", value: "100+" },
  { icon: Star, label: "Linguagem principal", value: "JavaScript" },
  { icon: GitFork, label: "Contribuições", value: "Em crescimento" },
];

const GitHubStats = () => {
  return (
    <section className="py-16">
      <div className="container px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="text-center border border-border bg-card/30 rounded-sm p-5 hover:border-primary/30 transition-colors"
            >
              <stat.icon size={20} className="text-primary mx-auto mb-3" />
              <p className="font-display font-bold text-lg text-foreground">{stat.value}</p>
              <p className="text-[10px] font-mono text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
