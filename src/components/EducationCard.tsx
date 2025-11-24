import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface EducationCardProps {
  institution: string;
  degree: string;
  location: string;
  dates: string;
  description: string;
  index: number;
}

export const EducationCard = ({
  institution,
  degree,
  location,
  dates,
  description,
  index,
}: EducationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-1">{institution}</h3>
            <p className="text-lg text-muted-foreground">{degree}</p>
          </div>
          <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
            <p>{dates}</p>
            <p>{location}</p>
          </div>
        </div>
        <p className="text-card-foreground leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
};
