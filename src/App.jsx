import "./styles/App.scss";
import Header from "./components/Header/Header";
import InfoSection from "./components/InfoSection/InfoSection";
import SignForCourseForm from "./components/SignForCourseForm/SignForCourseForm";
import { useWindowSize } from "react-use";
import AdditionalInfo from "./components/AdditionalInfo/AdditionalInfo";

function App() {
  const { width } = useWindowSize();
  return (
    <>
      <Header />
      {width >= 1439 ? <p className="under-text">front-end developer </p> : ""}
      <div className="main-container">
        {width > 1439 ? (
          <>
            <div className="desktop-container">
              <InfoSection />
              <AdditionalInfo />
            </div>
            <SignForCourseForm />
          </>
        ) : (
          <>
            <InfoSection />
            <SignForCourseForm />
            <AdditionalInfo />
          </>
        )}
      </div>
      <div className="dots-container">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </>
  );
}

export default App;
