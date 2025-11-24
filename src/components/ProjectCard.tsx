import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  name: string;
  description: string;
  index: number;
}

export const ProjectCard = ({ name, description, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full">
        <h3 className="text-xl font-semibold text-card-foreground mb-4">{name}</h3>
        <p className="text-card-foreground leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
};
