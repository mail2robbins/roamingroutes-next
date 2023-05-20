"use client";
import { useRouter } from "next/navigation";

const Tour = ({ image, date, title, info, location, duration, cost }) => {
  const router = useRouter();

  const loadContact = (title, location, image) => {
    router.push(`/contacts/${title}`);
    //router.push(`/contacts/abc`);
  };

  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
          {/* <p>from ${cost}</p> */}
          {/* <div>
            <p>&nbsp;</p>
          </div> */}
          <p>{duration} days</p>
          <button
            className="btn"
            onClick={() => loadContact(title, location, image)}
          >
            Contact
          </button>
        </div>
      </div>
    </article>
  );
};
export default Tour;
