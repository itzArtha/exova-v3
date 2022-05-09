import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Header = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const history = useHistory();
  return (
    <>
      <nav className="border-gray-100 py-6 border-b-2 md:space-x-10">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to={"/"} className="flex items-center">
            <img
              src={process.env.PUBLIC_URL + "/logos/logo-black.png"}
              className="ml-3 h-6 sm:h-9"
              alt="Exova Logo"
            />
          </Link>
          <div className="flex items-center md:order-2">
            <button
              onClick={() => {
                history.push("products");
              }}
              className={"mr-6"}
            >
              <i className="text-gray-600 fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              onClick={() => {
                history.push("chats");
              }}
              className={"mr-6"}
            >
              <i className="text-gray-600 fa-regular fa-comments"></i>
            </button>
            <button
              onClick={() => {
                history.push("notifications");
              }}
              className={"mr-8"}
            >
              <i className="text-gray-600 fa-regular fa-bell"></i>
            </button>
            <div className={"group"}>
              <button
                onClick={() => {
                  setDropdown(!dropdown);
                }}
                className="hidden md:block flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={process.env.PUBLIC_URL + "/icons/icon-bg-rounded.png"}
                  alt="user photo"
                />
              </button>
              <button className={"md:hidden flex mr-3"}>N</button>
              <Dropdown
                dropdown={dropdown}
                className={
                  "group-hover:block top-12 2xl:right-48 md:right-20 list-none bg-white w-36 rounded shadow duration-500 transition"
                }
              >
                <li className={"border-b"}>
                  <Link
                    to={"/"}
                    className="block py-2 px-4 text-sm text-black hover:bg-gray-100"
                  >
                    Profil
                  </Link>
                </li>
                <li className={"border-b"}>
                  <Link
                    to={"/"}
                    className="block py-2 px-4 text-sm text-black hover:bg-gray-100"
                  >
                    Pesanan Saya
                  </Link>
                </li>
                <li className={"border-b"}>
                  <Link
                    to={"/"}
                    className="block py-2 px-4 text-sm text-black hover:bg-gray-100"
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="block py-2 px-4 text-sm text-black hover:bg-gray-100"
                  >
                    Log out
                  </Link>
                </li>
              </Dropdown>
            </div>
          </div>
          {/*Desktop*/}
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  to={"/"}
                  className={`block py-2 pr-4 pl-3 rounded md:bg-transparent ${
                    props.isSelected === "beranda"
                      ? "md:text-blue-700"
                      : "text-gray-600"
                  } md:p-0 md:font-medium`}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  className={`block py-2 pr-4 pl-3 rounded md:bg-transparent ${
                    props.isSelected === "products"
                      ? "md:text-blue-700"
                      : "text-gray-600"
                  } md:p-0 md:font-medium`}
                >
                  Jasa atau Freelancer
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className={`block py-2 pr-4 pl-3 rounded md:bg-transparent ${
                    props.isSelected === "events"
                      ? "md:text-blue-700"
                      : "text-gray-600"
                  } md:p-0 md:font-medium`}
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
