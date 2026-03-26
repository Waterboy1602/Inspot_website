import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
// import logo from "figma:asset/9c4cc19384e2fe8b6901877d55d8c9cdce1f158b.png";
import logo from "figma:asset/logo.svg";
import expoImage from "figma:asset/art.png";
import foodImage from "figma:asset/drinks.png";
import concertImage from "figma:asset/party.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Palette, Lightbulb, Music } from "lucide-react";

export function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-[#669bbb] min-h-screen pb-20">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-32">
        <img src={logo} alt="InSpot" className="w-full max-w-2xl mx-auto mb-6" />
        <p className="text-xl md:text-2xl mb-8 opacity-90">{t("home.hero.subtitle")}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2 text-lg">
            <Calendar className="size-5" />
            <span>{t("common.date")}</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/50" />
          <div className="flex items-center gap-2 text-lg">
            <MapPin className="size-5" />
            <span>{t("common.location")}</span>
          </div>
        </div>

        {/* Concert Lineup */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-col gap-3">
            {/* LIGHTSPEED */}
            <Link
              to="/avondconcert#lightspeed"
              className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center justify-center px-3 py-2 sm:px-6 sm:py-5 rounded-full bg-[#fef0d6] text-[#002F49] font-bold text-sm sm:text-base">
                23:00
              </div>
              <div className="flex items-center justify-center px-3 py-2 sm:px-8 sm:py-4 bg-[#002F49] text-white rounded-full font-bold text-base sm:text-xl">
                LIGHTSPEED
              </div>
            </Link>

            {/* Blue Robin and The Dripping Sun - side by side */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Link
                to="/avondconcert#blue-robin"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center justify-center px-3 py-2 sm:px-6 sm:py-5 rounded-full bg-[#fef0d6] text-[#002F49] font-bold text-sm sm:text-base">
                  21:30
                </div>
                <div className="flex items-center justify-center px-3 py-2 sm:px-8 sm:py-4 bg-[#002F49] text-white rounded-full font-bold text-base sm:text-xl">
                  Blue Robin
                </div>
              </Link>

              <Link
                to="/avondconcert#the-dripping-sun"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center justify-center px-3 py-2 sm:px-8 sm:py-4 bg-[#002F49] text-white rounded-full font-bold text-base sm:text-xl">
                  The Dripping Sun
                </div>
                <div className="flex items-center justify-center px-3 py-2 sm:px-6 sm:py-5 rounded-full bg-[#fef0d6] text-[#002F49] font-bold text-sm sm:text-base">
                  19:45
                </div>
              </Link>
            </div>

            {/* Blue Gate */}
            <Link
              to="/avondconcert#blue-gate"
              className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center justify-center px-3 py-2 sm:px-8 sm:py-4 bg-[#002F49] text-white rounded-full font-bold text-base sm:text-xl">
                Blue Gate
              </div>
              <div className="flex items-center justify-center px-3 py-2 sm:px-6 sm:py-5 rounded-full bg-[#fef0d6] text-[#002F49] font-bold text-sm sm:text-base">
                18:45
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            to="/praktisch"
            className="px-8 py-3 bg-[#fef0d6] text-[#77160e] rounded-full hover:bg-[#fef0d6]/90 transition-colors inline-block font-medium"
          >
            {t("common.moreInfo")}
          </Link>
          <a
            href="https://my.weezevent.com/inspot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#c11720] text-white rounded-full hover:bg-[#a1131a] transition-colors inline-block font-medium shadow-lg"
          >
            {t("common.buyTickets")}
          </a>
        </div>
      </div>

      {/* Program Section - Directly below buttons */}
      <div id="program" className="relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/kunstexposities"
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-left w-full group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <ImageWithFallback
                  src={expoImage}
                  alt="Expo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center bg-[#77160e]">
                  <Palette className="size-6 text-white" />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="mb-3">{t("home.program.expo.title")}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{t("home.program.expo.desc")}</p>
                <div className="mt-auto">
                  <div className="px-4 py-2 bg-[#c11720] text-white rounded-full text-center hover:bg-[#a1131a] transition-colors inline-block text-sm font-medium w-full sm:w-auto">
                    {t("common.moreInfo")}
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="/food-and-drinks"
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-left w-full group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <ImageWithFallback
                  src={foodImage}
                  alt="Food and Drinks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center bg-[#c11720]">
                  <Lightbulb className="size-6 text-white" />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="mb-3">{t("home.program.food.title")}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{t("home.program.food.desc")}</p>
                <div className="mt-auto">
                  <div className="px-4 py-2 bg-[#c11720] text-white rounded-full text-center hover:bg-[#a1131a] transition-colors inline-block text-sm font-medium w-full sm:w-auto">
                    {t("common.moreInfo")}
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="/avondconcert"
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-left w-full group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <ImageWithFallback
                  src={concertImage}
                  alt="Concert"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center bg-[#002F49]">
                  <Music className="size-6 text-white" />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="mb-3">{t("home.program.concert.title")}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{t("home.program.concert.desc")}</p>
                <div className="mt-auto">
                  <div className="px-4 py-2 bg-[#c11720] text-white rounded-full text-center hover:bg-[#a1131a] transition-colors inline-block text-sm font-medium w-full sm:w-auto">
                    {t("common.moreInfo")}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
