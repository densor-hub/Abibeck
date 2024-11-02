import NavBar from "../components/NavBar";
import { BsLinkedin } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import { RiMailSendFill } from "react-icons/ri";

const ContactUsPage = () => {
  return (
    <main className="min-h-screen w-screen bg-[rgb(0,0,75)] overflow-x-hidden ">
      <NavBar />
      <section className="py-10 h-full  text-white  text-center flex flex-col justify-center items-center relative overflow-x-hidden">
        <div className=" sm:flex pt-7 mb-4 sm:border-0 w-fit mx-auto">
          <div className="pb-3 sm:pb-0 sm:pr-8 flex justify-center">
            <a href="">{<RiMailSendFill size={40} />}</a>
            <span href="" className="relative left-5 ">
              Abibcek@gmail.com
            </span>
          </div>
        </div>

        <div className=" sm:flex pt-7 mb-4 sm:border-0 w-fit mx-auto">
          <div className="pb-3 sm:pb-0 sm:pr-8 flex justify-center">
            <a
              href="https://www.linkedin.com/company/abibeck-software-solutions"
              target="_blank"
            >
              {<BsLinkedin size={40} />}
            </a>
            <a
              href="https://www.linkedin.com/company/abibeck-software-solutions"
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
      </section>

      <div className="text-white text-[12px] py-4 mx-auto w-100vw text-center absolute bottom-0 left-[50%] translate-x-[-50%]">
        All Rights Resevered by Abibeck Software Solutions{" @"}
        {new Date().getFullYear()}
      </div>
    </main>
  );
};

export default ContactUsPage;
