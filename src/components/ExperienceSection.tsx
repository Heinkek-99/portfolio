import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  // {
  //   company: "Fricentric",
  //   role: "Développeur Full Stack (Java Spring Boot / Frontend)",
  //   period: "Oct 2025 — Nov 2025",
  //   location: "Remote, Inde",
  //   highlights: [
  //     "Conception et développement microservices backend Java Spring Boot",
  //     "Frontend interactif augmentant engagement utilisateurs de 25%",
  //     "Optimisation performances : réduction temps réponse de 30% via refactoring",
  //     "Optimisation requêtes SQL et amélioration architecture globale",
  //     "Tests unitaires systématiques et participation revues de code",
  //     "Mentorat technique développeurs juniors",
  //   ],
  //   stack: ["Java", "Spring Boot", "React", "PostgreSQL", "GitHub Copilot"],
  // },
    {
    company: "Face aux Risques SA",
    role: "Ingénieur DevOps",
    period: "Sept 2024 — Sept 2025",
    location: "France",
    highlights: [
      "Modernisation infrastructure IT avec automatisation déploiements et processus métiers",
      "Mise en place pipelines CI/CD complets pour accélération livraisons",
      "Développement solution ERP architecture microservices",
      "Administration serveurs et optimisation réseau",
      "Monitoring centralisé avec Application Insights",
      "Containerisation applications Docker pour scalabilité",
      "Réduction coûts infrastructure de 35%",
      "Couverture tests >80% (xUnit, NUnit)",
    ],
    stack: [".NET", "Docker", "CI/CD", "Azure DevOps", "Application Insights", "PostgreSQL"],
  },

  {
    company: "Icam",
    role: "Ingénieur Projet R&D — Robotique & IoT",
    period: "Fév 2024 — Juil 2024",
    location: "France",
    highlights: [
      "Intégration bras robotisé 6 axes dans ligne production pédagogique",
      "Programmation robot : Python (contrôle), Arduino (capteurs), OpenCV (vision)",
      "ML détection défauts : TensorFlow, accuracy 92%",
      "Architecture microservices communication IoT (MQTT, Kafka)",
      "Développement jumeau numérique avec RViz simulation 3D temps réel",
    ],
    stack: ["Python", "Arduino", "OpenCV", "Agile", "Office365", "TensorFlow", "MQTT", "Kafka", "ROS"],
  },

  {
    company: "Ucac-Icam",
    role: "Développeur Full Stack / DevOps",
    period: "Fév 2023 — Juin 2023",
    location: "Cameroun",
    highlights: [
      "Architecture DevOps IoT : authentification SSO Azure AD avec Spring Security",
      "Communication inter-serveurs via Apache Kafka (Java ↔ C#)",
      "Containerisation .NET et Java pour Kubernetes",
      "Portail web Angular + Spring Boot avec métriques temps réel",
      "Application mobile React Native monitoring à distance",
      "Infrastructure as Code Terraform (dev/staging/prod)",
    ],
    stack: ["Java", "Spring Boot", ".NET", "Angular", "React Native", "Kafka", "Docker"],
  },
  {
    company: "Société Générale",
    role: "Développeur Full Stack (Node.js / React)",
    period: "Juin 2023 — Jan 2024",
    location: "France",
    highlights: [
      "Développement fullstack architecture microservices Node.js/Express + React/TypeScript",
      "Optimisation performances : réduction temps chargement de 40%",
      "Conception microservices scalables avec MongoDB",
      "Augmentation engagement utilisateurs de 25%",
      "Tests unitaires et d'intégration, revues de code",
    ],
    stack: ["Node.js", "Express", "MongoDB", "React", "TypeScript", "API REST"],
  },
  {
    company: "Orange Cameroun",
    role: "Ingénieur Développeur Logiciel",
    period: "Sept 2022 — Fév 2023",
    location: "Cameroun",
    highlights: [
      "Dématérialisation Design Authority Board : automatisation processus validation",
      "Modélisation BPMN : identification 12 workflows critiques",
      "Architecture CQRS + Event Sourcing pour audit trail",
      "Application web ReactJS + .NET Core architecture hexagonale",
      "Réduction délais traitement de 30%",
    ],
    stack: [".NET Core", "ReactJS", "Azure DevOps", "Kubernetes", "BPMN"],
  },
  {
    company: "SpaceKola",
    role: "Développeur PHP Full Stack",
    period: "Jan 2022 — Juil 2022",
    location: "Cameroun",
    highlights: [
      "Plateforme SMS groupés Laravel + Vue.js",
      "Migration PHP 5 → PHP 8 avec refactoring code legacy",
      "Système queues (Laravel Queues + Redis) traitement asynchrone",
      "Intégration APIs SMS (Twilio, Nexmo) et paiement (Stripe, PayPal)",
      "Scalabilité : support 10K+ utilisateurs simultanés",
    ],
    stack: ["PHP 8", "Laravel", "Vue.js", "MySQL", "Redis"],
  },
  {
    company: "Appie Soft Web Solutions",
    role: "Développeur Backend Java — API & Intégration",
    period: "Jan 2021 — Juin 2021",
    location: "Inde",
    highlights: [
      "Développement API REST robustes Java/Spring Boot pour applications mobiles",
      "Réduction latence de 40% via optimisation architecture",
      "Conception schémas bases MySQL : normalisation 3NF et indexation",
      "Authentification sécurisée Spring Security avec JWT tokens",
      "Tests unitaires JUnit et documentation Swagger",
    ],
    stack: ["Java 8", "Spring Boot", "Spring Security", "MySQL", "JWT", "Swagger"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* <p className="text-primary font-mono text-sm mb-2 tracking-wider"> Parcours </p> */}
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Expériences Professionnelles</h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl">
            4 ans d'expérience diversifiée en développement, Data, DevOps et gestion de projets
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 * i }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-[29px] top-2 w-3 h-3 rounded-full bg-primary hidden md:block" />

                <div className="glass-card p-6 md:p-8 hover:glow transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-2">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground">{exp.company}</h3>
                      <p className="text-primary text-sm font-medium">{exp.role}</p>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground italic mb-4">{exp.location}</p>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
