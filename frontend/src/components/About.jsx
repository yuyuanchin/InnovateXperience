const About = () => {
  const URL = "https://youtu.be/MeFPh2oLjxs?si=SslZ9IHpiy8WE8m0";

  return (
    <div
      id="about"
      className="bg-dark-blue text-white pt-12 pb-12 lg:py-[60px] px-7 lg:px-[80px] xl:px-[100px]"
    >
      <div className="lg:grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center h-full">
        <div className="w-full h-full aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src={URL}
            title="Embedded YouTube Video"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-left">
          <p className="pt-6 pb-4 text-sm leading-snug md:text-[20px] xl:text-[24px] lg:pt-6 lg:pb-8 text-light-blue font-bold">
            ABOUT US
          </p>
          <h1 className="text-xl leading-snug md:text-[30px] xl:text-[42px] font-bold">
            Elevate Your Expectation
          </h1>
          <p className="pt-3 pb-4 text-sm leading-snug md:text-[16px] lg:text-[20px] lg:pt-6 lg:pb-8">
            Discover a realm of tech excellence. We are{" "}
            <strong>InnovateXperience</strong>, your partner in shaping the
            future of digital solutions. With a passion for pushing boundaries,
            we embark on a journey to revolutionize user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
