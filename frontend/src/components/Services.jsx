import React from "react";
import { useState, useEffect } from "react";
import services from "../services/services";

const Card = ({ image, title, description }) => (
  <div className="card card-normal w-80 h-85 lg:w-96 lg:h-96 bg-base-100 shadow-xl border-[3px] border-light-blue lg:p-3 flex-shrink-0 mx-4 mb-4 justify-center items-center min-h-[327.4px] hover:shadow-md transition ease-in-out duration-300">
    <div className="pt-5 justify-center">
      {/* Service Icon */}
      <figure>
        <img
          src={image}
          alt={`${title} image`}
          className="w-[20%] lg:w-[24%]"
        />
      </figure>

      <div
        className="card-body items-center text-center"
        style={{ paddingTop: "1rem" }}
      >
        <h2 className="card-title text-[20px] lg:text-[22px]">{title}</h2>
        <div className="text-justify">
          {/* Service Description */}
          <p className="md:text-[16px] lg:text-[18px] center">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    services.getServices().then((data) => {
      setData(data);
    });
  }, []);

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
            <h1 className="sm:text-[25px] md:text-[30px] xl:text-[40px] text-center text-black font-bold">
              We are Providing Digital Services
            </h1>
          </div>

          {/* Services */}
          <div className="flex flex-wrap justify-center gap-4 mx-auto">
            {data.map((service) => (
              <Card
                key={service.id}
                image={service.imageUrl}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
