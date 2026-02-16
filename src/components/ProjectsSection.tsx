import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const filters = ["Tous", "Java / Spring", ".NET / DevOps", "Python / Data", "Full Stack", "C# / .NET"];

const projects = [

  {
    title: "Plateforme Analytics Prédictive",
    category: "Python / Data",
    // description: "Système d'analyse prédictive avec Machine Learning pour optimisation des ventes et prévision de la demande.",
    problem: "Prédiction de résultats sportifs à partir de données historiques complexes.",
    solution: "Pipeline ML complet : collecte, feature engineering, modèles prédictifs Scikit-learn.",
    impact: "Modèle performant avec analyse exploratoire approfondie",
    stack: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Jupyter", "Flask"],
    demo: null,
  },
  {
    title: "Telco Customer Analytics",
    category: "Python / Data",
    description: "Analyse approfondie des données télécom : churn prediction, segmentation clients et optimisation des offres commerciales.",
    impact: "Identification clients à risque (churn) avec 82% précision • Segmentation de 100K+ clients en 6 profils types • Recommandations augmentant rétention de 15%",
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter", "SQL", "React.js"],
    demo: "https://telco-analysis.vercel.app/",
  },
    {
    title: "Plateforme E-commerce BDE",
    category: "Java / Spring",
    problem: "Bureau des Étudiants sans outil numérique pour gérer ventes et événements.",
    solution: "Architecture fullstack React + Spring avec paiements Stripe et stocks temps réel.",
    impact: "Gestion complète : catalogue, panier, paiements, notifications live",
    stack: ["React", "Redux", "Spring Boot", "MySQL", "Stripe", "Socket.io"],
    github: "https://github.com/Heinkek-99",
  },
  {
    title: "Plateforme IoT Monitoring",
    category: ".NET / DevOps",
    problem: "Gestion de parc IoT sans authentification centralisée ni monitoring.",
    solution: "SSO Azure AD + microservices Kafka + pipeline CI/CD avec IaC Terraform.",
    impact: "Déploiement multi-env automatisé, monitoring temps réel",
    stack: ["Java", "Spring Boot", ".NET", "Kafka", "Angular", "React Native", "Azure AD"],
    demo: null,
  },
  {
    title: "Système Gestion Scolaire",
    category: "C# / .NET",
    problem: "Gestion scolaire manuelle : suivi élèves, notes, absences non centralisé.",
    solution: "Application C# modulaire avec architecture clean pour gestion complète du cycle scolaire.",
    // description: "Application complète de gestion scolaire : élèves, notes, présences, communication parents-école avec interface desktop moderne.",
    impact: "Centralisation des données, gain de temps administratif",    
    stack: ["C#", ".NET Core", "WPF", "SQL Server", "Entity Framework"],
    demo: null,
  },
    {
    title: "Migration Legacy → Cloud-Native",
    category: "C# / .NET",
    problem: "15 applications legacy .NET Framework freinaient l'innovation et coûtaient cher en infrastructure.",
    solution: "Migration vers .NET 6/7 + containerisation Docker/K8s avec CI/CD automatisé.",
    impact: "Zéro downtime, -35% coûts infra, couverture tests >80%",
    stack: ["C#", ".NET Core", "Docker", "Kubernetes", "Azure DevOps"],
    demo: null,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("Tous");

  const filtered = active === "Tous" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* <p className="text-primary font-mono text-sm mb-2 tracking-wider">// Projets à fort impact</p> */}
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Réalisations Clés</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Projets professionnels et personnels avec impacts mesurables
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              layout
              className="glass-card p-6 md:p-8 hover:glow transition-all duration-500 flex flex-col"
            >
              <span className="text-xs text-primary font-mono mb-3">{project.category}</span>
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">{project.title}</h3>

              <div className="space-y-3 mb-5 flex-1">
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Problème</span>
                  <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Solution</span>
                  <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-primary">Impact</span>
                  <p className="text-sm text-foreground mt-1 font-medium">{project.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {s}
                  </span>
                ))}
              </div>



              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors w-fit font-medium"
                >
                  🚀 Voir la démo
                  <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
