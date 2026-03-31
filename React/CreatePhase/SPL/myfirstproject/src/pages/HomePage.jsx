import Banner from "../components/Banner";
import ListProducts from "../components/ListProducts";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import SubNavBar from "../components/SubNavBar";
import { AdsGrid, AdsStrip } from "../components/AdsSection";
import ProcessSection from "../components/ProcessSection";
import Footer from "../components/Footer";

/**
 * Page process flow (top to bottom, aligned with container-process):
 * 1. Navbar – logo, nav links, contact & cart
 * 2. SubNavBar – menu, category select, search
 * 3. ListProducts – category icons row
 * 4. Banner – hero image
 * 5. Ads grid – promo cards
 * 6. Products – What's Hot grid
 * 7. Process section – How it works (steps)
 * 8. Ads strip – delivery & coupon promo
 * 9. Footer – links, contact, social, copyright
 */
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <SubNavBar />
      <main className="flex-1">
        <ListProducts />
        <Banner />
        <AdsGrid />
        <Products />
        <ProcessSection />
        <AdsStrip />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage