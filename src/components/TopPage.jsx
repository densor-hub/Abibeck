import { TwinklesAllSmall } from "./Twinkles";
import NavBar from "./NavBar";
import Phone from "./Phone";
import SpaceShipDesign from "./SpaceShipDesign";
import TwoBallsAtTop from "./TwoBallsAtTop";
import InscriptionAtTop from "./InscriptionAtTop";
import Twinkles from "./Twinkles";
import Star from "./Star";
import { useRef } from "react";

const PageTop = () => {
  const showMenuBoolFromNavBar = useRef();
  return (
    <main className="relative overflow-hidden" id="home">
      <div className="bg-[rgb(0,0,60)]  w-screen h-fit overflow-x-hidden">
        <div className="twoBallAtTopRightCorner">
          <TwoBallsAtTop />
        </div>
      </div>
      <section className="absolute top-0 left-0 bottom 0 right-0 h-[100%]">
        <div className="absolute bottom 0  text-white  min-h-[100%] min-w-[100vw] bg-[rgb(0,0,0,0.3)]">
          <div className="relative w-[100%] h-[100%]  mx-auto flex flex-col items-center justify-center">
            <div className="EmptyDivJustToCreateSpaceAtTop w-[100%] h-[130px]"></div>
            <span className="relative top-[250px] -rotate-12">
              <Twinkles />
            </span>

            <span className="rotate-6">
              <Twinkles />
            </span>

            <span className="relative  w-[97vw] left-10 ">
              <span className="absolute left-0">
                <Star></Star>
              </span>
            </span>

            <span className="relative top-10 rotate-[-30deg]">
              <Twinkles />
            </span>
            <span className="w-fit relative left-[10%] rotate-45">
              <SpaceShipDesign />
              <Star />
            </span>

            <span className="relative bottom-5 rotate-12">
              <Twinkles />
            </span>

            <span className="relative  w-[97vw] ">
              <span className="absolute right-0">
                <Star></Star>
              </span>
            </span>

            <span>
              <TwinklesAllSmall />
            </span>

            <span className="relative bottom-10 rotate-45">
              <Twinkles />
            </span>
          </div>
        </div>

        {/* Top layer */}
        <div className="relative top-0 left-0 right-0 bg-transparent w-screen h-fit" >
          <div >
            <NavBar ref={showMenuBoolFromNavBar}></NavBar>
          </div>
          <div className="w-fit  relative mx-auto sm:mx-0 sm:left-[60%] md:left-[72%]  top-[150px] sm:top-10 2xl:left-[80%]">
            <Phone showMenuBoolFromNavBar={showMenuBoolFromNavBar}></Phone>
            <Star />
          </div>

          <div className="w-fit  h-fit relative bottom-[410px]  sm:bottom-[250px] md:bottom-[300px] mx-auto md:mx-0 sm:left-[-120px] md:left-[100px] p-4 sm:p-10 text-white  md:border-2 border-slate-800 font-bold rounded-2xl bg-transparent text-center " >
            <InscriptionAtTop />
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageTop;
