import image1 from "../../assets/bp-1.png";
import image3 from "../../assets/bp-2.png";
import image2 from "../../assets/bp-3.png";
import { AiFillStar } from "react-icons/ai";

const WhatPeopleSay = () => {
  return (
    <main
      className="overflow-x-hidden bg-white pb-[30px] flex justify-center items-center "
      id="reviews"
    >
      <section className="block sm:flex w-fit mx-auto flex-col ">
        <div className="pt-[80px] pb-[50px] text-black bg-white text-center text-3xl font-semibold w-fit mx-auto ">
          What People Say
        </div>
        <section className="flex - fle-row">
          <div className="px-3 pb-6 sm:pb-0 ">
            <div className="flex flex-row">
              <img
                src={image3}
                className="w-[50px] h-[50px] rounded-full mr-4"
              ></img>
              <div className="py-5">
                <div className="text-[12px]">Dr. Abigail Mensah</div>
                <div className="flex">
                  <AiFillStar size={10} color="#E49B0F" />{" "}
                  <AiFillStar size={10} color="#E49B0F" />
                  <AiFillStar size={10} color="#E49B0F" />{" "}
                  <AiFillStar size={10} color="#E49B0F" />
                  <AiFillStar size={10} color="#E49B0F" />
                </div>
              </div>
            </div>
            <div className="text-[11px] max-w-[200px]">
              It is amazing how ABIBECK came through for me swiftly with a
              solution that corresponded with a Hospital management application
              i requested. All processes are now seamlessly effective
            </div>
          </div>

          <div className="px-3">
            <div className="flex">
              <img
                src={image1}
                className="w-[50px] h-[50px] rounded-full mr-4"
              ></img>
              <div className="py-5">
                <div className="text-[12px]">Mr. Maxwel Anderson</div>
                <div className="flex">
                  <AiFillStar size={10} color="#E49B0F" />{" "}
                  <AiFillStar size={10} color="#E49B0F" />
                  <AiFillStar size={10} color="#E49B0F" />{" "}
                  <AiFillStar size={10} color="#E49B0F" />
                  <AiFillStar size={10} color="#E49B0F" />
                </div>
              </div>
            </div>
            <div className="text-[11px] max-w-[200px]">
              Managing my school has never been this easier. I cannot denny the
              fact that i am impressed at the software ABIBECK tailored for my
              school.
            </div>
          </div>

          <div className="px-3">
            <div className="flex">
              <img
                src={image2}
                className="w-[50px] h-[50px] rounded-full mr-4"
              ></img>
              <div className="py-5">
                <div className="text-[12px]">Ezekiel Brown</div>
                <div className="flex">
                  <AiFillStar size={10} color="#E49B0F" />{" "}
                  <AiFillStar size={10} color="#E49B0F" />
                  <AiFillStar size={10} color="#E49B0F" />{" "}
                  <AiFillStar size={10} color="#E49B0F" />
                  <AiFillStar size={10} color="#E49B0F" />
                </div>
              </div>
            </div>
            <div className="text-[11px] max-w-[200px]">
              The Enterprise Management application designed by ABIBECK for my
              company has really been beneficial as it has enabled efficient
              management of purchases, inventory, sales and manay others. I no
              longer run at a loss.
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default WhatPeopleSay;
