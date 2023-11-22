const InscriptionAtTop = () => {
  return (
    <>
      <div className="sm:text-3xl lg:text-5xl">
        let our SOFT<i>ware</i>
      </div>
      <div className="sm:text-3xl lg:text-5xl">
        do your HARD<i>work</i>
      </div>
      <br />
      <div className="text-center md:text-left">
        <i className="">Abibeck</i>
      </div>

      <div className="text-center md:text-left">
        <div><i className="font-light text-sm relative bottom-[5px]" >Your future begins here</i></div>
        <a
          href="#services"
          className="py-1 px-2 bg-[rgb(15,192,252)] rounded-lg hover:bg-white hover:text-[rgb(0,0,65)]"
        >
          Our Services
        </a>
      </div>
    </>
  );
};

export default InscriptionAtTop;
