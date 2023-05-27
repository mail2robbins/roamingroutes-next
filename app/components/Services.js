import { services } from "../data/data";
import Title from "./Title";
import Service from "./Service";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7865735760405609"
        data-ad-slot="3615514016"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div className="section-center services-center">
        {services.map((service) => {
          return <Service {...service} key={service.id} />;
        })}
      </div>
    </section>
  );
};
export default Services;
