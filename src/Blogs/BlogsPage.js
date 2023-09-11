import "./BlogsPage.css";
import CallToStart from "../CommonResources/CallToStart";
import blogsHero from "../Images/graphics-design-image.jpg";
import { BlogsComponent } from "../LandingPage/LandingComponents/OurWorkComponent";
import facebook from "../Images/facebook-icon.png";
import instagram from "../Images/instagram-icon.png";
import linkedin from "../Images/linkedin-icon.png";
import twitter from "../Images/twitter-x-icon.png";
import portfolio1 from "../Images/portfolio-1.png";

function BlogsPage(props) {
  return (
    <div
      className="blogs-body"
      style={{ backgroundImage: `url(${blogsHero})` }}
    >
      <div className="blogs-section-one">
        <h1>share in our knowledge</h1>
      </div>

      <div className="blogs-section-two">
        <BlogsComponent
          postImage={portfolio1}
          blogTitle="Creating a conducive environment for learning web dev"
          blogURL="/my-blog"
        />
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

export default BlogsPage;
