import { motion } from "framer-motion";
import { Download, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/GlassCard";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

import profilePhoto from "@/assets/profile-photo.jpeg";
import soleLiftingLogo from "@/assets/sole-lifting-logo.png";
import soleLifting1 from "@/assets/sole-lifting-1.jpeg";
import soleLifting2 from "@/assets/sole-lifting-2.jpeg";
import soleLifting3 from "@/assets/sole-lifting-3.jpeg";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <LanguageSelector />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <img
              src={profilePhoto}
              alt="Gonçalo Marques"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-card-border shadow-glow"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg text-foreground mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            {t.hero.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="gap-2 shadow-glow">
              <a href="/CV_Goncalo_Marques.pdf" download>
                <Download className="w-5 h-5" />
                {t.hero.downloadCV}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="#contact">
                <Mail className="w-5 h-5" />
                {t.hero.contact}
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            {t.about.title}
          </motion.h2>

          <GlassCard className="p-8 md:p-12">
            <p className="text-lg leading-relaxed mb-6">{t.about.text1}</p>
            <p className="text-lg leading-relaxed">{t.about.text2}</p>
          </GlassCard>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            {t.experience.title}
          </motion.h2>

          <div className="space-y-12">
            {/* Sole Lifting Club */}
            <GlassCard className="p-8 md:p-12" delay={0.1}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-bold">{t.experience.soleLifting.role}</h3>
                    <img src={soleLiftingLogo} alt="Sole Lifting Club" className="h-8 w-auto" />
                  </div>
                  <p className="text-lg text-muted-foreground mb-1">{t.experience.soleLifting.company}</p>
                  <p className="text-sm text-muted-foreground">{t.experience.soleLifting.location}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2 md:mt-0">{t.experience.soleLifting.dates}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {t.experience.soleLifting.description.map((item, idx) => (
                  <li key={idx} className="flex">
                    <span className="mr-3 text-primary">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[soleLifting1, soleLifting2, soleLifting3].map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-xl overflow-hidden border-2 border-card-border shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300"
                  >
                    <img src={img} alt={`Sole Lifting ${idx + 1}`} className="w-full h-64 object-cover" />
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            {/* AIESEC */}
            <GlassCard className="p-8 md:p-12" delay={0.2}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t.experience.aiesec.role}</h3>
                  <p className="text-lg text-muted-foreground mb-1">{t.experience.aiesec.company}</p>
                  <p className="text-sm text-muted-foreground">{t.experience.aiesec.location}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2 md:mt-0">{t.experience.aiesec.dates}</p>
              </div>

              <ul className="space-y-3">
                {t.experience.aiesec.description.map((item, idx) => (
                  <li key={idx} className="flex">
                    <span className="mr-3 text-primary">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            {t.projects.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[t.projects.weeel, t.projects.systems3d, t.projects.bambu].map((project, idx) => (
              <GlassCard key={idx} className="p-8" delay={idx * 0.1}>
                <h3 className="text-xl font-bold mb-4">{project.name}</h3>
                <p className="leading-relaxed">{project.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            {t.education.title}
          </motion.h2>

          <div className="space-y-8">
            {[t.education.uc3m, t.education.fep, t.education.kedge].map((edu, idx) => (
              <GlassCard key={idx} className="p-8 md:p-12" delay={idx * 0.1}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
                    <p className="text-lg text-muted-foreground mb-1">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 md:mt-0">{edu.dates}</p>
                </div>
                <p className="leading-relaxed">{edu.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            {t.skills.title}
          </motion.h2>

          <GlassCard className="p-8 md:p-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Business & Analytical</h3>
                <div className="flex flex-wrap gap-3">
                  {t.skills.business.split(", ").map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-sm px-4 py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Technical</h3>
                <div className="flex flex-wrap gap-3">
                  {t.skills.technical.split(", ").map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-sm px-4 py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {t.skills.languages.split(", ").map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-sm px-4 py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-20 px-4">
        <div className="container max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            {t.interests.title}
          </motion.h2>

          <GlassCard className="p-8 md:p-12">
            <p className="text-lg leading-relaxed">{t.interests.text}</p>
          </GlassCard>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="container max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            {t.achievements.title}
          </motion.h2>

          <GlassCard className="p-8 md:p-12">
            <ul className="space-y-4">
              {t.achievements.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-3 text-primary text-xl">✓</span>
                  <span className="text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            {t.contact.title}
          </motion.h2>

          <GlassCard className="p-8 md:p-12">
            <p className="text-lg leading-relaxed mb-8">{t.contact.intro}</p>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t.contact.email}</p>
                <a
                  href="mailto:goncalo.marques003@gmail.com"
                  className="text-lg text-primary hover:underline"
                >
                  goncalo.marques003@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">{t.contact.phonePortugal}</p>
                <a href="tel:+351933271987" className="text-lg hover:text-primary transition-colors">
                  +351 933 271 987
                </a>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">{t.contact.phoneSpain}</p>
                <a href="tel:+34677642199" className="text-lg hover:text-primary transition-colors">
                  +34 677 642 199
                </a>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">{t.contact.linkedin}</p>
                <Button asChild variant="outline" className="gap-2 mt-2">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>

            <p className="text-center text-muted-foreground mt-8 pt-8 border-t border-card-border">
              {t.contact.footer}
            </p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Index;
