import { useRef, useState } from "react";
import NavBar from "./LandingComponents/TopPageComponents/NavBar";
const MoreDetails = () => {
  const Content = useRef([
    {
      id: 1,
      title:
        " Driving Enterprise Efficiency With Our Enterprise Management Sofware",
      note: " In the realm of Enterprise Applications, Abibeck stands as a dependable partner for businesses seeking to optimize their operations and enhance productivity. By developing tailored softwaresolutions, We assists organizations in streamlining workflows, managing resources, and enhancing overall efficiency. Our robust Enterprise Resource Planning (ERP) systems integrate seamlessly with various business functions, enabling real-time insights and data-driven decision-making. From inventory management to customer relationship management, Our's Enterprise Applications are designed to fit diverse industry needs, empowering enterprises to stay ahead in today's competitive business landscape.",
    },

    {
      id: 2,
      title: "Enriching Learning Experiences In The Education Sector",
      note: "Education lies at the heart of societal progress, and We recognizes its importance. Through Our Educational Applications, We are transforming the way students learn and educators teach. By combining engaging interfaces with interactive content, these applications create dynamic learning environments. Whether it's virtual classrooms, online assessments, or personalized learning paths, our Educational Applications cater to diverse learning styles. Our platforms empower educators to impart knowledge effectively while providing students with tools to grasp concepts with greater clarity",
    },
    {
      id: 3,
      title: " Revolutionizing Healthcare With Our HealthCare Systems",
      note: " Our impact extends to the healthcare sector, where HealthCare Applications are redefining patient care and management. With a focus on technological advancements, We develop solutions that facilitate efficient patient record management, appointment scheduling, and medical billing. By leveraging data analytics and secure communication channels, healthcare providers can deliver timely and accurate care. Our HealthCare Applications adhere to industry standards, ensuring compliance and data security while enabling medical professionals to dedicate more time to patient care.",
    },
  ]);
  const [currentContent, setCurrentContent] = useState(Content.current[0]);

  const Next = () => {
    if (currentContent.id === Content.current.length) {
      setCurrentContent(Content.current[0]);
    } else {
      setCurrentContent(Content.current[currentContent.id + 1]);
    }
  };

  return (
    <main>
      <div className="sticky top-0 bg-white">
        <NavBar />
      </div>

      <div className="bg-gradient-to-r">
        <section>
          <section className="flex justify-center">
            <button
              className="p-2  border-2 border-black"
              onClick={() => {
                Next();
              }}
            >
              Next
            </button>
          </section>
          <div className=" text-center font-bold">{currentContent.title}</div>
          <section className="w-full text-center mx-auto  ">
            <i>
              <q>let our SOFTware, do your HARD work</q>
            </i>
            <br />
          </section>
          <p className=" sm:w-[600px] text-center mx-auto p-10 shadow-md shadow-[rgb(0,0,60)]">
            {currentContent.note}
          </p>
        </section>
      </div>
    </main>
  );
};

export default MoreDetails;