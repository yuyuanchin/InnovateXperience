const FooterSubscribe = () => {
  return (
    <>
      <nav>
        <header className="footer-title">Subscribe</header>
        <input
          type="text"
          placeholder="Enter email"
          className="border-b bg-transparent w-[270px] pb-1 focus:outline-none"
        />
        <button className="btn btn-primary rounded-none w-[270px]">
          Subscribe
        </button>
      </nav>
    </>
  );
};

export default FooterSubscribe;
