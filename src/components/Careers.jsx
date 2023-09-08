import NavBar from "./LandingComponents/TopPageComponents/NavBar";
import Footer from "./LandingComponents/Footer";
const Careers = () => {
  return (
    <main className="min-h-screen  flex flex-col justify-between">
      <NavBar></NavBar>
      <section className="text-center">
        <div>There are no available job openings at the moment</div>
        <div>
          Do well to check here from time to time for updates with respect to
          job vacancies
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Careers;
