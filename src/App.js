import "@fontsource/montserrat";
import { Route, Routes } from "react-router-dom";
import Goods from "./Components/Pages/FeaturesPage/Goods/Goods";
import Packing from "./Components/Pages/FeaturesPage/Packing/Packing";
import Relocation from "./Components/Pages/FeaturesPage/Relocation/Relocation";
import TaxRay from "./Components/Pages/FeaturesPage/TaxRay/TaxRay";
import HomePage from "./Components/Pages/HomePage/HomePage";
import FAQ from "./Components/Pages/LearnPage/FAQ/FAQ";
import MyProfile from "./Components/Pages/MyProfile/MyProfile";
import OurPrice from "./Components/Pages/PricesPage/OurPrice/OurPrice";
import RateCalculator from "./Components/Pages/PricesPage/RateCalculator/RateCalculator";
import ShipNow from "./Components/Pages/ShipNow/ShipNow";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }} >
      <Navbar  ></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ourPrices" element={<OurPrice />} />
        <Route path="/rateCalculator" element={<RateCalculator />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/dashboard" element={<MyProfile />} />
        <Route path="/packing" element={<Packing />} />
        <Route path="/taxray" element={<TaxRay />} />
        <Route path="/dangerousgoods" element={<Goods />} />
        <Route path="/relocation" element={<Relocation />} />
        <Route path="/shipnow" element={<ShipNow />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;