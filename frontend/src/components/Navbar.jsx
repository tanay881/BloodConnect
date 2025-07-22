import React, { useContext } from "react";
import assets from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { DonerDataContext } from "../context/DonerDataContext";

const Navbar = () => {
  const [ visible, setVisible ] = useState(false);
  const { navigate } = useContext(DonerDataContext);
  const [ statusToken, setStatusToken ] = useState(null);

  const logout = () => {
    const token = sessionStorage.getItem("token") ?? localStorage.getItem("token");
    if (token) {
      // console.log("Logging out");
      // Clear both storages
      sessionStorage.removeItem("token");
      localStorage.removeItem("token");
    } else {
      sessionStorage.setItem("token", "No active session token");
      // console.log("No active session token");
    }
    // Redirect after clearing
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    // console.log("Useeffect called");

    setStatusToken(sessionStorage.getItem("token"));
    // console.log(statusToken);
  });

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"}>
        <img src={assets.Logo} className="w-36" alt="" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 active">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/donateblood" className="flex flex-col items-center gap-1">
          <p>DONATE BLOOD</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/bloodforpatients"
          className="flex flex-col items-center gap-1"
        >
          <p>BLOOD FOR PATIENTS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <div className="flex pl-24 gap-5 justify-between cursor-pointer">
          {/* Logout  logout */}
          {!statusToken ? (
            <NavLink to="/login" className="flex flex-col items-center gap-1">
              <p>SIGN IN</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          ) : (
            <NavLink to="/login" className="flex flex-col items-center gap-1">
              <p onClick={logout}>SIGN OUT</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          )}
          { !sessionStorage.getItem("token") ? (
            ""
          ) : (
            <NavLink to="/profile" className="flex flex-col items-center gap-1">
              <p>PROFILE</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          )}
        </div>
      </ul>
      <img
        onClick={() => setVisible(true)}
        className="w-5 cursor-pointer lg:hidden"
        src={assets.menu_icon}
        alt=""
      />
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-gray-400 border-b-gray-200"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-gray-200 border-t-gray-200"
            to="/donateblood"
          >
            DONATE BLOOD
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-gray-200 border-t-gray-200"
            to="/bloodforpatients"
          >
            BLOOD FOR PATIENTS
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-gray-200 border-t-gray-200"
            to="/contact"
          >
            CONTACT
          </NavLink>

          {!statusToken ? 
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-gray-200 border-t-gray-200"
            to="/login"
          >
            SIGN IN
          </NavLink> :
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-gray-200 border-t-gray-200"
            to="/login"
          >
            <p onClick={logout}>SIGN OUT</p>
          </NavLink>
          }

          {sessionStorage.getItem("token") ? 
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-gray-200 border-t-gray-200"
            to="/profile"
          >
            PROFILE
          </NavLink> : "" } 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
