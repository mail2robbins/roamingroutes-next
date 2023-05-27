"use client";
import Logo from "./Logo";

const NavbarWithoutLinks = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Logo />

        {/* <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass="nav-icon" />;
          })}
        </ul> */}
      </div>
    </nav>
  );
};
export default NavbarWithoutLinks;
