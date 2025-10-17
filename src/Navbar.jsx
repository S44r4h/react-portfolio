import "./App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <div className="flex fixed lg:hidden items-end justify-start">
        <div className="dropdown mr-2">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact me</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex absolute top-1/2 right-0 -translate-y-1/2 text-3xl">
        <ul className="flex flex-col gap-4 pr-4">
          <li></li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <a>Contact me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
