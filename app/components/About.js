import aboutImg from "../images/about.jpg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            We are a travel provider that offers pre-designed and pre-booked
            travel arrangements for our customers. Our tour packages typically
            include airfare, accommodations, transportation, and often other
            amenities such as meals, tours, and activities. We also provide
            customizable packages to suit specific customer needs. In addition
            to providing travel arrangements, we offer customer support, travel
            insurance, and other travel-related services.
          </p>
          <p>
            Our travel packages are a convenient and cost-effective way to plan
            a vacation, especially for those who prefer to have everything
            arranged for them. They are also a great way to discover new
            destinations and experiences, as most of our packages include guided
            tours or excursions. Additionally, our packages can often offer
            discounts or exclusive perks that may not be available when booking
            individual trips separately.
          </p>

          <a href="#home" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
