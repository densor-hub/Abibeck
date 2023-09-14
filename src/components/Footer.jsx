import logo from "../assets/logo.jpg";
import { BsLinkedin } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import { RiMailSendFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <main id="footer">
      <img src={logo} alt="" className="w-fit mx-auto"></img>

      <section className="bg-[rgb(0,0,65)] text-white">
        <div className="bg-[rgb(0,0,0,0.3)] block text-center sm:text-left sm:flex justify-center">
          <div className="p-10">
            <div className="mb-2">
              <Link
                to={"/"}
                onClick={() => {
                  window?.scrollTo(0, 0);
                }}
              >
                Home
              </Link>
            </div>
            <div className="mb-2">
              <Link
                to={"/services"}
                onClick={() => {
                  window?.scrollTo(0, 0);
                }}
              >
                Our Services
              </Link>
            </div>
            <div className="mb-2">
              <Link
                to={"/about-us"}
                onClick={() => {
                  window?.scrollTo(0, 0);
                }}
              >
                About Us
              </Link>
            </div>
            <div className="mb-2">
              <Link
                to={"/careers"}
                onClick={() => {
                  window?.scrollTo(0, 0);
                }}
              >
                Careers
              </Link>
            </div>
          </div>

          <div className="p-10">
            <div>Follow Us</div>
            <div className=" sm:flex pt-7 mb-4 border-2 border-white sm:border-0">
              <div className="pb-3 sm:pb-0 sm:pr-8 flex justify-center">
                <a
                  href="https://www.linkedin.com/company/abibeck-software-solutions/"
                  target="_blank"
                >
                  {<RiMailSendFill size={40} />}
                </a>
                <a
                  href="https://www.linkedin.com/company/abibeck-software-solutions/"
                  target="_blank"
                  className="relative left-5 "
                >
                  Info@Abibcek.xyz
                </a>
              </div>
            </div>
            <div className=" sm:flex pt-7 mb-4 border-2 border-white sm:border-0">
              <div className="pb-3 sm:pb-0 sm:pr-8 flex justify-center">
                <a
                  href="https://www.linkedin.com/company/abibeck-software-solutions/"
                  target="_blank"
                >
                  {<BsLinkedin size={40} />}
                </a>
                <a
                  href="https://www.linkedin.com/company/abibeck-software-solutions/"
                  target="_blank"
                  className="relative left-5 "
                >
                  Abibeck software solutions
                </a>
              </div>
            </div>

            <div className="pb-3 sm:pb-0  sm:pr-4 flex justify-center">
              <div className="relative top-2 right-5">
                {<TbPhoneCall size={40} />}
              </div>
              <div className="pl-2 relative top-4 ">+233(0) 20 270 4376</div>
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
