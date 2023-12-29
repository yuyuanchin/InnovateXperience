import React from "react";
import icon1 from "../images/whyus icon1.png";
import icon2 from "../images/whyus icon2.png";
import icon3 from "../images/whyus icon3.png";
import icon4 from "../images/whyus icon4.png";

const WhyUs = () => {
    {/*Function to accomodate the four reasons */}
    const Reason = ({icon, title, description}) => (
        <div className="flex flex-col items-center">
            {/* Why Us Icon */}
            <div className="flex flex-col items-center">
                <img src={icon} alt={`${title} icon`} style={{ width: "100px" }}/>
                <h2 className="font-bold pt-3 pb-3 text-light-blue">{title}</h2>
                <p className="text-center px-[200px] pb-[80px]">{description}</p>
            </div>
        </div>
    );

    return(
      <>
        <div id="whyUs" className="bg-dark-blue text-white flex flex-col items-center pt-3 pb-3">
            {/* Section Title */}
            <div className="pt-[50px] pb-[50px]">
                <h1 className="md:text-[22px] xl:text-[24px] text-center font-bold">
                    <span>Why Choose</span>
                    <span className="text-light-blue"> InnovateXperience</span>
                </h1>
            </div>

           {/* Reasons */}
           <div className="flex flex-col items-center">
            <Reason
              icon={icon1}
              title="Exceptional Quality"
              description=" We take pride in delivering products and services of the
                            highest quality. Our team of experts work tirelessly to
                            ensure that every product and service meets and exceeds
                            industry standards."
            />

            <Reason
              icon={icon2}
              title="Innovation at the Core"
              description="We are at the forefront of innovation, constantly striving
                           to bring you the latest and most cutting-edge solutions.
                           Our commitment to innovation ensures that you stay ahead
                           in a rapidly evolving industry."
            />

            <Reason
              icon={icon3}
              title="Customer-Centric Approach"
              description="Your satisfaction is our priority. We listen to your needs and
                           tailor our services to exceed your expectations. Our dedicated
                           customer support team is always ready to assist you, ensuring 
                           a seamless experience from start to finish."
            />

            <Reason
              icon={icon4}
              title="Sustainable Practices"
              description="Sustainability matters to us. We are committed to environment 
                           friendly practices, and our products and services are designed
                           with sustainability in mind."
            />            
           </div>

        </div>
      </> 
    );
};

export default WhyUs;