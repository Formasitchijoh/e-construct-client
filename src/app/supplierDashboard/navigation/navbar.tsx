import React from "react";
import { BiSearch } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="w-full ">
      <header className="w-full bg-purple-950 bg-opacity-50">
        <div id="logo-search flex">
          <div className="logo flex gap-2">
            <span>logo</span>
            <ul>
              <li>Norsk</li>
              <li>Timeregistering</li>
            </ul>
          </div>
          <div className="search">
            <BiSearch />
            <input type="text" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
