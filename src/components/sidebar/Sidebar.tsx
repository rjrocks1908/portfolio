"use client";

import Image from "next/image";
import Link from "next/link";
import InfoCard from "./ui/InfoCard";
import { motion } from "framer-motion";
import { LinkedInIcon, GitHubIcon, WebsiteIcon } from "../icons/SocialIcons";

function Sidebar() {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="sticky top-4 h-fit w-auto p-8 bg-neutral-900 rounded-3xl m-4 border border-neutral-800">
        <div className="flex flex-col items-center">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/pro_pic.png"
              alt="Profile Picture"
              width={500}
              height={500}
              quality={100}
              priority
              className="rounded-2xl size-32 object-cover object-top"
            />
            {/* <div className="absolute bottom-0 right-0 w-3 h-3 bg-lime-400 rounded-full shadow-[0_0_10px_#84cc16] ring-2 ring-lime-400/50"></div> */}
          </motion.div>

          <motion.h1
            className="text-3xl font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Rahul Jain
          </motion.h1>
          <motion.p
            className="bg-[#2A2A2A] px-4 py-2 rounded-xl mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Software Developer
          </motion.p>

          <div className="w-full h-px bg-neutral-800 mt-4"></div>

          {/* Contact Information */}
          <motion.div
            className="w-full mt-8 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <InfoCard icon="📧" title="EMAIL" value="rj.rahul1908@gmail.com" />
            <InfoCard icon="📍" title="LOCATION" value="Delhi, India" />
            <InfoCard icon="📞" title="PHONE" value="+91 9711688871" />
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="https://www.linkedin.com/in/rahul-jain-1908/" className="hover:scale-105 duration-200">
              <div className="w-6 h-6 text-neutral-200 hover:text-white transition-colors">
                <LinkedInIcon />
              </div>
            </Link>
            <Link href="https://github.com/rjrocks1908" className="hover:scale-105 duration-200">
              <div className="w-6 h-6 text-neutral-200 hover:text-white transition-colors">
                <GitHubIcon />
              </div>
            </Link>
            <Link href="https://leetcode.com/rjrocks1908/" className="hover:scale-105 duration-200">
              <div className="w-6 h-6 text-neutral-200 hover:text-white transition-colors">
                <WebsiteIcon />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
export default Sidebar;
