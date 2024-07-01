import "./infoSection.scss";
import Globe from "../../assets/icons/globe.svg";

function InfoSection() {

  return (
    <div className="info-section-container">
      <p className="info-section-name">
        <img src={Globe} alt="Globe" />
        Вебинар
      </p>
      <h1 className="info-section-title">front-end</h1>
      <div className="info-section-subtitle">
        <p>
          <span className="inner-text">с нуля</span>
        </p>
        <span>легкий старт в IT профессии</span>
      </div>
      <p className="info-section-information">
        Узнайте какими навыками должен обладать фронтенд разработчик в 2022 году
        и как начать карьеру в востребованной профессии{" "}
      </p>
    </div>
  );
}
export default InfoSection;
