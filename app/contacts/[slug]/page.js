"use client";
import { useState } from "react";
import FormRow from "../../components/FormRow";
import Logo from "../../components/Logo";
import { tours } from "../../data/data";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
};

function Contact() {
  const [values, setValues] = useState(initialState);
  const params = useParams();
  const uid = params.slug;
  const router = useRouter();

  const tour = tours.find(
    (x) => x.title.toLowerCase() === uid.replaceAll("%20", " ").toLowerCase()
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    toast.success(`Enquiry sent successfully for the tour package '${uid}'`);
    router.push("/");
  };

  const goBackHome = () => {
    router.push("/");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="center-div">
        <Logo />
      </div>
      <h3>&nbsp;</h3>
      <h3>Send Enquiry</h3>
      <div className="tour-img-container">
        <img src={tour.image} className="tour-img" alt={tour.title} />
      </div>
      {/* name field */}
      {!values.isMember && (
        <FormRow
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
      )}
      {/* email field */}
      <FormRow
        type="email"
        name="email"
        value={values.email}
        handleChange={handleChange}
      />
      <button type="submit" className="btn btn-block">
        Enquire
      </button>
      &nbsp;
      <button className="btn btn-block" onClick={goBackHome}>
        Back Home
      </button>
    </form>
  );
}
export default Contact;
