import logo from "../../../assets/logo.jpg";
const Phone = () => {
  return (
    <main className="mx-auto  w-[220px] h-[400px] bg-white rounded-2xl overflow-hidden">
      <div className=" h-[97%] w-[95%] mx-auto relative top-[50%] translate-y-[-50%] rounded-2xl bg-[rgb(0,0,60)] ">
        <section className="relative mb-[-40px]  block  bg-gradient-to-l bg-[rgb(40,40,98)] h-20 rounded-t-2xl">
          <div className="inline-block text-white relative left-4">
            <img
              src={logo}
              className="w-[25px] h-[25px] rounded-[50%] relative top-3 z-10"
            ></img>
          </div>
          <div className="inline-block relative left-[70%] z-10">
            <div className="h-6 grid grid-cols-2 grid-rows-2 gap-y-0 gap-x-[2px]">
              <div className="w-2 h-2 rounded-sm border-2 border-white"></div>
              <div className="w-2 h-2 rounded-sm border-2 border-white"></div>
              <div className="w-2 h-2 rounded-sm border-2 border-white"></div>
              <div className="w-2 h-2 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </section>

        <section className="block w-[100%] h-[20%] mx-auto overflow-hidden">
          <div className="inline-block w-[20%] h-[100%] z-0">
            <div className="inline-block w-[220%] h-[50%] bg-[rgb(40,40,98)] rounded-b-full relative bottom-[5.5px] right-[20px] z-10"></div>
            <div className="inline-block w-[115.8%] h-[38%] bg-[rgb(0,0,60)] relative right-[5px] z-0">
              <div className="w-[120%] h-[100%] bg-[rgb(0,0,60)] relative bottom-5 left-[5px]"></div>
            </div>
          </div>

          <div className="relative inline-block bg-[rgb(0,0,60)] w-[60%] h-[90%]  mx-auto rounded-t-full z-50"></div>

          <div className="inline-block w-[20%] h-[100%] ">
            <div className="inline-block w-[200%] h-[50%] bg-[rgb(40,40,98)] rounded-b-full relative top-[1px] right-[24px] z-10"></div>
            <div className="inline-block w-[115.8%] h-[38%] bg-[rgb(0,0,60)] relative right-[5px] z-0">
              <div className="w-[120%] h-[100%] bg-[rgb(0,0,60)] relative bottom-4 right-2"></div>
            </div>
          </div>
        </section>
        <p className="text-center text-white relative bottom-6 text-xs z-50 font-bold animate-bounce">
          <a href="#footer">Connect with us . . .</a>
        </p>
        <section className="w-24 h-24 mx-auto  rounded-full my-4 bg-[rgb(15,192,252)] border-2 border-white shadow-lg shadow-[rgb(15,192,252)] animate-pulse">
          <div className="h-8  w-8 rounded-full border-4 border-white mx-auto relative top-2 border-t-transparent">
            <div className="w-1 h-4 bg-white mx-auto bottom-1 relative"></div>
          </div>
          <p className="text-xs mx-auto relative top-5 text-center text-white">
            Connect !
          </p>
        </section>

        <section className="block text-xs space-x-4 w-fit mx-auto text-white mt-8">
          <div className="inline-block">
            <div>50.7 KB/s</div>
            <p style={{ fontSize: "8px" }}>Downloaded</p>
          </div>
          <div className="inline-block">
            <div>90.7 KB/s</div>
            <p style={{ fontSize: "8px" }}>Upload</p>
          </div>
        </section>

        <section>
          <div>
            <div className="italic text-white mt-5 text-center ">Abibeck</div>
            <div className="w-[90%] h-[25px] bg-[rgb(15,192,252)] rounded-b-xl mx-auto text-center">
              <i className="text-xs  text-white"> Your future bigins here</i>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="absolute bg-[rgb(0,0,0,0.4)] h-[97%] w-[95%] mx-auto top-0 left-0 right-0 bottom-0 rounded-2xl mt-2 "></div> */}
    </main>
  );
};

export default Phone;
