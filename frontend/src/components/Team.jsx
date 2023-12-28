import YY from "../images/YY.png";
import JW from "../images/JW.png";
import KC from "../images/KC.png";
import QJ from "../images/QJ.png";
import SocMedIcons from "./SocMedIcons";

const Team = () => {
  return (
    <>
      <div id="team" className="bg-white p-6">
        <div className="pb-6">
          <h1 className="text-[24px] text-center text-light-blue font-bold">
            OUR TEAM
          </h1>
        </div>
        <div className="pb-12">
          <h1 className="text-[48px] text-center text-black font-bold">
            Meet the Innovators
          </h1>
        </div>

        <div className="mt-12 mb-12 mx-12 flex flex-row gap-8 justify-center">
          <div className="card w-64 bg-base-100 shadow-xl border-[3px] border-light-blue flex-shrink-0">
            <figure>
              <img
                src={YY}
                alt="Profile Picture of Yu Yuan"
                style={{ width: "250px" }}
              />
            </figure>
            <div className="card-body text-bold text-center">
              <h2 className="card-title card text-[16px]">Chin Yu Yuan</h2>
              <p className="text-center mb-5 text-[15px]">
                Chief Technology Officer
              </p>
              <div className="card-actions justify-center">
                <SocMedIcons
                  textColor={"text-white"}
                  bgColor={"bg-light-blue"}
                  iconSize={"fa-lg"}
                />
              </div>
            </div>
          </div>

          <div className="card w-64 bg-base-100 shadow-xl border-[3px] border-light-blue flex-shrink-0">
            <figure>
              <img
                src={JW}
                alt="Profile Picture of Jia Wen"
                style={{ width: "250px" }}
              />
            </figure>
            <div className="card-body text-bold text-center">
              <h2 className="card-title card text-[16px]">
                Naomi Tham Kah Mun
              </h2>
              <p className="text-center mb-5 text-[15px]">
                Chief Executive Officer
              </p>
              <div className="card-actions justify-center">
                <nav className="md:place-self-center md:justify-self-end">
                  <div className="grid grid-flow-col gap-4">
                    <a
                      href="https://www.linkedin.com"
                      className="bg-light-blue w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition ease-in-out duration-300 hover:translate-y-1"
                    >
                      <i className="fa-brands fa-linkedin-in fa-lg text-white"></i>
                    </a>
                    <a
                      href="https://www.twitter.com"
                      className="bg-light-blue w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition ease-in-out duration-300 hover:translate-y-1"
                    >
                      <i className="fa-brands fa-x-twitter fa-lg text-white"></i>
                    </a>
                    <a
                      href="https://www.facebook.com"
                      className="bg-light-blue w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition ease-in-out duration-300 hover:translate-y-1"
                    >
                      <i className="fa-brands fa-facebook-f fa-lg text-white"></i>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="card w-64 bg-base-100 shadow-xl border-[3px] border-light-blue flex-shrink-0">
            <figure>
              <img
                src={KC}
                alt="Profile Picture of Ke Chee"
                style={{ width: "250px" }}
              />
            </figure>
            <div className="card-body text-bold text-center">
              <h2 className="card-title card text-[16px]">Ching Ke Chee</h2>
              <p className="text-center mb-5 text-[15px]">
                Chief Experience Officer
              </p>
              <div className="card-actions justify-center">
                <nav className="md:place-self-center md:justify-self-end">
                  <div className="grid grid-flow-col gap-4">
                    <a
                      href="https://www.linkedin.com"
                      className="bg-light-blue w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition ease-in-out duration-300 hover:translate-y-1"
                    >
                      <i className="fa-brands fa-linkedin-in fa-lg text-white"></i>
                    </a>
                    <a
                      href="https://www.twitter.com"
                      className="bg-light-blue w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition ease-in-out duration-300 hover:translate-y-1"
                    >
                      <i className="fa-brands fa-x-twitter fa-lg text-white"></i>
                    </a>
                    <a
                      href="https://www.facebook.com"
                      className="bg-light-blue w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition ease-in-out duration-300 hover:translate-y-1"
                    >
                      <i className="fa-brands fa-facebook-f fa-lg text-white"></i>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="card w-64 bg-base-100 shadow-xl border-[3px] border-light-blue flex-shrink-0">
            <figure>
              <img
                src={QJ}
                alt="Profile Picture of Qiu Jun"
                style={{ width: "250px" }}
              />
            </figure>
            <div className="card-body text-bold text-center">
              <h2 className="card-title card text-[16px]">Ng Qiu Jun</h2>
              <p className="text-center mb-5 text-[15px]">
                Chief Operations Officer
              </p>
              <div className="card-actions justify-center">
                <nav className="md:place-self-center md:justify-self-end">
                  <div className="grid grid-flow-col gap-4">
                    <a
                      href="https://www.linkedin.com"
                      className="bg-light-blue w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition ease-in-out duration-300 hover:translate-y-1"
                    >
                      <i className="fa-brands fa-linkedin-in fa-lg text-white"></i>
                    </a>
                    <a
                      href="https://www.twitter.com"
                      className="bg-light-blue w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition ease-in-out duration-300 hover:translate-y-1"
                    >
                      <i className="fa-brands fa-x-twitter fa-lg text-white"></i>
                    </a>
                    <a
                      href="https://www.facebook.com"
                      className="bg-light-blue w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition ease-in-out duration-300 hover:translate-y-1"
                    >
                      <i className="fa-brands fa-facebook-f fa-lg text-white"></i>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
