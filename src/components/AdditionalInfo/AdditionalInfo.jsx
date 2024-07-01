import Gift from "../../assets/icons/gift.svg";
import Founder from "../../assets/icons/founder.svg";
import "./additionalInfo.scss";

function AdditionalInfo() {
  return (
    <ul className="additional-info ">
      <li className="additional-info-list-item">
        <img src={Gift} className="gift-svg" alt="Gift" />
        <ul className="inner-list">
          <li>Бонус за регистрацию</li>
          <li>PDF-файл "5 преимуществ профессии веб-дизайнера" </li>
        </ul>
      </li>
      <li className="additional-info-list-item">
        <img src={Founder} className="founder-svg" alt="Founder" />
        <ul className="inner-list">
          <li>
            Киррилл <span className="inner-list-name"> КАСАТОНОВ</span>
          </li>
          <li>
            6 лет коммерческого опыта с такими компаниями как Mercedes-Benz и
            другими крупными корпорациями{" "}
          </li>
        </ul>
      </li>
    </ul>
  );
}
export default AdditionalInfo;
