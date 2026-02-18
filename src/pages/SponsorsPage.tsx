import { Heart, Mail } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";
import logo1 from "figma:asset/teledesk.png";
import vives from "figma:asset/entrepot.png";
import cm from "figma:asset/cm.png";
const entrepot =
  "https://images.unsplash.com/photo-1557821552-17105176677c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function SponsorsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Sponsors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#77160e] mb-4 md:mb-6">
              <Heart className="size-7 md:size-10" />
            </div>
            <h1 className="text-white mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
              {t("sponsors.title")}
            </h1>
            <p className="text-base md:text-xl max-w-2xl mx-auto">{t("sponsors.subtitle")}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-12 leading-relaxed text-center">
            {t("sponsors.intro")}
          </p>

          <h2 className="mb-12 text-[#77160e] text-center text-3xl md:text-4xl">
            {t("sponsors.sponsorsTitle")}
          </h2>

          <div className="flex justify-center mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center max-w-sm w-full h-48">
              <img
                src={logo1}
                alt="Teledesk Group"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          <h2 className="mb-12 text-[#77160e] text-center text-3xl md:text-4xl">
            {t("sponsors.partnersTitle")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center h-48">
              <img
                src={entrepot}
                alt="Het Entrepot"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center h-48">
              <img src={vives} alt="VIVES" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center h-48">
              <img
                src={cm}
                alt="Christelijke Mutualiteit"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#77160e] to-[#c11720] p-10 rounded-2xl text-white mt-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
              <Mail className="size-10 flex-shrink-0" />
              <div>
                <h3 className="mb-3 text-white">{t("common.interestSponsoring")}</h3>
                <p className="mb-6 text-white/90">{t("common.interestSponsoringDesc")}</p>
                <a
                  href={`mailto:${t("common.contactEmail")}`}
                  className="inline-block bg-white text-[#77160e] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  {t("sponsors.contactBtn")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
