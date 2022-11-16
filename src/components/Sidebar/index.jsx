import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faSuitcase,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Sidebar() {
  const [showNav, setShowNav] = useState(false);


  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="logosub" /> */}
      </Link>
      <nav className={showNav ? "mobile-view" : ""}>
        <NavLink  exact="true" activeclassname="active" to="/" onClick={()=>setShowNav(false)} >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}

        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}

        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}

        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="grey"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/suhailmp2"
            target="__blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/suhailmuhammed157"
            target="__blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => {
          setShowNav(true);
          console.log('clicked')
        }}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
}
