import { TbWorldSearch } from "react-icons/tb";
import { ImMobile } from "react-icons/im";
import { SlScreenDesktop } from "react-icons/sl";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <main className="bg-white pb-4" id="services">
      <div className="text-4xl py-10 font-semibold text-black w-fit mx-auto">
        Our Services
      </div>
      <section className="block sm:flex w-fit mx-auto">
        <section className="py-5 px-2">
          <div className="h-[90px] w-[90px] rounded-full bg-[rgb(15,192,252)] mx-auto">
            <div className="mx-auto w-fit relative top-[50%] translate-y-[-50%]">
              <TbWorldSearch color="white" size={60} />
            </div>
          </div>
          <div className="text-center font-semibold pt-5">Web</div>
          <div className="text-center font-semibold ">Applications</div>
          <div className="w-[200px] text-[13px] text-slate-500 text-center p-4">
            We create websites and web application solutions for all sort of
            organisations and industries.
          </div>
          <Link
            to={"/more-details"}
            className="flex justify-around border-[1px] border-black rounded-lg text-center uppercase font-semibold w-fit py-2 px-4 mx-auto text-[11px] text-black hover:bg-[rgb(15,192,252)] hover:text-white"
          >
            More Details
          </Link>
        </section>

        <section className="py-5 px-2">
          <div className="h-[90px] w-[90px] rounded-full bg-[rgb(15,192,252)] mx-auto">
            <div className="mx-auto w-fit relative top-[50%] translate-y-[-50%]">
              <ImMobile color="white" size={50} />
            </div>
          </div>
          <div className="text-center font-semibold pt-5">Mobile</div>
          <div className="text-center font-semibold ">Applications</div>
          <div className="w-[200px] text-[13px] text-slate-500 text-center p-4">
            We are excellent at creating mobile app solutions for various
            purposes. We deliver magnificent andriod and iOS apps
          </div>
          <Link
            to={"/more-details"}
            className="flex justify-around border-[1px] border-black rounded-lg text-center uppercase font-semibold w-fit py-2 px-4 mx-auto text-[11px] text-black hover:bg-[rgb(15,192,252)] hover:text-white"
          >
            More Details
          </Link>
        </section>

        <section className="py-5 px-2">
          <div className="h-[90px] w-[90px] rounded-full bg-[rgb(15,192,252)] mx-auto">
            <div className="mx-auto w-fit relative top-[50%] translate-y-[-50%]">
              <SlScreenDesktop color="white" size={40} />
            </div>
          </div>
          <div className="text-center font-semibold pt-5">Desktop</div>
          <div className="text-center font-semibold ">Applications</div>
          <div className="w-[200px] text-[13px] text-slate-500 text-center p-4">
            We create cross-platform desktop applications for all purposes
          </div>
          <Link
            to={"/more-details"}
            className="flex justify-around border-[1px] border-black rounded-lg text-center uppercase font-semibold w-fit py-2 px-4 mx-auto text-[11px] text-black hover:bg-[rgb(15,192,252)] hover:text-white"
          >
            More Details
          </Link>
        </section>
      </section>
    </main>
  );
};
export default Services;
