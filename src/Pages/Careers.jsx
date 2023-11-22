import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const Careers = () => {
  return (
    <main className="min-h-screen  flex flex-col justify-between">
      <NavBar></NavBar>
      <section className="text-center py-10">
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
