import YY from "../images/YY.png";
import JW from "../images/JW.png";
import KC from "../images/KC.png";
import QJ from "../images/QJ.png";

const Team = () => {
  return (
    <>
       <div className="bg-white p-6">
          
          <div className="pb-6">
            <h1 className="text-[24px] text-center text-light-blue font-bold">TEAM</h1>
          </div>
          <div className="pb-12">
            <h1 className="text-[48px] text-center text-black font-bold">Meet the Innovators</h1>
          </div>
        
        <div className="mt-12 mb-12 mx-12 flex flex-row space-x-4 justify-center">
            
            <div className="card w-48 bg-base-100 shadow-xl border-[3px] border-light-blue flex-shrink-0 mx-4 mb-4">
              <figure><img src={YY} alt="Profile Picture of Yu Yuan" /></figure>
              <div className="card-body text-bold text-center">
                <h2 className="card-title card">Chin Yu Yuan</h2>
                <p className="text-center">Chief Technology Officer</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">LinkedIn</button>
                </div>
              </div>
            </div>

            <div className="card w-48 bg-base-100 shadow-xl border-[3px] border-light-blue flex-shrink-0 mx-4 mb-4">
              <figure><img src={JW} alt="Profile Picture of Jia Wen" /></figure>
              <div className="card-body text-bold text-center">
                <h2 className="card-title card">Naomi Tham Kah Mun</h2>
                <p className="text-center">Chief Executive Officer</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">LinkedIn</button>
                </div>
              </div>
            </div>

            <div className="card w-48 bg-base-100 shadow-xl border-[3px] border-light-blue flex-shrink-0 mx-4 mb-4">
              <figure><img src={KC} alt="Profile Picture of Ke Chee" /></figure>
              <div className="card-body text-bold text-center">
                <h2 className="card-title card">Ching Ke Chee</h2>
                <p className="text-center">Chief Experience Officer</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">LinkedIn</button>
                </div>
              </div>
            </div>

            <div className="card w-48 bg-base-100 shadow-xl border-[3px] border-light-blue flex-shrink-0 mx-4 mb-4">
              <figure><img src={QJ} alt="Profile Picture of Qiu Jun" /></figure>
              <div className="card-body text-bold text-center">
                <h2 className="card-title card">Ng Qiu Jun</h2>
                <p className="text-center">Chief Operations Officer</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">LinkedIn</button>
                </div>
              </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default Team;