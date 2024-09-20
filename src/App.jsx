import "./index.css";
import { useEffect, useState } from "react";

/*Importing Pages */
import HomePage from "./pages/HomePage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import ServicePage2 from "./pages/ServicePage2.jsx";
import FreeConsultancyPage from "./pages/FreeConsultancyPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import FloatingCallIcon from "./components/FloatingCallIcon.jsx";
import FloatingSocialMediaBar from "./components/FloatingSocialMediaBar.jsx";
import Navbar from "./components/Navbar.jsx";
import HandBurgerMenu from "./components/HandBurgerMenu.jsx";
import { appStyles } from "./styles/component_styles.jsx";
import OurTeam from "./pages/OurTeam.jsx";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div name="app" className={`${appStyles.app} ulg:hidden lgd:hidden`}>
      {/*Floating components */}
      {windowWidth < 820 ? <HandBurgerMenu /> : <br className="hidden" />}
      {windowWidth > 820 ? <Navbar /> : <br className="hidden" />}
      <FloatingCallIcon />
      <FloatingSocialMediaBar />

      {/*pages */}
      <HomePage />
      <ServicePage />
      <ServicePage2 />
      <OurTeam />
      <FreeConsultancyPage />
      <ContactUsPage />
    </div>
  );
}

export default App;
