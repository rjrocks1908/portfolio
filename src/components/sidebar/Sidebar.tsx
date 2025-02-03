"use client";

import Image from "next/image";
import Link from "next/link";
import InfoCard from "./ui/InfoCard";
import { motion } from "framer-motion";
import { LinkedInIcon, GitHubIcon, WebsiteIcon } from "../icons/SocialIcons";
import { useState } from "react";

function Sidebar() {
  const [toggleInformation, setToggleInformation] = useState(false);

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="sticky top-4 h-fit w-auto bg-neutral-900 rounded-3xl m-4 border border-neutral-800">
        {/* Add button for smaller screens */}
        <motion.div
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={() => setToggleInformation(!toggleInformation)}
          className="hidden sm:block xl:hidden absolute top-0 right-0 bg-neutral-800 shadow-xl rounded-bl-3xl rounded-tr-3xl px-6 py-3 transition-shadow text-highlight text-sm cursor-pointer hover:bg-gradient-to-br from-highlight/50 via-neutral-800 to-neutral-800 select-none"
        >
          Show Contacts
        </motion.div>

        <motion.div
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={() => setToggleInformation(!toggleInformation)}
          className="block sm:hidden absolute top-0 right-0 bg-neutral-800 shadow-xl rounded-bl-xl rounded-tr-3xl px-3 py-1 text-highlight text-sm cursor-pointer hover:bg-gradient-to-br from-highlight/50 via-neutral-800 to-neutral-800 select-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline-block"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>

        <div className="flex flex-col xl:items-center m-4 xl:m-8">
          {/* Name Section */}
          <div className="flex flex-row xl:flex-col items-center gap-4 xl:gap-8">
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
                className="rounded-2xl aspect-square size-24 xl:size-32 object-cover object-top"
              />
              {/* <div className="absolute bottom-0 right-0 w-3 h-3 bg-lime-400 rounded-full shadow-[0_0_10px_#84cc16] ring-2 ring-lime-400/50"></div> */}
            </motion.div>

            <div className="flex flex-col items-start xl:items-center">
              <motion.h1
                className="text-2xl xl:text-3xl font-bold mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Rahul Jain
              </motion.h1>
              <motion.p
                className="bg-[#2A2A2A] px-2 sm:px-4 py-2 rounded-xl mt-2 text-sm xl:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Software Developer
              </motion.p>
            </div>
          </div>

          <motion.div
            className={`overflow-hidden xl:!h-auto xl:!opacity-100`}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: toggleInformation ? 1 : 0,
              height: toggleInformation ? "auto" : 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {/* Divider */}
            <div className="w-full h-px bg-neutral-800 mt-4" />

            {/* Contact Information */}
            <motion.div
              className="w-full mt-8 space-y-4 grid grid-cols-1 sm:grid-cols-2 xl:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.2 }}
            >
              <InfoCard
                icon="📧"
                title="EMAIL"
                value="rj.rahul1908@gmail.com"
              />
              <InfoCard icon="📍" title="LOCATION" value="Delhi, India" />
              <InfoCard icon="📞" title="PHONE" value="+91 9711688871" />
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-neutral-800 mt-8" />

            {/* Social Links */}
            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="https://www.linkedin.com/in/rahul-jain-1908/"
                className="hover:scale-105 duration-200"
              >
                <div className="w-6 h-6 text-neutral-200 hover:text-white transition-colors">
                  <LinkedInIcon />
                </div>
              </Link>
              <Link
                href="https://github.com/rjrocks1908"
                className="hover:scale-105 duration-200"
              >
                <div className="w-6 h-6 text-neutral-200 hover:text-white transition-colors">
                  <GitHubIcon />
                </div>
              </Link>
              <Link
                href="https://leetcode.com/rjrocks1908/"
                className="hover:scale-105 duration-200"
              >
                <div className="w-6 h-6 text-neutral-200 hover:text-white transition-colors">
                  <WebsiteIcon />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
export default Sidebar;
