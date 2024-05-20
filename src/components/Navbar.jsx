import { useState } from "react";
import logo from "../img/logo.svg";
import up from "../img/icon-arrow-up.svg";
import down from "../img/icon-arrow-down.svg";

//
import todo from "../img/icon-todo.svg";
import calendar from "../img/icon-calendar.svg";
import reminder from "../img/icon-reminders.svg";
import planning from "../img/icon-planning.svg";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  const styles = `
    ${
      modalOpen ? "flex" : "hidden"
    } backdrop-blur-sm fixed top-0 right-0 h-full w-[350px] z-40 bg-white text-black flex-col space-y-4 items-center pt-12
  `;

  return (
    <header>
      <nav className=" relative bg-transparent w-[90%] mx-auto py-4 text-mediumGray">
        <div className="flex place-content-center justify-between">
          <div className="flex place-items-center space-x-12">
            <h1>
              <a className="text-3xl" href="">
                <img src={logo} alt="" />
              </a>
            </h1>

            <div
              onClick={() => setFeatures(!features)}
              className="dropdowns hover:text-almostBlack"
            >
              <p>Features</p>
              {features ? <img src={up} alt="" /> : <img src={down} alt="" />}
            </div>
            <div
              onClick={() => setCompany(!company)}
              className="dropdowns  hover:text-almostBlack"
            >
              <p>Company</p>
              {company ? <img src={up} alt="" /> : <img src={down} alt="" />}
            </div>
            <div className="hover:cursor-pointer hidden sm:flex hover:text-almostBlack">
              <p>Careers</p>
            </div>
            <div className="hover:cursor-pointer hidden sm:flex hover:text-almostBlack">
              <p>About</p>
            </div>
          </div>

          <div className="flex justify-around place-items-center space-x-8">
            <div className="hover:cursor-pointer hidden sm:block">Login</div>
            <div className="border hover:cursor-pointer border-gray-500 py-1.5 px-4  hidden sm:block rounded-md">
              Register
            </div>
            <button
              id="hamburger"
              className="hover:text-blue sm:hidden pr-4 text-xl cursor-pointer"
              onClick={() => setModalOpen(!modalOpen)}
            >
              &#9776;
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="block sm:hidden">
          <ul className={styles}>
            <li className="w-full hover:bg-gray-200 py-3 pl-8">
              <button
                className="hover:text-blue text-3xl w-full text-left"
                onClick={() => setModalOpen(false)}
              >
                &times;
              </button>
            </li>

            {/* Features */}
            <li
              onClick={() => setFeatures(!features)}
              className="w-full hover:bg-gray-200 py-3 pl-8"
            >
              <div className="flex place-items-center space-x-4">
                <p>Features</p>
                {features ? (
                  <img className="myImg inline-block" src={up} alt="" />
                ) : (
                  <img className="myImg inline-block" src={down} alt="" />
                )}
              </div>

              <div className="block mt-4">
                {features && (
                  <div id="features" className="text-black py-2 px-4 space-y-2">
                    <div className="items">
                      <img src={todo} alt="" /> <p>Todo List</p>
                    </div>
                    <div className="items">
                      <img src={calendar} alt="" /> <p>Calendar</p>
                    </div>
                    <div className="items">
                      <img src={reminder} alt="" /> <p>Reminder</p>
                    </div>
                    <div className="items">
                      <img src={planning} alt="" /> <p>Planning</p>
                    </div>
                  </div>
                )}
              </div>
            </li>

            {/* company */}
            <li
              onClick={() => setCompany(!company)}
              className="w-full hover:bg-gray-200 py-3 pl-8"
            >
              <div className="flex space-x-4 place-items-center">
                <p>Company</p>
                {company ? (
                  <img className="myImg inline-block" src={up} alt="" />
                ) : (
                  <img className="myImg inline-block" src={down} alt="" />
                )}
              </div>

              <div className="block mt-4">
                {company && (
                  <div id="company" className="py-2 px-4 space-y-2 rounded-md">
                    <p>History</p>
                    <p>Our team</p>
                    <p>Blog</p>
                  </div>
                )}
              </div>
            </li>
            <li
              onClick={() => setModalOpen(false)}
              className="w-full hover:bg-gray-200 py-3 pl-8"
            >
              <a className="hover:text-blue" href="">
                Careers
              </a>
            </li>
            <li
              onClick={() => setModalOpen(false)}
              className="w-full hover:bg-gray-200 py-3 pl-8"
            >
              <a className="hover:text-blue" href="">
                About
              </a>
            </li>

            {/* Login buttons */}

            <li>
              <div className="hover:cursor-pointer">Login</div>
            </li>

            <li>
              <div className="border hover:cursor-pointer w-full border-gray-500 py-1.5 px-12 rounded-lg mt-3">
                Register
              </div>
            </li>
          </ul>
        </div>

        {features && (
          <div
            id="features"
            className="hidden sm:block absolute top-14 left-16 bg-white py-2 px-4 space-y-2 w-[200px]"
          >
            <div className="items">
              <img src={todo} alt="" /> <p>Todo List</p>
            </div>
            <div className="items">
              <img src={calendar} alt="" /> <p>Calendar</p>
            </div>
            <div className="items">
              <img src={reminder} alt="" /> <p>Reminder</p>
            </div>
            <div className="items">
              <img src={planning} alt="" /> <p>Planning</p>
            </div>
          </div>
        )}

        {company && (
          <div
            id="company"
            className="hidden sm:block absolute top-14 left-64 w-[150px] py-2 px-4 space-y-2 bg-white rounded-md"
          >
            <p>History</p>
            <p>Our team</p>
            <p>Blog</p>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
