import hero from "../images/hero.png";

const Hero = () => {
  return (
    <>
      <div className="hero h-[calc(100vh-68px)] bg-dark-blue text-white">
        <div className="hero-content flex-col lg:grid grid-cols-2">
          <img
            src={hero}
            alt="Hero image"
            className="h-[90%] col-start-2 animate-up-down justify-self-end"
          />
          <div className="col-start-1 row-start-1">
            <h1 className="text-[44px] font-bold">
              Unleashing Innovation,
              <br />
              Transforming Experiences
            </h1>
            <p className="pt-6 pb-8">
              At InnovateXperience, we don't just provide products or services;
              we craft experiences that redefine possibilities. Step into a
              world where innovation meets imagination.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
