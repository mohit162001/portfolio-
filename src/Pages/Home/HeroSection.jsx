import { Link } from "react-scroll";
import CV from "../../data/CV.pdf";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Surabhi Chourasia</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Digital Marketer</span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
            As a digital marketer, I pour my passion into creating
            <br /> campaigns that tell compelling brand stories and <br/> drive online
            growth
          </p>
        </div>
        <a href={CV} download className="btn">
          <button className="btn btn-primary">Download CV</button>
        </a>
        {/* <button className="btn btn-outline-primary"><Link to="contact">Get In Touch</Link></button> */}
        <Link

        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/surabhi_image.png" alt="Hero Section" />
      </div>
    </section>
  );
}
