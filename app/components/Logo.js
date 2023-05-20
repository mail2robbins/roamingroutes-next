import Link from "next/link";

const Logo = () => {
  return (
    <div className="nav-header">
      <Link href="/">
        <img
          src="/images/logo.png"
          className="nav-logo"
          alt="roamingroutes-tours"
        />
      </Link>
      <button type="button" className="nav-toggle" id="nav-toggle">
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};

export default Logo;
