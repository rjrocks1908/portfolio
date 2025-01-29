function Home() {
  return (
    <div className="px-8 min-h-screen bg-neutral-900 text-white">
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

        <div className="grid grid-cols-2 gap-6">
          {/* Service Cards */}
          <div className="bg-[#212121] p-6 rounded-xl">
            <div className="text-[#FFD700] mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
            <p className="text-gray-300">
              Professional development of applications for Android and ios.
            </p>
          </div>

          <div className="bg-[#212121] p-6 rounded-xl">
            <div className="text-[#FFD700] mb-4">💻</div>
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-gray-300">
              High-quality development of sites at the professional level.
            </p>
          </div>

          <div className="bg-[#212121] p-6 rounded-xl">
            <div className="text-[#FFD700] mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-gray-300">
              The most modern and high-quality design made at a professional
              level.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
