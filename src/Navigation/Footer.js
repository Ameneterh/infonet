import "./Footer.css";
import infonetlogo from "../Images/infonet-footer.png";

function Footer(props) {
  var year = new Date().getFullYear();

  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-logo-section">
          <div className="logo">
            <img src={infonetlogo} alt="footer-logo" />
          </div>
          <span>
            We are a customer-centric Graphics and Web Design/Development,
            Product Packaging Design/Branding company
          </span>
        </div>
        <div className="footer-navigation">
          <p>Navigation</p>
          <span className="footer-nav">
            <a href="#/">Home</a>
            <a href="#/portfolio">Portfolio</a>
            <a href="#/about-us">About Us</a>
            <a href="#/blog">Blog</a>
            <a href="#/get-started">Get Started</a>
          </span>
        </div>
        <div className="footer-address">
          <p>Address</p>
          <span>
            No 25 Liberty Street, Karatudu Extension, Gonin-Gora, Kaduna-Abuja
            Express, Kaduna State, Nigeria.
          </span>
        </div>
        <div className="footer-contact">
          <p>Contact</p>
          <span>
            For more information, <br />
            contact us on
            <br />
            +2348154230654 <br />
            infonetgrafix.webdev@gmail.com
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {year}
          <span> infonet grafix & codes.</span> All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
