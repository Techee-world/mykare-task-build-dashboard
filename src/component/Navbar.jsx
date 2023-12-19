import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ formData, setDisplayForm, displayForm }) => {
  const [close, setClose] = useState(false);
  const [menuIcon, setMenuIcon] = useState("hidden");
  console.log(formData.email, "email");
  function menuHandle() {
    if (menuIcon) {
      setMenuIcon("");
      setClose(!close);
    } else {
      setMenuIcon("hidden");
      setClose(false);
    }
  }
  const navigate = useNavigate();
  function deleteDataInLocalStorage() {
    const storedUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const indexToRemove = storedUsers.findIndex(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (indexToRemove !== -1) {
      storedUsers.splice(indexToRemove, 1);
      localStorage.setItem("registeredUsers", JSON.stringify(storedUsers));
      alert("Log out successfully!");
      navigate("/register");
    } else {
      alert("User not found. Unable to remove data.");
    }
  }
  const adminSignIn = () => {
    setDisplayForm("block");
  };

  return (
    <div className="px-4 py-2 relative bg-slate-800 lg:bg-white ">
      {close ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={menuHandle}
          className="inline w-8 h-8 text-white absolute top-3 left-56 z-10 lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={menuHandle}
          className="inline w-8 h-8 text-white  lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
      <div className={`${menuIcon} lg:block`}>
        <aside className="fixed inset-y-0 left-0 bg-white shadow-lg max-h-screen w-[18rem] md:w-[13rem]">
          <div className="flex flex-col justify-between h-full">
            <div className="flex-grow">
              <div className="px-4 py-8 text-center border-b-2 ">
                <img
                  className="w-16 m-auto pb-3"
                  src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                  alt=""
                />
                <h1>{formData.email}</h1>
                <Link to="/">
                  {" "}
                  <h1 className="text-blue-500 underline cursor-pointer">
                    sign in{" "}
                  </h1>
                </Link>
              </div>
              <div className="p-4 ">
                <ul className="space-y-1">
                  <li onClick={adminSignIn}>
                    <a
                      href="#"
                      className="flex items-center bg-blue-300 duration-700 rounded-md font-bold text-sm text-yellow-900 py-3 px-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-lg mr-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                      </svg>
                      sample
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex bg-white hover:bg-blue-300 duration-700 rounded-md font-bold text-sm text-gray-900 py-3 px-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-lg mr-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                      </svg>
                      sample 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex bg-white hover:bg-blue-300 duration-700 rounded-md font-bold text-sm text-gray-900 py-3 px-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-lg mr-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                      </svg>
                      sample 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex bg-white hover:bg-blue-300 duration-700 rounded-md font-bold text-sm text-gray-900 py-3 px-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="text-lg mr-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      </svg>
                      sample 3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              onClick={deleteDataInLocalStorage}
              className="p-4 flex items-center justify-center cursor-pointer hover:bg-blue-300 duration-700"
            >
              <img
                className="w-6"
                src="https://cdn-icons-png.flaticon.com/128/2529/2529524.png"
                alt=""
              />
              <span className="font-bold text-sm ml-2">Logout</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Navbar;
