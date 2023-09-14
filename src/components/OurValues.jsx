const OurValues = () => {
  const OurValuesData = [
    {
      heading: "Quality",
      paragraph:
        " A commitment to quality means prioritizing the delivery of software  that meets or exceeds customer expectations. This includes writing clean and maintainable code, rigorous testing, and continuous improvement processes to ensure high-quality products.",
    },
    {
      heading: "Innovation",
      paragraph:
        " Innovation is crucial in the ever-evolving field of software development. Companies that value innovation encourage their teams to explore new technologies, approaches, and solutions to stay competitive and deliver cutting-edge products.",
    },
    {
      heading: "Collaboration",
      paragraph:
        "Collaboration is a key value in software development because it involves effective teamwork, communication, and knowledge sharing. Teams that work well together are more likely to produce better software, meet deadlines, and solve complex problems.",
    },
    {
      heading: "Customer-Centricity",
      paragraph:
        "  A customer-centric approach means putting the needs and satisfaction of customers at the forefront of decision-making. It involves understanding customer requirements, providing excellent support, and continuously seeking feedback for product improvement.",
    },
    {
      heading: "Agility",
      paragraph:
        " Agility is about being adaptable and responsive to change. Agile development methodologies, such as Scrum or Kanban, are often embraced by software development companies. This value ensures that teams can quickly adjust to changing project requirements and market conditions.",
    },
  ];
  return (
    <main className="py-10">
      <article>
        <header className="text-xl font-bold text-center">Our Values</header>
        <div>
          {OurValuesData?.map((elements, index) => {
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

export default OurValues;
