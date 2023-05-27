import Link from "next/link";
import { socialLinks } from "../data/data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />;
        })}
      </ul>
      <p className="copyright">
        <Link href="/privacy" className="btn btn-hero">
          Privacy
        </Link>
      </p>
      <p className="copyright">
        copyright &copy; roaming-routes travel & tours company
        <span id="date">{new Date().getFullYear()}</span>. all rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
