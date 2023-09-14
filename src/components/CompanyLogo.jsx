const CompanyLogo = ({
  size,
  color,
  backgroundColor,
  backgroundColorShade,
  companyName,
}) => {
  return (
    <main
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: backgroundColor,
        border: "1px solid black",
      }}
    >
      <div className="container border  relative top-[50%] translate-y-[-50%]">
        {" "}
        {}
        <section className="flex mx-auto  border border-red-500 justify-center">
          <div
            style={{
              //TOP SECTION
              width: ` ${Number((4 / 100) * size)}px`,
              height: `${Number((20 / 100) * size)}px`,
              border: "1px solid black",
              position: "relative",
              right: ` ${Number((8 / 100) * size)}px`,
              borderBottom: "0px",
            }}
            className="rotate-[-40deg] rounded-full"
          ></div>
          <div
            style={{
              width: ` ${Number((4 / 100) * size)}px`,
              height: `${Number((20 / 100) * size)}px`,
              border: "1px solid black",
              position: "relative",
              bottom: ` ${Number((4 / 100) * size)}px`,

              transform: `rotate(-${Number(4 / 100) * size}deg)`,
              right: ` ${Number((2 / 100) * size)}px`,
              borderTop: `${Number((0.8 / 100) * size)}px solid ${color}`,
              borderBottom: `${Number(
                (15 / 100) * size
              )}px solid ${backgroundColor}`,
              borderLeft: `${Number((0.8 / 100) * size)}px solid ${color}`,
            }}
            className="rounded-full"
          ></div>
          <div
            style={{
              width: ` ${Number((4 / 100) * size)}px`,
              height: `${Number((20 / 100) * size)}px`,
              border: "1px solid black",
              position: "relative",
              left: ` ${Number((8 / 100) * size)}px`,
              borderBottom: "0px",
            }}
            className="rotate-[40deg] rounded-full"
          ></div>
        </section>
        <section className="flex justify-center gap-[12%]">
          <div
            style={{
              //MIDDLE SECTION
              height: ` ${Number((4 / 100) * size)}px`,
              width: `${Number((20 / 100) * size)}px`,
              border: "1px solid black",
              borderRight: "0px",
            }}
            className="rounded-full"
          ></div>
          <div
            style={{
              height: ` ${Number((4 / 100) * size)}px`,
              width: `${Number((20 / 100) * size)}px`,
              border: "1px solid black",
              borderLeft: "0px",
            }}
            className="rounded-full"
          ></div>
        </section>
        <section className="flex gap-1 mx-auto  border border-red-500 justify-center">
          <div
            style={{
              //BOTTOM SECTION
              width: ` ${Number((4 / 100) * size)}px`,
              height: `${Number((20 / 100) * size)}px`,
              border: "1px solid black",
              position: "relative",
              right: ` ${Number((6 / 100) * size)}px`,
              borderTop: "0px",
            }}
            className="rotate-[40deg] rounded-full"
          ></div>
          <div
            style={{
              width: ` ${Number((4 / 100) * size)}px`,
              height: `${Number((20 / 100) * size)}px`,
              border: "1px solid black",
              position: "relative",
              top: ` ${Number((4 / 100) * size)}px`,
              borderTop: "0px",
            }}
            className="rounded-full"
          ></div>
          <div
            style={{
              width: ` ${Number((4 / 100) * size)}px`,
              height: `${Number((20 / 100) * size)}px`,
              border: "1px solid black",
              position: "relative",
              left: ` ${Number((6 / 100) * size)}px`,
              borderTop: "0px",
            }}
            className="rotate-[-40deg] rounded-full"
          ></div>
        </section>
      </div>
      <div
        className={`mx-auto w-[100%] py-[calc(${Number((5 / 100) * size)}px)`}
      >
        {companyName}
      </div>
    </main>
  );
};

export default CompanyLogo;
