import "./Header.css";
import infonetlogo from "../Images/infonet-header.png";

function Header(props) {
  return (
    <div className="header-container">
      <div className="header-left">
        <a href="#/">
          <img src={infonetlogo} alt="infonet-logo" />
        </a>
      </div>

      <div className="header-middle">
        <ul>
          <li>
            <a href="#/" className="header-link">
              home
            </a>
          </li>
          <li>
            <a href="#/portfolio" className="header-link">
              portfolio
            </a>
          </li>
          <li>
            <a href="#/about-us" className="header-link">
              about us
            </a>
          </li>
          <li>
            <a href="#/blog" className="header-link">
              blog
            </a>
          </li>
        </ul>
      </div>

      <div className="header-right">
        <a href="#/" className="header-btn">
          get started
        </a>
      </div>
    </div>
  );
}

export default Header;
