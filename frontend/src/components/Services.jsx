import React from "react";
import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";

const Services = () => {
  const Card = ({ image, title, description }) => (
    <div className="card w-96 h-96 bg-base-100 shadow-xl border-[3px] border-light-blue p-3 flex-shrink-0 mx-4 justify-center items-center">
      <figure className="pt-6 pb-3">
        <img src={image} alt={`${title} image`} />
      </figure>

      <div className="card-body items-center text-center pt-4 p-6">
        <h2 className="card-title sm:text-[20px] lg:text-[22px]">{title}</h2>
        <div className="text-justify">
          <p className="md:text-[16px] lg:text-[18px]">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      <div className="mt-12 mb-12">
        <div className="pt-3 pb-3">
          <h1 className="md:text-[22px] xl:text-[24px] text-center text-light-blue font-bold">OUR SERVICES</h1>
        </div>

        <div className="pb-6">
          <h1 className="sm:text-[25px] md:text-[40px] xl:text-[44px] text-center text-black font-bold">We are Providing Digital Services</h1>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-4 mx-auto">
          <Card
            image={service1}
            title="Digital Transformation Consulting"
            description="Helping businesses leverage technology to enhance operations, customer experiences, and overall efficiency."
          />

          <Card
            image={service2}
            title="User Experience (UX) Design"
            description="Creating intuitive and engaging user interfaces for websites, applications, and digital platforms."
          />

          <Card
            image={service3}
            title="Artificial Intelligent (AI) Integration"
            description="Implementing AI solutions to automate processes, analyze data, and enhance decision-making capabilities."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;