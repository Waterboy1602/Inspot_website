import { Lightbulb, Clock, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import foodImage from "figma:asset/drinks.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function FoodAndDrinksPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96">
        <ImageWithFallback
          src={foodImage}
          alt="Food and Drinks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#c11720] mb-6">
              <Lightbulb className="size-10" />
            </div>
            <h1 className="text-white mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
              Food and Drinks
            </h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              {language === "nl"
                ? "Geniet van heerlijke hapjes en verfrissende drankjes tijdens het evenement."
                : "Enjoy delicious snacks and refreshing drinks during the event."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#77160e] hover:text-[#c11720] transition-colors mb-8"
        >
          <ArrowLeft className="size-4" />
          {language === "nl" ? "Terug naar homepage" : "Back to homepage"}
        </Link>

        <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="size-5" />
            <span>{language === "nl" ? "Doorlopend vanaf 12u00" : "Continuous from 12:00 PM"}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-5" />
            <span>Het Entrepot, Binnenweg 4, 8000 {language === "nl" ? "Brugge" : "Bruges"}</span>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {language === "nl"
              ? "Tijdens InSpot zorgen wij voor een lekker food & drinks aanbod, zodat je de hele dag kunt genieten van heerlijke hapjes en verfrissende drankjes."
              : "During InSpot, we provide a delicious food & drinks offer, so you can enjoy delicious snacks and refreshing drinks all day long."}
          </p>

          <h3 className="mb-4 text-[#c11720]">
            <b>{language === "nl" ? "Wat kun je verwachten?" : "What to expect?"}</b>
          </h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>
                {language === "nl"
                  ? "Frisdranken en alcoholvrije alternatieven"
                  : "Soft drinks and non-alcoholic alternatives"}
              </span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>
                {language === "nl"
                  ? "Selectie van lokale bieren en wijnen"
                  : "Selection of local beers and wines"}
              </span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>{language === "nl" ? "Lekkere pasta" : "Delicious pasta"}</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>
                {language === "nl"
                  ? "Aperitiefplanken (beperkt in aanbod!)"
                  : "Aperitif boards (limited supply!)"}
              </span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>
                {language === "nl"
                  ? "Vegetarische opties beschikbaar"
                  : "Vegetarian options available"}
              </span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>
                {language === "nl"
                  ? "Allergieën of vragen in verband met het eten- en drinkenaanbod? Neem gerust contact op met ons via mail: info@inspot.be!"
                  : "Allergies or questions regarding the food and drink offer? Feel free to contact us via email: info@inspot.be!"}
              </span>
            </li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h3 className="mb-3 text-[#77160e]">
              {language === "nl" ? "Zakelijk arrangement" : "Corporate packages"}
            </h3>
            <p className="text-gray-700 mb-0">
              {language === "nl"
                ? "Komt u met uw bedrijf? Wij bieden speciale arrangementen voor bedrijven. Neem contact met ons op via "
                : "Coming with your company? We offer special packages for businesses. Contact us via "}
              <a
                href="mailto:info@inspot.be"
                target="_blank"
                className="text-[#c11720] hover:underline"
              >
                info@inspot.be
              </a>{" "}
              {language === "nl" ? "voor de mogelijkheden." : "for the possibilities."}
            </p>
          </div>

          <p className="text-gray-600 italic">
            {language === "nl"
              ? "Definitieve informatie over het food & drinks aanbod volgt binnenkort. Houd onze website en sociale media in de gaten voor updates!"
              : "Final information about the food & drinks offer will follow soon. Keep an eye on our website and social media for updates!"}
          </p>
        </div>
      </div>
    </div>
  );
}
