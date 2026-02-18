import { HashRouter as Router, Routes, Route } from "react-router";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { PraktischPage } from "./pages/PraktischPage";
import { FAQPage } from "./pages/FAQPage";
import { OverOnsPage } from "./pages/OverOnsPage";
import { ContactPage } from "./pages/ContactPage";
import { KunstexpositiesPage } from "./pages/ExpoPage";
import { FoodAndDrinksPage } from "./pages/FoodAndDrinksPage";
import { AvondconcertPage } from "./pages/ConcertPage";
import { VoorBedrijvenPage } from "./pages/VoorBedrijvenPage";
import { SponsorsPage } from "./pages/SponsorsPage";

import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Navigation />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/praktisch" element={<PraktischPage />} />
              <Route path="/voor-bedrijven" element={<VoorBedrijvenPage />} />
              <Route path="/kunstexposities" element={<KunstexpositiesPage />} />
              <Route path="/food-and-drinks" element={<FoodAndDrinksPage />} />
              <Route path="/avondconcert" element={<AvondconcertPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/over-ons" element={<OverOnsPage />} />
              <Route path="/sponsors" element={<SponsorsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
