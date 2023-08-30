const SpaceShipDesign = () => {
  return (
    <main className="w-fit flex flex-col text-center justify-center items-center">
      <section className="relative top-[10px]">
        <div className="w-[75px] h-[40px] rounded-t-full  bg-slate-300/30"></div>
        <div className="w-[75px] h-[10px]  rounded-b-md  bg-slate-300/30"></div>
      </section>
      <div className="w-[150px] h-[50px] rounded-[50%] bg-slate-300/30">
        <div className="w-[120px] h-[30px] rounded-[50%] bg-[rgb(0,0,40)] mx-auto"></div>
      </div>

      <div className="w-[40px] h-[15px] rounded-[50%] relative  bg-slate-300/30">
        <div className="w-[100%] h-[8px] bg-[rgb(0,0,40)]"></div>
      </div>
    </main>
  );
};

export default SpaceShipDesign;
