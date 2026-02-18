import { Palette, Clock, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import expoImage from "figma:asset/art.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function KunstexpositiesPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96">
        <ImageWithFallback
          src={expoImage}
          alt="Kunstexposities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#77160e] mb-6">
              <Palette className="size-10" />
            </div>
            <h1 className="text-white mb-4">{language === "nl" ? "Expo" : "Exhibition"}</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              {language === "nl"
                ? "Ontdek lokaal talent tijdens onze kunstexpositie."
                : "Discover local talent during our art exhibition."}
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
            <span>{language === "nl" ? "Zalen later bekend" : "Rooms announced later"}</span>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {language === "nl"
              ? "Bewonder het werk van verschillende lokale kunstenaars, elk in hun eigen stijl."
              : "Admire the work of various local artists, each in their own style."}
          </p>

          <h3 className="mb-4 text-[#77160e]">
            {language === "nl" ? "Hoogtepunten" : "Highlights"}
          </h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>
                {language === "nl" ? "Verschillende lokale kunstenaars" : "Various local artists"}
              </span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>{language === "nl" ? "Verschillende stijlen" : "Various styles"}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
