import { Music, Clock, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import concertImage from "figma:asset/party.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AvondconcertPage() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96">
        <ImageWithFallback
          src={concertImage}
          alt="Avondconcert"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#002F49] mb-6">
              <Music className="size-10" />
            </div>
            <h1 className="text-white mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
              {language === "nl" ? "Concert" : "Concert"}
            </h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              {language === "nl"
                ? "Sluit de dag af met een concert van opkomend talent. Ontdek de muzikanten van morgen in een intieme setting."
                : "End the day with a concert of rising talent. Discover the musicians of tomorrow in an intimate setting."}
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
            <span>{language === "nl" ? "Timing later bekend" : "Timing announced later"}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-5" />
            <span>{language === "nl" ? "Grote zaal" : "Main hall"}</span>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {language === "nl"
              ? "Sluit de dag af met live optredens van de meest veelbelovende muzikanten. Line-up volgt binnenkort!."
              : "End the day with live performances from the most promising musicians. Line-up coming soon!."}
          </p>

          <h3 className="mb-4 text-[#002F49]">
            <b>{language === "nl" ? "Hoogtepunten" : "Highlights"}</b>
          </h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>{language === "nl" ? "Verschillende live acts" : "Various live acts"}</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>{language === "nl" ? "Verschillende genres" : "Various genres"}</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>{language === "nl" ? "Intieme setting" : "Intimate setting"}</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>{language === "nl" ? "Bar aanwezig" : "Bar available"}</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>{language === "nl" ? "Line-up volgt binnenkort" : "Line-up coming soon"}</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>
                {language === "nl"
                  ? "Afsluitende dj-set na het concert!"
                  : "Closing DJ set after the concert!"}
              </span>
            </li>
          </ul>

          <div className="mt-12 text-center">
            <a
              href="https://inspot.weticket.io/inspot/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#c11720] text-white rounded-full font-bold text-lg hover:bg-[#a1131a] transition-all transform hover:scale-105 shadow-xl"
            >
              {t("common.buyTickets")}
            </a>
            <p className="mt-4 text-gray-500 text-sm">
              {language === "nl"
                ? "Je wordt doorverwezen naar onze officiële ticketshop"
                : "You will be redirected to our official ticket shop"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
