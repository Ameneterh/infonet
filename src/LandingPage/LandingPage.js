import OurWorkComponent, {
  SocialMediaIcons,
  PortfolioComponent,
  BlogsComponent,
} from "./LandingComponents/OurWorkComponent";
import CallToStart from "../CommonResources/CallToStart";
import "./LandingPage.css";
import webDesign from "../Images/web-dev-image.png";
import productBrand from "../Images/packaging-design-icon.png";
import flyerDesign from "../Images/flyer-design-icon.png";
import swipe from "../Images/white-swipe.png";
import facebook from "../Images/facebook-icon.png";
import instagram from "../Images/instagram-icon.png";
import linkedin from "../Images/linkedin-icon.png";
import twitter from "../Images/twitter-x-icon.png";
import portfolio1 from "../Images/portfolio-1.png";

function LandingPage(props) {
  return (
    <div className="landing-container">
      <div className="landing-sect-one">
        <form>
          <div className="view-portfolio-div">
            <input
              type="text"
              name="view-portfolio"
              className="view-portfolio"
              placeholder="View Our Portfolio"
              disabled
            />
            <a href="#/portfolio" className="input-btn">
              &#8594;
            </a>
          </div>
        </form>
        <span className="company-name">infonet grafix</span>
        <span className="our-description">the creative digital company</span>
        <p>Graphics Design | Product Packaging Design | Web Design/Dev</p>
        <div className="social-media-handles">
          <SocialMediaIcons
            socialMediaURL="/facebook"
            socialMediaImage={facebook}
          />
          <SocialMediaIcons socialMediaImage={instagram} />
          <SocialMediaIcons socialMediaImage={linkedin} />
          <SocialMediaIcons socialMediaImage={twitter} />
        </div>
      </div>

      <div className="landing-sect-two">
        <div className="landing-sect-two-top">
          <OurWorkComponent
            componentImage={webDesign}
            workTitle="Web Development"
            workDescription="We develop Websites and Mobile Applications for individuals and businesses."
          />
          <OurWorkComponent
            componentImage={productBrand}
            workTitle="Product Packaging Design"
            workDescription="We have the best graphics designers and creative experts to bring out your brand's uniqueness."
          />
          <OurWorkComponent
            componentImage={flyerDesign}
            workTitle="Promotional Materials Design"
            workDescription="We have the best graphics designers and creative experts to bring out your brand's uniqueness."
          />
        </div>
        <div className="landing-sect-two-bottom">
          <h1>
            Our <span>Valued Clients</span>
          </h1>
          <div
            className="swipe"
            style={{ backgroundImage: `url(${swipe})` }}
          ></div>
          <div className="brands-serviced">
            <div className="display-brand"></div>
            <div className="display-brand"></div>
            <div className="display-brand"></div>
            <div className="display-brand"></div>
          </div>
        </div>
      </div>

      <div className="landing-sect-three">
        <div className="landing-sect-three-left">
          <span>ABOUT INFONET GRAFIX & CODES</span>
          <p>Trusted brand and digital partner to our valued clients</p>
        </div>
        <div className="landing-sect-three-right">
          <p>
            <b>Infonet Grafix & Codes</b> is an established graphics and web
            design/development, and product branding company based in Kaduna
            State, North-West Nigeria. Infonet Grafix has been serving a wide
            range of clients locally and internationally. At the core of Infonet
            Grafix is the dedication to providing the best services to our
            clients, helping them to efficiently reach their targets at minimal
            costs.
          </p>
          <a href="#/about-us">LEARN MORE</a>
        </div>
      </div>

      <div className="landing-sect-four">
        <span>What can we do for you?</span>
        <h3>See our services</h3>
        <div className="our-services">
          <OurWorkComponent
            componentImage={webDesign}
            workTitle="Web Development"
            workDescription="We develop Websites and Mobile Applications for individuals and businesses."
          />
          <OurWorkComponent
            componentImage={productBrand}
            workTitle="Product Packaging Design"
            workDescription="We have the best graphics designers and creative experts to bring out your brand's uniqueness."
          />
          <OurWorkComponent
            componentImage={flyerDesign}
            workTitle="Promotional Materials Design"
            workDescription="We have the best graphics designers and creative experts to bring out your brand's uniqueness."
          />
        </div>
      </div>

      <div className="landing-sect-five">
        <p>all our products are beautifully crafted</p>
        <h3>See for yourself</h3>
        <div className="our-services">
          <PortfolioComponent portfolio={portfolio1} />
        </div>
      </div>

      <div className="landing-sect-six">
        <p>blog</p>
        <h3>share in our knowledge</h3>
        <div className="our-services">
          <BlogsComponent
            postImage={portfolio1}
            // bgcolor={"black"}
            // color={"white"}
            blogTitle="Creating a conducive environment for learning web dev"
            blogURL="/my-blog"
          />
          <BlogsComponent
            postImage={portfolio1}
            blogTitle="Creating a conducive environment for learning web dev"
            blogURL="/my-blog"
          />
          <BlogsComponent
            postImage={portfolio1}
            blogTitle="Creating a conducive environment for learning web dev"
            blogURL="/my-blog"
          />
        </div>
      </div>
      <CallToStart
        facebook={facebook}
        instagram={instagram}
        linkedin={linkedin}
        twitter={twitter}
      />
    </div>
  );
}

export default LandingPage;
