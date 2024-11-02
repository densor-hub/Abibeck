import { forwardRef } from "react";
import { Link } from "react-router-dom";
const MobileViewMenu = ({ showMenu, setShowMenu }, ref) => {
  return (
    <section
      ref={ref}
      className={
        showMenu
          ? "w-[100vw] h-[100vh] bg-[rgb(15,192,252)] relative right-16"
          : "h-0 w-0 bg-transparent"
      }
    >
      {showMenu && (
        <div className="flex flex-col">
          <Link
            to={"/"}
            className="border-2 border-b-white p-4"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Home
          </Link>
          <Link
            to={"/services"}
            className="border-2 border-b-white p-4"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Services
          </Link>

          <Link
            to={"/about-us"}
            className="border-2 border-b-white p-4"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            About Us
          </Link>
          <div
            className="border-2 border-b-white p-4"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <Link to="/contact" className="block">
              Contact
            </Link>
          </div>
          <div
            className="border-2 border-b-white p-4"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <Link to="/careers" className="block">
              Careers
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default forwardRef(MobileViewMenu);
