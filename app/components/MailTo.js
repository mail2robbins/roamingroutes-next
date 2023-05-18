import React from "react";
import { Link } from "react-router-dom";

const MailTo = ({ mailto, label }) => {
  return (
    <>
      <Link
        to="#"
        className="btn btn-hero"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `mailto:roaming.routes.tours@gmail.com?body=i am interested in this package&subject=New Enquiry`;
        }}
      >
        {label}
      </Link>
    </>
  );
};

export default MailTo;
