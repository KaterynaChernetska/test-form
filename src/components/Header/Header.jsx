import "./header.scss";
import MobileLogo from "../../assets/icons/logo_small.svg";
import Powercode from "../../assets/icons/POWERCODE.svg";
import Academy from "../../assets/icons/ACADEMY.svg";
import Calendar from "../../assets/icons/calendar.svg";
import Clock from "../../assets/icons/clock.svg";

function Header() {
  return (
    <header className="header">
      <a className="logo-link" href="/">
        <img src={MobileLogo} className="logo-svg" alt="owercode logo" />
        <div className="logo-container">
          <img src={Powercode} className="powercode-logo-svg" alt="Powercode" />
          <img src={Academy} className="academy-logo-svg" alt="Academy" />
        </div>
      </a>
      <ul className="header-date-container">
        <li>
          <img src={Calendar} className="calendar-svg" alt="Calendar-icon" />
          28 декабря
        </li>
        <li>
          <img src={Clock} className="clock-svg" alt="clock-icon" />
          3,5 часа
        </li>
      </ul>
    </header>
  );
}

export default Header;
