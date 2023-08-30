import logo from "../../assets/logo.jpg";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";

const Footer = () => {
  return (
    <main id="footer">
      <img src={logo} alt="" className="w-fit mx-auto"></img>

      <section className="bg-[rgb(0,0,65)] text-white">
        <div className="bg-[rgb(0,0,0,0.3)] block text-center sm:text-left sm:flex justify-center">
          <div className="p-10">
            <div className="mb-2">
              <a href="#home">Home</a>
            </div>
            <div className="mb-2">
              <a href="#services">Our Services</a>
            </div>
            <div className="mb-2">
              <a href="#about-us">About Us</a>
            </div>
            <div className="mb-2">
              <a href="#reviews">Reviews</a>
            </div>
          </div>

          <div className="p-10">
            <div>Follow Us</div>
            <div className=" sm:flex pt-7 border-2 border-white sm:border-0">
              <div className="pb-3 sm:pb-0 sm:pr-8 flex justify-center">
                <a
                  href="https://www.linkedin.com/company/abibeck-software-solutions/"
                  target="_blank"
                >
                  {<BsLinkedin />}
                </a>
              </div>
              <div className="pb-3 sm:pb-0  sm:pr-8 flex justify-center">
                {<BsTwitter />}
              </div>
            </div>

            <div className="pb-3 sm:pb-0  sm:pr-4 flex justify-center">
              <div className="relative top-2">{<TbPhoneCall />}</div>
              <div className="pl-2">+233(0) 20 270 4376</div>
            </div>
          </div>
        </div>
        <div className="text-white text-[12px] py-4  text-center bg-[rgb(0,0,0,0.5)]">
          All Rights Resevered by Abibeck Software Solutions{" @"}
          {new Date().getFullYear()}
        </div>
      </section>
    </main>
  );
};

export default Footer;
