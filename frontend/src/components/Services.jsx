import React from "react";
import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";

const Services = () => {
  {/* Card for Service Info */}
  const Card = ({ image, title, description }) => (
    <div className="card card-normal w-80 h-85 lg:w-96 lg:h-96 bg-base-100 shadow-xl border-[3px] border-light-blue lg:p-3 flex-shrink-0 mx-4 mb-4 justify-center items-center min-h-[327.4px]">
      <div className="pt-5 justify-center">

        {/* Service Icon */}
        <figure>
          <img src={image} alt={`${title} image`} className="w-[20%] lg:w-[24%]"/>
        </figure>

        <div className="card-body items-center text-center" style={{paddingTop: '1rem'}} >
          <h2 className="card-title text-[20px] lg:text-[22px]">{title}</h2>
          <div className="text-justify">
            {/* Service Description */}
            <p className="md:text-[16px] lg:text-[18px] center">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div id="services" className="bg-white">
        <div className="mt-12 mb-12">

          {/* Section Title */}
          <div className="pt-3 pb-3">
            <h1 className="md:text-[22px] xl:text-[24px] text-center text-light-blue font-bold">
              OUR SERVICES
            </h1>
          </div>

          {/* Section Description */}
          <div className="pb-6">
            <h1 className="sm:text-[25px] md:text-[30px] xl:text-[40px] text-center text-black font-bold">We are Providing Digital Services</h1>
          </div>

          {/* Services */}
          <div className="flex flex-wrap justify-center gap-4 mx-auto">
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
    </>
  );
};

export default Services;
