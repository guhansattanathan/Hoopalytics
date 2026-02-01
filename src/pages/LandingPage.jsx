import Header from "../components/Header";
import Services from "../components/Services";
import DescriptionBox from "../components/DescriptionBox";
import Inspiration from "../components/Inspiration";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <DescriptionBox />
      <Services />
      <Inspiration />
      <Footer />
    </>
  );
};

export default LandingPage;