import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const contacts = [
  { icon: Github, label: "GitHub", value: "@Heinkek-99", href: "https://github.com/Heinkek-99" },
  { icon: Linkedin, label: "LinkedIn", value: "heidy-kengne", href: "https://linkedin.com/in/heidy-kengne" },
  { icon: Mail, label: "Email", value: "kengneheidy@yahoo.fr", href: "mailto:kengneheidy@yahoo.fr" },
  { icon: MapPin, label: "Localisation", value: "France", href: null },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* <p className="text-primary font-mono text-sm mb-2 tracking-wider">CONTACT</p> */}
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Travaillons ensemble</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Disponible pour des missions freelance ou un poste CDI. N'hésitez pas à me contacter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          {contacts.map((c) => {
            const Wrapper = c.href ? "a" : "div";
            const wrapperProps = c.href
              ? { href: c.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={c.label}
                {...(wrapperProps as any)}
                className="glass-card p-5 flex items-center gap-4 hover:glow transition-all duration-500 text-left"
              >
                <c.icon className="text-primary shrink-0" size={20} />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</p>
                  <p className="text-sm text-foreground font-medium">{c.value}</p>
                </div>
              </Wrapper>
            );
          })}
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          href="mailto:kengneheidy@yahoo.fr"
          className="inline-block bg-primary text-primary-foreground font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
        >
          Envoyer un email
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
