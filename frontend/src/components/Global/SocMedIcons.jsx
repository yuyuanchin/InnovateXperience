const SocMedIcons = ({ textColor, bgColor, iconSize, linkedin }) => {
  return (
    <>
      <nav className="md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-4">
          <a
            href={linkedin}
            className={`${bgColor} w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition ease-in-out duration-300`}
          >
            <i
              className={`fa-brands fa-linkedin-in ${iconSize} ${textColor}`}
            ></i>
          </a>
          <a
            href="https://www.twitter.com"
            className={`${bgColor} w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition ease-in-out duration-300`}
          >
            <i
              className={`fa-brands fa-x-twitter ${iconSize} ${textColor}`}
            ></i>
          </a>
          <a
            href="https://www.facebook.com"
            className={`${bgColor} w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition ease-in-out duration-300`}
          >
            <i
              className={`fa-brands fa-facebook-f ${iconSize} ${textColor}`}
            ></i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default SocMedIcons;
