import "./OurWorkComponent.css";

function OurWorkComponent(props) {
  return (
    <div className="our-work-container">
      <div
        className="work-image"
        style={{ backgroundImage: `url(${props.componentImage})` }}
      ></div>
      <h1>{props.workTitle}</h1>
      <p>{props.workDescription}</p>
    </div>
  );
}

export default OurWorkComponent;

// portfolio component

function PortfolioComponent(props) {
  return (
    <div
      className="portfolio-container"
      style={{ backgroundImage: `url(${props.portfolio})` }}
    ></div>
  );
}

export { PortfolioComponent };

// social media icons component

function SocialMediaIcons(props) {
  return (
    <div className="social-icons">
      <a href={props.socialMediaURL}>
        <img src={props.socialMediaImage} alt="social-media-icons" />
      </a>
    </div>
  );
}

export { SocialMediaIcons };

// Blog Posts Component
function BlogsComponent(props) {
  return (
    <div className="blogs-container">
      <div
        className="blog-post-image"
        style={{ backgroundImage: `url(${props.postImage})` }}
      />
      <div
        className="blog-post-description"
        style={({ color: props.color }, { backgroundColor: props.bgcolor })}
      >
        <h4>{props.blogTitle}</h4>
        <a href={props.blogURL}>
          Read more <span>&#x300B;</span>
        </a>
      </div>
    </div>
  );
}

export { BlogsComponent };
