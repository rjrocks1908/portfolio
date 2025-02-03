"use client";

import EducationCard from "@/components/resume/ui/EducationCard";
import ExpCard from "@/components/resume/ui/ExpCard";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const educationData = [
  {
    institution: "IIIT Delhi",
    degree: "PG Diploma in Data Science",
    duration: "2023 — 2024",
  },
  {
    institution: "Thapar University",
    degree:
      "Dual Degree B.Tech in Computer Science and Engineering & MBA in Finance",
    duration: "2017 — 2021",
  },
];

const experienceData = [
  {
    jobTitle: "Software Engineer - Full Stack",
    company: "SKETS Studio",
    jobType: "Full-time",
    duration: "Aug 2024 - Present",
    location: "Delhi, India",
    description: "Worked as a FullStack Developer at SKETS Studio Griphic:",
    responsibilities: [
      "Created a Web Application for Netmeds WholeSale utilizing the React Library in conjunction with the Express framework. The application serves as an E-Commerce platform tailored for medicinal transactions among merchants.",
      "Developed a Web Application of Ajio B2B utilizing the React Library. The application serves as an E-commerce platform tailored for Clothing transaction among merchants.",
    ],
    technologies: ["HTML, CSS, JavaScript, React", "NodeJS, Express framework"],
  },
  {
    jobTitle: "Software Engineer",
    company: "Reliance Retail",
    jobType: "Full-time",
    duration: "Jul 2022 - Jun 2024",
    location: "Bengaluru, Karnataka, India",
    description: "Worked as a FullStack Developer at Reliance Retail:",
    responsibilities: [
      "Created a Web Application for Netmeds WholeSale utilizing the React Library in conjunction with the Express framework. The application serves as an E-Commerce platform tailored for medicinal transactions among merchants.",
      "Developed a Web Application of Ajio B2B utilizing the React Library. The application serves as an E-commerce platform tailored for Clothing transaction among merchants.",
    ],
    technologies: ["HTML, CSS, JavaScript, React", "NodeJS, Express framework"],
  },
  {
    jobTitle: "Full Stack Developer",
    company: "FitBuddy",
    jobType: "Internship",
    duration: "Jun 2021 - Jul 2022",
    location: "Delhi, India",
    description: "Worked as a FullStack Developer at FitBuddy:",
    responsibilities: [
      "Developed 2 android applications: Fitbuddy 24x7 and Fitbuddy 24x7 - Trainer App, both launched on Google Playstore.",
      "Developed the AI component in Java using Computer Vision and Machine Learning algorithms in Android Studio.",
      "Implemented real-time workout tracking and feedback analytics based on body movements in Fitbuddy 24x7.",
      "Created Fitbuddy 24x7 - Trainer App for trainers to create, manage and conduct live sessions.",
    ],
    technologies: ["Java, Android Studio, Computer Vision, Machine Learning"],
  },
];

function ResumePage() {
  const educationRef = useRef(null);
  const experienceRef = useRef(null);

  const educationScroll = useScroll({
    target: educationRef,
    offset: ["start center", "end center"],
  });

  const experienceScroll = useScroll({
    target: experienceRef,
    offset: ["start center", "end 0.95"],
  });

  return (
    <div className="p-4 md:p-8 min-h-screen bg-neutral-900 text-white">
      <div className="relative">
        {/* Education Timeline container */}
        <div className="relative ml-4" ref={educationRef}>
          {/* Static background line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-neutral-700"></div>

          {/* Animated progress line */}
          <motion.div
            className="absolute left-0 top-0 w-0.5 bg-highlight origin-top"
            style={{
              scaleY: educationScroll.scrollYProgress,
              height: "100%",
            }}
          />

          {/* Education items */}
          <div className="space-y-12">
            {/* Education Icon and Text */}
            <div className="relative pl-8 flex items-center">
              <div className="absolute left-[-1.20rem] text-xl bg-neutral-800 rounded-2xl p-2">
                <Image
                  src="/education.png"
                  alt="Book"
                  width={24}
                  height={24}
                  quality={100}
                />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            {/* Education item */}
            {educationData.map((education, index) => (
              <EducationCard key={index} {...education} />
            ))}
          </div>
        </div>

        {/* Experience Timeline container */}
        <div className="relative ml-4 mt-12" ref={experienceRef}>
          {/* Static background line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-neutral-700"></div>

          {/* Animated progress line */}
          <motion.div
            className="absolute left-0 top-0 w-0.5 bg-highlight origin-top"
            style={{
              scaleY: experienceScroll.scrollYProgress,
              height: "100%",
            }}
          />

          {/* Experience items */}
          <div className="space-y-12">
            {/* Experience Icon and Text */}
            <div className="relative pl-8 flex items-center">
              <div className="absolute left-[-1.20rem] text-xl bg-neutral-800 rounded-2xl p-2">
                <Image
                  src="/work.png"
                  alt="Work"
                  width={24}
                  height={24}
                  quality={100}
                />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>

            {/* Experience item */}
            {experienceData.map((experience, index) => (
              <ExpCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
