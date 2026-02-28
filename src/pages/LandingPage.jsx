import Header from "../components/Header";
import Services from "../components/Services";
import DescriptionBox from "../components/DescriptionBox";
import Inspiration from "../components/Inspiration";
import Footer from "../components/Footer";

const LandingPage = ({ isLoggedIn, name, setIsLoggedIn, setName, setEmail }) => {
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        name={name}
        setIsLoggedIn={setIsLoggedIn}
        setName={setName}
        setEmail={setEmail}
      />
      <DescriptionBox />
      <Services />
      <Inspiration />
      <Footer />
    </>
  );
};

export default LandingPage;