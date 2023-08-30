const Star = () => {
  return (
    <main className=" w-[100px] h-[20px] animate-pulse">
      <div className="w-[5px] border-b-[20px] border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-slate-300/50 "></div>
      <div className="block relative right-[10px] bottom-3">
        <div className="inline-block w-[5px] border-b-[20px] border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-slate-300/50 -rotate-90 relative top-[4.5px]"></div>
        <div className="inline-block  w-[12px] h-[12px] bg-slate-300/10 relative rotate-45"></div>
        <div className="inline-block w-[5px] border-b-[20px] border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-slate-300/50 rotate-90 relative top-[4.5px]"></div>
      </div>
      <div className="inline-block w-[5px] border-b-[20px] border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-slate-300/50 rotate-180 relative bottom-[20px]"></div>
    </main>
  );
};

export default Star;
