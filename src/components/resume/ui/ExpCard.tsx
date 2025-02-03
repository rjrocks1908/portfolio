import { motion } from "framer-motion";
import Checkpoint from "./Checkpoint";

interface ExpCardProps {
  jobTitle: string;
  company: string;
  jobType: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

function ExpCard({
  jobTitle,
  company,
  jobType,
  duration,
  location,
  description,
  responsibilities,
  technologies,
}: ExpCardProps) {
  return (
    <motion.div
      className="relative pl-8"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <Checkpoint />

      <h3 className="text-lg md:text-xl font-semibold">{jobTitle}</h3>
      <p className="text-base md:text-lg text-neutral-300">
        {company} · {jobType}
      </p>
      <p className="text-highlight mt-1">{duration}</p>
      <p className="text-neutral-300 mt-2">{location}</p>
      <div className="text-sm md:text-base mt-3 text-neutral-300">
        <p>{description}</p>
        <ul className="list-disc ml-5 mt-2 space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
        <p className="mt-3">Technologies:</p>
        <ul className="list-disc ml-5 mt-2">
          {technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
export default ExpCard;
