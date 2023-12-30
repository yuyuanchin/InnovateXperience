import React from "react";
import { useState, useEffect } from "react";
import whyUs from "../services/whyUs";

const Reason = ({ icon, title, description }) => (
  <div className="flex flex-col items-center">
    <div className="flex flex-col items-center">
      <img src={icon} alt={`${title} icon`} style={{ width: "100px" }} />
      <h2 className="font-bold pt-3 pb-3 text-light-blue">{title}</h2>
      <p className="text-center px-6 md:px-11 lg:px-[200px] pb-[80px]">
        {description}
      </p>
    </div>
  </div>
);

const WhyUs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    whyUs.getWhyUs().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <div
        id="why-us"
        className="bg-dark-blue text-white flex flex-col items-center pt-3 pb-3"
      >
        {/* Section Title */}
        <div className="pt-[50px] pb-[50px]">
          <h1 className="md:text-[22px] xl:text-[24px] text-center font-bold">
            <span>Why Choose</span>
            <span className="text-light-blue"> InnovateXperience</span>
          </h1>
        </div>

        {/* Reasons */}
        <div className="flex flex-col items-center">
          {data.map((reason) => (
            <Reason
              key={reason.id}
              icon={reason.iconUrl}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyUs;
