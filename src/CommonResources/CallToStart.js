import "./CallToStart.css";
import designImage from "../Images/graphics-design-image.jpg";
import { SocialMediaIcons } from "../LandingPage/LandingComponents/OurWorkComponent";

function CallToStart(props) {
  return (
    <div
      className="landing-sect-seven"
      style={{ backgroundImage: `url(${designImage})` }}
    >
      <div className="sect-seven-cover">
        <div className="social-media-handles">
          <SocialMediaIcons
            socialMediaURL="/facebook"
            socialMediaImage={props.facebook}
          />
          <SocialMediaIcons socialMediaImage={props.instagram} />
          <SocialMediaIcons socialMediaImage={props.linkedin} />
          <SocialMediaIcons socialMediaImage={props.twitter} />
        </div>
        <div className="landig-sect-seven-bottom">
          <p>
            Give us a chance to craft that unique project{" "}
            <span>
              that makes you and your company stand out from the frail
            </span>
          </p>
        </div>
        <a href="#/" className="get-started-btn">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default CallToStart;
