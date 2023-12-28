import logo from "../images/company-logo.png";
import SocMedIcons from "./Global/SocMedIcons";
import FooterCompany from "./Footer/FooterCompany";
import FooterServices from "./Footer/FooterServices";
import FooterContactUs from "./Footer/FooterContactUs";
import FooterSubscribe from "./Footer/FooterSubscribe";

const Footer = () => {
  return (
    <>
      {/* Logo + SocMed Icons */}
      <footer className="footer px-7 lg:px-[80px] xl:px-[100px] pt-6 md:pt-[80px] pb-6 bg-dark-blue text-white">
        <aside className="items-center grid-flow-col lg:flex flex-row align-middle">
          <img src={logo} alt="Company logo" className="h-[30px]" />
          <div className="navbar-start">
            <a href="/" className="text-2xl min-[425px]:text-3xl font-bold">
              InnovateXperience
            </a>
          </div>
        </aside>
        <SocMedIcons
          textColor={"text-dark-blue"}
          bgColor={"bg-white"}
          iconSize={"fa-xl"}
        />
      </footer>
      <footer className="footer px-7 lg:px-[80px] xl:px-[100px] pt-4 pb-6 md:pb-[80px] bg-dark-blue text-white lg:flex flex-row justify-between">
        <FooterCompany />
        <FooterServices />
        <FooterContactUs />
        <FooterSubscribe />
      </footer>
    </>
  );
};

export default Footer;
