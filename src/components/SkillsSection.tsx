import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Monitor, BarChart3, Cloud, Wrench, Database } from "lucide-react";

const categories = [
  {
    icon: Server,
    title: "Backend & APIs",
    skills: ["Java", "Spring Boot", "Spring Security", "C#", ".NET Core 6+", "ASP.NET", "Node.js", "Express", "API REST", "GraphQL", "Microservices", "CQRS", "Event Sourcing"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "Helm", "CI/CD (Azure DevOps, Jenkins, GitLab)", "Azure (AD, AKS, App Services)", "Monitoring (Application Insights)", "Automatisation & IaC"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Data Analysis & Visualization", "Machine Learning", "ETL", "Data Pipeline"],
  },
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["React", "TypeScript", "Redux", "Angular", "Vue.js", "HTML5", "CSS3", "Bootstrap", "React Native", "Responsive Design"],
  },
  {
    icon: Database,
    title: "Bases de données",
    skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Redis", "Optimisation de requêtes", "Normalisation & Indexation", "Migration de données"],
  },
  {
    icon: Wrench,
    title: "Méthodologies & Outils",
    skills: ["Linux", "Agile (Scrum, Kanban)", "Tests unitaires", "Git", "SonarQube", "Swagger", "BPMN", "Clean Code", "IA générative (Claude, Copilot)"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* <p className="text-primary font-mono text-sm mb-2 tracking-wider">// Stack technique complète</p> */}
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Compétences & Expertise</h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl">
            Expertise polyvalente en développement backend/frontend, DevOps, Data et Cloud
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card p-6 hover:glow transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <cat.icon className="text-primary" size={20} />
                <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
