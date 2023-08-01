import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav>
      <NavContent setMenuOpen={setMenuOpen} />
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </nav>
  );
};

const NavContent = ({ setMenuOpen }) => {
  return (
    <>
      <h2>SkillSyncHire</h2>
      <div>
        <a onClick={() => setMenuOpen(false)} href="#companies">
          Companies
        </a>
        <a onClick={() => setMenuOpen(false)} href="#blog">
          Blog
        </a>
        <a onClick={() => setMenuOpen(false)} href="#jobdescription">
          Job Description
        </a>
        <a onClick={() => setMenuOpen(false)} href="#successstories">
          Success Stories
        </a>
        <a onClick={() => setMenuOpen(false)} href="#footer">
          Contact
        </a>
        <a href="/login">
          <button>Login/SignUp</button>
        </a>
      </div>
    </>
  );
};

export default Header;
