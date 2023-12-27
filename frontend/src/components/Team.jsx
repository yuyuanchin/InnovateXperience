import YY from "../images/YY.png";
import JW from "../images/JW.png";
import KC from "../images/KC.png";
import QJ from "../images/QJ.png";

const Team = () => {
    return(
        <>
          <div className="w-[1920px] h-[1080px] relative bg-white">
            <div className="w-[1920px] h-[1080px] left-0 top-0 absolute bg-white" />
            <div className="left-[925px] top-[217px] absolute text-sky-500 text-2xl font-bold font-['Montserrat']">TEAM</div>
            <div className="left-[702px] top-[270px] absolute text-zinc-950 text-5xl font-extrabold font-['Montserrat']">Meet the Innovators</div>
            <div className="w-[394px] h-[560px] left-[100px] top-[379px] absolute">
              <div className="w-[380px] h-[560px] left-[6px] top-0 absolute bg-white rounded-[10px] shadow border-2 border-sky-500" />
              <div className="w-[310px] h-[380px] left-[41px] top-[19px] absolute flex-col justify-end items-center inline-flex">
                <img 
                  src={YY}
                  alt="Profile Picture of Yu Yuan"
                  className="w-[434px]" />
              </div>
              <div className="w-[393px] h-[127px] left-0 top-[399px] absolute text-center"><span style="text-black text-2xl font-bold font-['Montserrat']">Chin Yu Yuan<br/></span><span style="text-black text-xl font-medium font-['Montserrat'] leading-[30px]">Chief Technology Officer</span></div>
              <div className="w-[170px] h-[29px] left-[224px] top-[511px] absolute text-center text-neutral-600 text-xl font-normal font-['Montserrat']">LinkedIn</div>
            </div>
            <div className="w-[394px] h-[560px] left-[543px] top-[379px] absolute">
              <div className="w-[380px] h-[560px] left-[6px] top-0 absolute bg-white rounded-[10px] shadow border-2 border-sky-500" />
              <div className="w-[310px] h-[380px] left-[41px] top-[19px] absolute flex-col justify-end items-center inline-flex">
                <img 
                  src={JW}
                  alt="Profile Picture of Jia Wen"
                  className="w-[310.11px] h-[413px]"/>
              </div>
              <div className="w-[393px] h-[127px] left-0 top-[399px] absolute text-center"><span style="text-black text-2xl font-bold font-['Montserrat']">Naomi Tham Kah Mun<br/></span><span style="text-black text-xl font-medium font-['Montserrat'] leading-[30px]">Chief Executive Officer</span></div>
              <div className="w-[170px] h-[29px] left-[224px] top-[511px] absolute text-center text-neutral-600 text-xl font-normal font-['Montserrat']">LinkedIn</div>
            </div>
            <div className="w-[395px] h-[560px] left-[987px] top-[379px] absolute">
              <div className="w-[380px] h-[560px] left-[7px] top-0 absolute bg-white rounded-[10px] shadow border-2 border-sky-500" />
              <div className="w-[310px] h-[380px] left-[42px] top-[19px] absolute flex-col justify-end items-center inline-flex">
                <img 
                  src={KC}
                  alt="Profile Picture of Ke Chee"
                  className="w-[310.11px] h-[428px]"/>
              </div>
              <div className="w-[393px] h-[127px] left-0 top-[399px] absolute text-center"><span style="text-black text-2xl font-bold font-['Montserrat']">Ching Ke Chee<br/></span><span style="text-black text-xl font-medium font-['Montserrat'] leading-[30px]">Chief Experience Officer</span></div>
              <div className="w-[170px] h-[29px] left-[225px] top-[511px] absolute text-center text-neutral-600 text-xl font-normal font-['Montserrat']">LinkedIn</div>
            </div>
            <div className="w-[395px] h-[560px] left-[1430px] top-[379px] absolute">
              <div className="w-[380px] h-[560px] left-[7px] top-0 absolute bg-white rounded-[10px] shadow border-2 border-sky-500" />
              <div className="w-[310px] h-[380px] left-[42px] top-[19px] absolute flex-col justify-end items-center inline-flex">
                <img 
                  src={QJ}
                  alt="Profile Picture of QJ"
                  className="w-[433.11px] h-[597.76px]"/>
              </div>
              <div className="w-[393px] h-[127px] left-0 top-[399px] absolute text-center"><span style="text-black text-2xl font-bold font-['Montserrat']">Ng Qiu Jun<br/></span><span style="text-black text-xl font-medium font-['Montserrat'] leading-[30px]">Chief Operations Officer</span></div>
              <div className="w-[170px] h-[29px] left-[225px] top-[511px] absolute text-center text-neutral-600 text-xl font-normal font-['Montserrat']">LinkedIn</div>
            </div>
          </div>
        </>
    )
}