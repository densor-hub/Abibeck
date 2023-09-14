import { forwardRef } from "react";
import { Link } from "react-router-dom";
const MobileViewMenu = ({ showMenu, setShowMenu }, ref) => {
  return (
    <section ref={ref}>
      {showMenu && (
        <div className="flex flex-col">
          <Link
            to={"/"}
            className="bg-[rgb(15,192,252)] border-2 border-b-white"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Home
          </Link>
          <Link
            to={"/services"}
            className="bg-[rgb(15,192,252)] border-2 border-b-white"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Services
          </Link>

          <Link
            to={"/about-us"}
            className="bg-[rgb(15,192,252)]  border-2 border-b-white"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            About Us
          </Link>
          <div
            className="bg-[rgb(15,192,252)]  border-2 border-b-white"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <Link to="/contact" className="block">
              Contact
            </Link>
          </div>
          <div
            className="bg-[rgb(15,192,252)]  border-2 border-b-white"
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
