import ServiceCard from "@/components/home/ServiceCard";
import SkillCard from "@/components/home/SkillCard";

function Home() {
  const skills = [
    { name: "HTML CSS JS", icon: "🌐" },
    { name: "ReactJS", icon: "⚛️" },
    { name: "NextJS", icon: "▲" },
    { name: "NodeJS", icon: "🟢" },
    { name: "ExpressJS", icon: "🚀" },
    { name: "AWS", icon: "☁️" },
    { name: "DSA", icon: "🔍" },
    { name: "PostgreSQL & MongoDB", icon: "🗄️" },
  ];

  return (
    <div className="px-4 md:px-8 min-h-screen bg-neutral-900 text-white">
      <section>
        <p className="text-gray-300 mb-8">
          As a full stack developer with 2 years of full-time experience and 1
          year as an Android developer intern, I specialize in web development,
          backend development, and Android development. My strong foundation in
          programming languages and self-learning ability enable me to quickly
          adapt and master new technologies. I&apos;m passionate about building
          efficient, scalable applications and continuously enhancing my skills
          to stay at the forefront of the industry.
        </p>

        <p className="text-gray-300">
          If you&apos;re seeking a skilled Full Stack developer to breathe life
          into your project and exceed your expectations, I am here to
          collaborate and create magic together. Reach out, and let&apos;s
          transform your vision into a reality!
        </p>

        {/* What I'm Doing Section */}
        <h2 className="text-3xl font-bold mt-16 mb-8">What I&apos;m Doing</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Cards */}
          <ServiceCard
            icon="/phone-app.png"
            title="Mobile Apps"
            description="Professional development of applications for Android and ios."
          />
          <ServiceCard
            icon="/web-dev.png"
            title="Web Development"
            description="High-quality development of sites at the professional level."
          />
          <ServiceCard
            icon="/devops.png"
            title="DevOps"
            description="Expertise in CI/CD, containerization, cloud services and infrastructure automation."
          />
          <ServiceCard
            icon="/backend.svg"
            title="Backend Development"
            description="Expertise in NodeJS, ExpressJS, MongoDB, PostgreSQL, and AWS."
          />
        </div>

        {/* Skills Section */}
        <h2 className="text-3xl font-bold mt-16 mb-8">Skills</h2>

        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
          {skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
