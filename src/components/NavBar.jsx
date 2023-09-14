import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import MobileViewMenu from "./MobileViewMenu";

const NavBar = forwardRef((prop, ref) => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const MenuRef = useRef();
  //sending out ShowMenu To be use by mobile dropdown Menu
  useImperativeHandle(ref, () => {
    return showMenu;
  });

  //close Menu when outside of Menu is clicked
  useEffect(() => {
    const clicked = (e) => {
      if (MenuRef?.current && !MenuRef?.current?.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", clicked);

    return () => {
      document?.removeEventListener("click", clicked);
    };
  });
  return (
    <nav
      className="flex flex-row justify-between items-center h-[50px] md:h-[78px] text-white bg-transparent relative z-20"
      style={
        location?.pathname === "/"
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "rgb(0,0,60)" }
      }
    >
      <div
        className="block sm:hidden absolute  left-0 ml-[15vw] w-[150px] mt-24 text-center"
        ref={MenuRef}
      >
        <div className="text-left">
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <HiOutlineMenuAlt1 size={30} />
          </button>
        </div>

        <section
          className="h-[92px] transition-transform duration-500"
          ref={MenuRef}
        >
          <MobileViewMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        </section>
      </div>
      <section className="flex space-x-10 h-[100%] items-center relative ">
        <div>
          <img
            src={logo}
            alt=""
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full ml-5 border-8 border-[rgb(15,192,252)]"
          ></img>
        </div>

        <Link
          to={"/"}
          className="hidden sm:block p-2 md:p-7 hover:bg-[rgb(15,192,252)]  hover:text-slate-800"
        >
          Home
        </Link>

        <Link
          to="/about-us"
          className="hidden sm:block p-2 md:p-7 hover:bg-[rgb(15,192,252)]  hover:text-slate-800 "
        >
          About Us
        </Link>

        <Link
          to="/services"
          className="hidden sm:block p-2 md:p-7 hover:bg-[rgb(15,192,252)]  hover:text-slate-800"
        >
          Services
        </Link>

        <Link
          to={"/careers"}
          className="hidden sm:block p-2 md:p-7 hover:bg-[rgb(15,192,252)]  hover:text-slate-800"
        >
          Careers
        </Link>
      </section>
      <Link
        to="/contact"
        className="text-white p-1 md:py-1 md:px-4 text-xs md:text-md rounded-lg me-[50px] bg-[rgb(15,192,252)] hover:text-[rgb(0,0,60)] hover:bg-white"
      >
        Contact Us
      </Link>
    </nav>
  );
});

export default NavBar;
