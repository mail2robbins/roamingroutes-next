"use client";
import { socialLinks } from "../data/data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Logo />

        {/* <PageLinks parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass="nav-icon" />;
          })}
        </ul> */}
      </div>
    </nav>
  );
};
export default Navbar;
