import { HashRouter as Router, Routes, Route } from "react-router";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { PraktischPage } from "./pages/PraktischPage";
import { ProgrammaPage } from "./pages/ProgrammaPage";
import { FAQPage } from "./pages/FAQPage";
import { OverOnsPage } from "./pages/OverOnsPage";
import { ContactPage } from "./pages/ContactPage";
import { TicketsPage } from "./pages/TicketsPage";
import { KunstexpositiesPage } from "./pages/ExpoPage";
import { WorkshopsPage } from "./pages/WorkshopsPage";
import { AvondconcertPage } from "./pages/ConcertPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/praktisch" element={<PraktischPage />} />
          <Route path="/programma" element={<ProgrammaPage />} />
          <Route path="/kunstexposities" element={<KunstexpositiesPage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/avondconcert" element={<AvondconcertPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/over-ons" element={<OverOnsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
