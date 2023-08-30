import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";

const NavBar = () => {
  return (
    <main className="flex flex-row justify-between items-center h-[50px] md:h-[78px] text-white">
      {!window?.location.pathname?.includes("more-details") ? (
        <section className="flex space-x-10 h-[100%] items-center">
          <div>
            <img
              src={logo}
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full ml-5 border-8 border-[rgb(15,192,252)]"
            ></img>
          </div>
          <div className="block sm:hidden">Menu</div>
          <a
            href="#home"
            className="hidden sm:block p-2 md:p-7 hover:bg-[rgb(15,192,252)]  hover:text-slate-800"
            to=""
          >
            Home
          </a>
          <a
            href="#services"
            className="hidden sm:block p-2 md:p-7 hover:bg-[rgb(15,192,252)]  hover:text-slate-800"
          >
            Services
          </a>
          <a
            href="#about-us"
            className="hidden sm:block p-2 md:p-7 hover:bg-[rgb(15,192,252)]  hover:text-slate-800 "
            to=""
          >
            About Us
          </a>

          <a
            href="#reviews"
            className="hidden sm:block p-2 md:p-7 hover:bg-[rgb(15,192,252)]  hover:text-slate-800  "
            to=""
          >
            Reviews
          </a>
        </section>
      ) : (
        <section></section>
      )}
      <section>
        {!window?.location.pathname?.includes("more-details") ? (
          <a
            href="#footer"
            className="text-white p-1 md:py-1 md:px-4 text-xs md:text-md rounded-lg me-[50px] bg-[rgb(15,192,252)] hover:text-[rgb(0,0,60)] hover:bg-white"
          >
            Contact Us
          </a>
        ) : (
          <Link
            to={"/"}
            className="text-white p-1 md:py-1 md:px-4 text-xs md:text-md rounded-lg me-[47vw] bg-[rgb(15,192,252)] hover:text-[rgb(0,0,60)] hover:bg-white hover:border-2 border-[rgb(15,192,252)] "
          >
            Home
          </Link>
        )}
      </section>
    </main>
  );
};

export default NavBar;
