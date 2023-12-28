const About = () => {
  return (
    <div
      id="about"
      className="bg-dark-blue text-white pt-12 pb-12 lg:py-[60px] px-7 lg:px-[80px] xl:px-[100px]"
    >
      <div className="lg:grid grid-cols-8 gap-8 items-center">
        {/* Upper Video for smaller screens (hidden for larger screens) */}
        <div className="hidden lg:block lg:col-span-4 lg:order-1">
          <div className="relative w-full h-0" style={{ paddingTop: '56.25%' }}>
            <iframe 
              src="https://www.youtube.com/embed/jDLuJLoaA_g?si=lQUc0oCiB6zaDWf0" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
        
        {/* Text */}
        <div className="lg:col-span-4 lg:order-2 lg:col-start-5">
          <div className="text-left">
            <p className="pb-4 text-sm leading-snug md:text-[20px] xl:text-[22px] lg:pt-6 lg:pb-8 text-light-blue font-bold">
              ABOUT US
            </p>
            <h1 className="text-xl leading-snug md:text-[30px] xl:text-[38px] font-bold">
              Elevate Your Expectation
            </h1>
            <p className="pt-3 pb-4 text-sm leading-snug md:text-[16px] xl:text-[18px] lg:pt-6 lg:pb-8">
              Discover a realm of tech excellence. We are <strong>InnovateXperience</strong>, your partner in shaping the future of digital solutions. With a passion for pushing boundaries, we embark on a journey to revolutionize user experiences.
            </p>
          </div>
        </div>
        
        {/* Lower Video for larger screens (hidden for smaller screens) */}
        <div className="lg:hidden lg:col-span-4 lg:order-3 lg:col-start-1">
          <div className="relative w-full h-0" style={{ paddingTop: '56.25%' }}>
            <iframe 
              src="https://www.youtube.com/embed/jDLuJLoaA_g?si=lQUc0oCiB6zaDWf0" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
