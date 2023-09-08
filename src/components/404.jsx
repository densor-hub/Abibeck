import { useNavigate } from "react-router-dom";
import Footer from "./LandingComponents/Footer";

const PageNotFound = () => {
  const navigateTo = useNavigate();
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <section className="flex flex-col justify-center items-center">
        <div className="pt-32 text-3xl font-extrabold text-center text-black">
          404
        </div>
        <div className="text-center text-sm text-slate-500">Page Not Found</div>
        <button
          className="px-2 rounded-xl bg-[rgb(15,192,252)] "
          onClick={() => {
            navigateTo(-1);
          }}
        >
          Go back
        </button>
      </section>

      <Footer />
    </main>
  );
};

export default PageNotFound;
