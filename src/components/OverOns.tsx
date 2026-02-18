import { Sparkles, Users, Heart } from "lucide-react";
import teamPhoto from "figma:asset/groepsfoto.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";

export function OverOns() {
  const { language } = useLanguage();

  return (
    <section id="over-ons" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[#77160e] text-3xl md:text-4xl">
            {language === "nl" ? "Over InSpot" : "About InSpot"}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === "nl"
              ? "InSpot is meer dan een evenement! Het is een viering van lokaal talent, creativiteit en gemeenschap. Een dag vol inspiratie waar kunst, muziek en culinaire ervaringen samenkomen."
              : "InSpot is more than an event! It is a celebration of local talent, creativity, and community. A day full of inspiration where art, music, and culinary experiences come together."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#fef0d6] text-[#77160e] mb-4">
              <Sparkles className="size-8" />
            </div>
            <h3 className="mb-3">{language === "nl" ? "Inspiratie" : "Inspiration"}</h3>
            <p className="text-gray-600">
              {language === "nl"
                ? "Ontdek nieuw talent en laat je inspireren door lokale kunstenaars en hun unieke creaties."
                : "Discover new talent and be inspired by local artists and their unique creations."}
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#fef0d6] text-[#c11720] mb-4">
              <Users className="size-8" />
            </div>
            <h3 className="mb-3">{language === "nl" ? "Voor Bedrijven" : "For Companies"}</h3>
            <p className="text-gray-600">
              {language === "nl"
                ? "Speciale teambuilding formules voor bedrijven met exclusieve workshops."
                : "Special teambuilding packages for companies with exclusive workshops."}
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#fef0d6] text-[#002F49] mb-4">
              <Heart className="size-8" />
            </div>
            <h3 className="mb-3">Live</h3>
            <p className="text-gray-600">
              {language === "nl"
                ? "Geniet van livemuziek door verschillende opkomende artiesten!"
                : "Enjoy live music from various emerging artists!"}
            </p>
          </div>
        </div>

        {/* Wie zijn wij sectie */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="mb-4 text-[#77160e] text-3xl md:text-4xl">
              {language === "nl" ? "Wie zijn wij?" : "Who are we?"}
            </h3>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {language === "nl" ? (
                <>
                  InSpot is een evenement van tweedejaarsstudenten{" "}
                  <a
                    href="https://www.vives.be/nl/handelswetenschappen-en-bedrijfskunde/cultuurmanagement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c11720] hover:underline font-semibold"
                  >
                    Cultuurmanagement
                  </a>{" "}
                  uit VIVES Brugge.
                </>
              ) : (
                <>
                  InSpot is an event organized by second-year{" "}
                  <a
                    href="https://www.vives.be/nl/handelswetenschappen-en-bedrijfskunde/cultuurmanagement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c11720] hover:underline font-semibold"
                  >
                    Culture Management
                  </a>{" "}
                  students from VIVES Bruges.
                </>
              )}
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {language === "nl"
                ? "Ons team bestaat uit enthousiaste studenten met verschillende interesses en sterktes. Samen delen we éen doel: een inspirerende dag organiseren waar lokaal en opkomend talent centraal staat."
                : "Our team consists of enthusiastic students with various interests and strengths. Together, we share one goal: to organize an inspiring day centered around local and emerging talent."}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              {language === "nl"
                ? "Met InSpot willen we niet alleen een podium bieden aan lokale artiesten, maar ook bezoekers inspireren om hun eigen creativiteit te ontdekken."
                : "With InSpot, we want to not only provide a stage for local artists but also inspire visitors to discover their own creativity."}
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
            <ImageWithFallback
              src={teamPhoto}
              alt={
                language === "nl"
                  ? "InSpot Team - Studenten Cultuurmanagement VIVES Brugge"
                  : "InSpot Team - Culture Management Students VIVES Bruges"
              }
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
