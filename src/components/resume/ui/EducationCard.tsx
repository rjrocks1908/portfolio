import { motion } from "framer-motion";
import Checkpoint from "./Checkpoint";

interface EducationCardProps {
  institution: string;
  degree: string;
  duration: string;
}

function EducationCard({ institution, degree, duration }: EducationCardProps) {
  return (
    <motion.div
      className="relative pl-8"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Checkpoint />

      <h3 className="text-lg md:text-xl font-semibold">{institution}</h3>
      <p className="text-base md:text-lg text-neutral-300">{degree}</p>
      <p className="text-highlight mt-1">{duration}</p>
    </motion.div>
  );
}
export default EducationCard;
