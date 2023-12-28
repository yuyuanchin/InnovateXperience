import React from "react";
import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";

const Service = () => {
  const Card = ({ image, title, description }) => (
    <div className="card w-96 h-96 bg-base-100 shadow-xl border-[3px] border-light-blue p-3 flex-shrink-0 mx-4">
      <figure className="px-10 pt-10">
        <img src={image} alt={`${title} image`} />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <div className="text-justify">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div id="services" className="bg-white p-6">
      <div className="mt-12 mb-12">
        <div className="pb-6">
          <h1 className="text-[24px] text-center text-light-blue font-bold">
            OUR SERVICES
          </h1>
        </div>

        <div className="pb-12">
          <h1 className="text-[48px] text-center text-black font-bold">
            We are Providing Digital Services
          </h1>
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

export default Service;
