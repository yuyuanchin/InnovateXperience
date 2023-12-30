import React from "react";
import vision from "../images/vision.png";
import mission from "../images/mission.png";
import logo from "../images/company-logo.png";

const VisionMission = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mt-12 mb-12">
          <div className="flex flex-col w-full lg:flex-row items-center justify-center">
            {/* Mission */}
            <div className="card card-normal w-full sm:w-80 h-85 lg:w-96 lg:h-96 bg-base-100 shadow-xl border-[3px] border-light-blue lg:p-3 flex-shrink-0 mx-4 mb-4 justify-center items-center hover:shadow-md transition ease-in-out duration-300">
              <div className="justify-center">
                <figure>
                  <img
                    src={mission}
                    alt="Mission image"
                    className="w-[18%] lg:w-[22%] sm:pt-[10px] lg:pt-[0px]"
                  />
                </figure>

                <div
                  className="card-body items-center text-center"
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                >
                  <h2
                    className="card-title text-[18px] lg:text-[20px]"
                    style={{ marginBottom: "0" }}
                  >
                    Our Mission
                  </h2>
                  <div className="text-justify">
                    <p className="md:text-[14px] lg:text-[16px] center">
                      We lead <strong>technological advancement</strong>,
                      driving innovation across industries. Committed to being
                      pioneers, we relentlessly{" "}
                      <strong>pursue cutting-edge solutions</strong> to shape
                      the trajectory of progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider with Logo */}
            <div
              className="divider divider-info lg:divider-horizontal justify-center mx-10 md:px-10 lg:px-0"
              style={{ paddingTop: "10px", paddingBottom: "25px" }}
            >
              <figure>
                <img
                  src={logo}
                  alt="Logo image"
                  className="justify-center w-20 sm:w-18 md:w-22 lg:w-30"
                />
              </figure>
            </div>

            {/* Vision */}
            <div className="card card-normal w-full sm:w-80 h-85 lg:w-96 lg:h-96 bg-base-100 shadow-xl border-[3px] border-light-blue lg:p-3 flex-shrink-0 mx-4 mb-4 justify-center items-center hover:shadow-md transition ease-in-out duration-300">
              <div className="justify-center">
                <figure>
                  <img
                    src={vision}
                    alt="Vision image"
                    className="w-[18%] lg:w-[22%] py-[10px] sm:pt-[15px] sm:pb-[5px]"
                  />
                </figure>

                <div
                  className="card-body items-center text-center"
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                >
                  <h2
                    className="card-title text-[18px] lg:text-[24px]"
                    style={{ marginBottom: "0" }}
                  >
                    Our Vision
                  </h2>
                  <div className="text-justify">
                    <p className="md:text-[14px] lg:text-[16px] center">
                      Our vision is a seamlessly <strong>enhanced world</strong>{" "}
                      where technology elevates every aspect of life. Join us on
                      a transformative journey into a future where technology is
                      a{" "}
                      <strong>
                        harmonious force, connecting and empowering
                      </strong>{" "}
                      societies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionMission;
