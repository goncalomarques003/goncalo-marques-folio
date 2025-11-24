import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/Section";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { EducationCard } from "@/components/EducationCard";
import { Mail, Phone, Linkedin, Download, Dumbbell, TrendingUp, Heart } from "lucide-react";

const Index = () => {
  const experiences = [
    {
      role: "Co-Founder",
      company: "Sole Lifting Club – Gym Clothing Brand",
      location: "Porto, Portugal",
      dates: "Oct 2023 – Present",
      description: [
        "Conducted market research on the gym clothing industry, analyzing the competitive landscape and consumer trends, and defining a go-to-market strategy in a market dominated by players such as Prozis and Gymshark.",
        "Explored textile manufacturers in northern Portugal to identify the best quality-price partners, gaining practical knowledge about textiles, printing methods, and production processes.",
        "Managed unexpected operational challenges, including supplier delays and website issues, and developed resilience, adaptability, and creative problem-solving under pressure.",
        "Self-taught Adobe Illustrator, Adobe Photoshop, and Shopify to design products, create visual assets, and build the brand's online store and presence.",
      ],
    },
    {
      role: "External Relations Member (iGTa)",
      company: "AIESEC in Portugal",
      location: "Porto, Portugal",
      dates: "Jul 2023 – Jan 2024",
      description: [
        "Helped identify and approach Portuguese companies to develop partnerships that offer international internship opportunities to students and young professionals.",
        "Improved communication and sales skills by booking and conducting calls with potential partners, presenting AIESEC's value proposition, and managing follow-ups.",
        "Learned to balance AIESEC responsibilities with university work, strengthening my time management and prioritization skills.",
        "Worked closely with a diverse team, contributing to AIESEC in Portugal's goal of enabling more than 1000 international internships for students worldwide.",
      ],
    },
  ];

  const projects = [
    {
      name: "Marketing & Operations Consulting Project – Weeel (Frozen Yogurt)",
      description:
        "As part of a university consulting project, my team worked with Weeel, a Portuguese frozen yogurt start-up, to help increase sales and attract new customers in a sustainable way. We analyzed the company's current operations, customer journey, and competitive context, and then proposed a new operational plan to improve efficiency and the in-store experience. We also suggested an expanded market strategy and the introduction of new product ideas to strengthen brand positioning and support long-term growth.",
    },
    {
      name: "3D Systems Corporation – Financial Valuation (Relative & DCF)",
      description:
        "In this project, I contributed to building a comprehensive valuation of 3D Systems Corporation using both Relative Valuation (multiples) and Discounted Cash Flow (DCF) methods. The work involved researching the company and its competitors, forecasting key financials, selecting appropriate peer groups and multiples, and stress-testing assumptions. This experience significantly improved my analytical skills, financial reasoning, and ability to communicate complex results clearly to non-experts.",
    },
    {
      name: "Strategic Consulting Project – Bam.bu Bicycles",
      description:
        "For Bam.bu Bicycles, a Portuguese start-up focusing on bamboo bicycles, my team analyzed the company's strategic challenges, such as a relatively high price point and a very small, niche customer base. We studied potential target segments, value propositions, and channels, and then proposed strategic options to expand the customer base without losing the brand's identity. We collaborated with one of the Co-Founders to discuss the feasibility of each option, define concrete next steps, and propose KPIs to monitor the impact of the chosen strategy.",
    },
  ];

  const education = [
    {
      institution: "Universidad Carlos III de Madrid (UC3M)",
      degree: "MSc in Management – Track in Innovation Management",
      location: "Madrid, Spain",
      dates: "Sep 2025 – Jul 2026",
      description:
        "I am enrolled in the MSc in Management with a specialization in Innovation Management, where I work on case studies and strategic problems with companies across sectors such as retail and technology. The program deepens my understanding of how leading companies design strategy, manage innovation, and make data-driven decisions. Key topics include Strategy, Innovation Management, Entrepreneurship, and Finance.",
    },
    {
      institution: "Faculdade de Economia da Universidade do Porto (FEP)",
      degree: "BSc in Business Administration",
      location: "Porto, Portugal",
      dates: "Sep 2021 – Jun 2025",
      description:
        "During my Bachelor's in Business Administration at FEP, I built a solid foundation in quantitative and analytical skills through courses such as Financial Accounting, Statistics, Quantitative Methods, Macroeconomics, and Corporate Finance. I also worked on several practical projects, including consulting assignments for Weeel (Frozen Yogurt) and Bam.bu Bicycles, as well as a financial valuation of 3D Systems Corporation, which helped me connect theory with real-world business challenges.",
    },
    {
      institution: "Kedge Business School",
      degree: "Summer School – Ethics and Diversity in Management",
      location: "Marseille, France",
      dates: "Jul 2023",
      description:
        "I attended a Summer School focused on Ethics and Diversity in Management, where we discussed real case studies that highlighted the importance of ethical decision-making and inclusive leadership. Working with classmates from different countries and backgrounds improved my cultural awareness, adaptability, and ability to collaborate in international environments.",
    },
  ];

  const businessSkills = [
    "Strategy and Innovation",
    "Market Research and Competitive Analysis",
    "Financial Analysis and Valuation (Relative & DCF)",
    "Consulting-Style Problem Solving",
    "Data-informed Decision Making",
    "Time Management and Prioritization",
    "Team Leadership and Collaboration",
    "Presentation and Communication",
  ];

  const technicalSkills = [
    "Microsoft Excel",
    "Microsoft PowerPoint",
    "Microsoft Word",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Shopify Website Design and Management",
  ];

  const languages = [
    "Portuguese – Native",
    "English – Advanced (C1, IELTS 7.5)",
    "Spanish – Upper-Intermediate (B2, intensive course)",
  ];

  const achievements = [
    "National Exam – Economics: 18/20",
    "National Exam – Mathematics: 20/20",
    "University entrance grade: 18/20",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
              Gonçalo Marques
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Aspiring Management & Strategy Professional | Co-Founder at Sole Lifting Club
            </p>
            <p className="text-base md:text-lg text-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              I am an entrepreneurially driven and intellectually curious business graduate with a
              strong interest in management, consulting, and strategy. I enjoy learning new concepts
              autonomously and applying them to real business challenges, from launching my own gym
              clothing brand to solving consulting-style case studies. I bring strong analytical
              skills, a problem-solving mindset, and a collaborative way of working to every team I
              join.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">About</h2>
            <Card className="p-8 shadow-card">
              <div className="space-y-4 text-card-foreground leading-relaxed">
                <p>
                  I am an entrepreneurially driven, intellectually curious business graduate who
                  enjoys learning new concepts autonomously and combining them with innovation. Over
                  the last few years, I have worked on projects that range from launching a gym
                  clothing brand to delivering consulting-style assignments for real companies,
                  which has helped me develop a structured and analytical way of thinking.
                </p>
                <p>
                  Building Sole Lifting Club from scratch taught me how to research markets,
                  understand competitive dynamics, speak with suppliers, and handle unexpected
                  operational problems. At the same time, my academic projects and experience at
                  AIESEC in Portugal strengthened my ability to work in teams, communicate clearly,
                  and present insights in a compelling way.
                </p>
                <p>
                  I value teamwork, feedback, and inclusive leadership. I enjoy being in
                  environments where people challenge each other to improve and where ideas are
                  discussed openly. Outside of the classroom, I have contributed over 30 hours of
                  volunteering with Just a Change, helping rebuild houses for people with special
                  needs. This experience reinforced my belief in the importance of collaboration,
                  resilience, and using my skills to make a positive impact.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section>
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-8"
          >
            Experience
          </motion.h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section className="bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-8"
          >
            Projects & Case Work
          </motion.h2>
          <div className="grid md:grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section>
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-8"
          >
            Education
          </motion.h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-8"
          >
            Skills
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 shadow-card h-full">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  Business & Analytical
                </h3>
                <div className="flex flex-wrap gap-2">
                  {businessSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 shadow-card h-full">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 shadow-card h-full">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Interests Section */}
      <Section>
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-8"
          >
            Interests
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 shadow-card">
              <p className="text-card-foreground leading-relaxed mb-6">
                Outside of work and university, I am passionate about fitness and nutrition, and I
                have a strong interest in high-performance sports, especially basketball and tennis,
                which I have practiced in the past. I also enjoy following financial markets and
                exploring investments in stocks and cryptocurrency. Volunteering and social impact
                are important to me, and I am motivated by opportunities where I can combine
                business skills with positive change.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="gap-2 text-sm py-2 px-4">
                  <Dumbbell className="w-4 h-4" />
                  Fitness & Nutrition
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  Basketball & Tennis
                </Badge>
                <Badge variant="outline" className="gap-2 text-sm py-2 px-4">
                  <TrendingUp className="w-4 h-4" />
                  Investments
                </Badge>
                <Badge variant="outline" className="gap-2 text-sm py-2 px-4">
                  <Heart className="w-4 h-4" />
                  Volunteering
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  Entrepreneurship
                </Badge>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Achievements Section */}
      <Section className="bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-8"
          >
            Achievements
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 shadow-card">
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center text-card-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                    <span className="text-lg">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-8"
          >
            Contact
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 shadow-card">
              <p className="text-card-foreground leading-relaxed mb-8">
                If you would like to discuss opportunities in management, consulting, strategy, or
                related areas, I would be happy to connect. Feel free to reach out by email, phone,
                or through LinkedIn.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:goncalo.marques003@gmail.com"
                      className="text-card-foreground hover:text-primary transition-colors"
                    >
                      goncalo.marques003@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="text-card-foreground">
                      +351 933 271 987 (Portugal)
                      <br />
                      +34 677 642 199 (Spain)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Linkedin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                    <a
                      href="#"
                      className="text-card-foreground hover:text-primary transition-colors"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-border pt-6">
                <p className="text-center text-muted-foreground italic">
                  Open to opportunities in management, consulting, and strategy across Europe.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Index;
