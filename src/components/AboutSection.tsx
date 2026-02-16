import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, TrendingUp, Brain, Target } from "lucide-react";

const pillars = [
  { icon: Target, title: "Résolution de problèmes", desc: "Approche méthodique pour décomposer et résoudre les défis techniques complexes." },
  { icon: TrendingUp, title: "Impact business", desc: "Chaque ligne de code est orientée vers la création de valeur mesurable." },
  { icon: Brain, title: "Capacité analytique", desc: "Expertise data pour transformer les données brutes en insights actionnables." },
  { icon: Zap, title: "Performance", desc: "Optimisation continue des systèmes pour une scalabilité et fiabilité maximales." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">À PROPOS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ingénieur orienté résultats
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-16">
            Diplômé en Management des Systèmes d'Information, je combine expertise technique fullstack et vision analytique data pour concevoir des solutions logicielles à fort impact. 3+ ans d'expérience en développement .NET, Java, Python, DevOps et Data Science — toujours avec un objectif : livrer de la valeur, rapidement et durablement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="glass-card p-6 group hover:glow transition-all duration-500"
            >
              <pillar.icon className="text-primary mb-4" size={24} />
              <h3 className="font-display font-semibold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
