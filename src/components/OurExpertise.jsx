const OurExpertise = () => {
  const OurExpertiseData = [
    {
      heading: "Web Applications",
      paragraph:
        "We develop robust and user-friendly web applications that cater to a wide range of industries. From e-commerce platforms to content management systems, our web solutions are designed to drive engagement and growth.",
    },
    {
      heading: "Desktop Applications",
      paragraph:
        "Our desktop applications combine the power of native software with intuitive user interfaces. Whether you need a productivity tool, data analysis software, or a game, we create desktop applications that work seamlessly across various platforms.",
    },
    {
      heading: "Mobile Applications",
      paragraph:
        "In the mobile-first era, we excel at creating mobile apps for iOS and Android. Our mobile solutions are not just functional; they're designed to provide an exceptional user experience that keeps your audience engaged.",
    },
  ];
  return (
    <main>
      <article>
        <header className="text-xl font-bold text-center">Our Expertise</header>
        <div>
          {OurExpertiseData?.map((elements, index) => {
            return (
              <div key={index} className=" w-[80%] sm:w-[50%] mx-auto pt-10">
                <div className="text-md italic font-bold text-center text-slate-500">
                  {elements?.heading}
                </div>
                <p>{elements?.paragraph}</p>
              </div>
            );
          })}
        </div>
      </article>
    </main>
  );
};

export default OurExpertise;
