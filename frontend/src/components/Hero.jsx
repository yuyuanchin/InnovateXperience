import hero from "../images/hero.png";

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="lg:h-[100vh] bg-dark-blue text-white pt-[70px] pb-7 lg:py-[60px] px-7 lg:px-[80px] xl:px-[100px]"
      >
        <div className="flex flex-col lg:grid grid-cols-2 place-items-center h-full">
          <img
            src={hero}
            alt="Hero image"
            className="w-[80%] md:w-[50%] lg:w-[90%] col-start-2 animate-up-down justify-self-end self-center"
          />
          <div className="col-start-1 row-start-1 self-center">
            <h1 className="pt-[50px] text-xl leading-snug md:text-[30px] xl:text-[42px] font-bold">
              Unleashing Innovation,
              <br />
              Transforming Experiences
            </h1>
            <p className="pt-3 pb-4 text-sm leading-snug md:text-[16px] xl:text-[18px] lg:pt-6 lg:pb-8">
              At InnovateXperience, we don't just provide products or services;
              we craft experiences that redefine possibilities. Step into a
              world where innovation meets imagination.
            </p>
            <button className="btn btn-primary w-full md:w-auto xl:btn-lg xl:text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
