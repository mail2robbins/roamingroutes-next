"use client";
import { useState } from "react";
import FormRow from "../../components/FormRow";
import Logo from "../../components/Logo";
import { tours } from "../../data/data";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import SendEmail from "../../../libraries/SendEmail";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
    const { name, email } = values;
    if (!email || !name) {
      toast.error("Please Fill Out All Fields");
      return;
    }

    const { status } = await SendEmail({
      from_name: name,
      message: `I am interested in the tour package '${tour.title}' for location: ${tour.location}.`,
      reply_to: "roaming.routes.tours@gmail.com",
      to_name: email,
      to_address: email,
      //subject: `New Enquiry for the tour package - ${title}`,
    });

    if (status === 1) {
      toast.success(
        `Enquiry sent successfully for the tour package '${tour.title}'`
      );
      setTimeout(() => {
        router.push("/");
      }, 5000);
    } else {
      toast.error(
        `An error occured while sending the enquiry on the tour package '${tour.title}'`
      );
    }
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
      <ToastContainer />
      <div className="center-div">
        <Logo />
      </div>
      <h3>&nbsp;</h3>
      <h3>Send Enquiry</h3>
      <div className="tour-img-container">
        <img src={tour.image} className="tour-img" alt={tour.title} />
      </div>
      <h4>&nbsp;</h4>
      <h5>Package Name:</h5>
      <h4>{tour.title}</h4>
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
