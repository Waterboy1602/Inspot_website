import { Music, Clock, MapPin, ArrowLeft, Instagram } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import concertImage from "figma:asset/party.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useEffect } from "react";

// Spotify icon component (lucide-react doesn't have Spotify)
const SpotifyIcon = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const FacebookBrandIcon = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.016 4.388 10.998 10.125 11.853v-8.437H7.078v-3.416h3.047V9.466c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.49 0-1.955.931-1.955 1.887v2.201h3.328l-.532 3.416h-2.796v8.437C19.612 23.071 24 18.089 24 12.073z" />
  </svg>
);

export function AvondconcertPage() {
  const { language, t } = useLanguage();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.split("#").pop();
      setTimeout(() => {
        const element = document.getElementById(id!);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - 100,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);

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
            <span>18:00 - ...</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-5" />
            <span>{language === "nl" ? "Grote zaal" : "Main hall"}</span>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {language === "nl"
              ? "Sluit de dag af met live optredens van de meest veelbelovende muzikanten."
              : "End the day with live performances from the most promising musicians."}
          </p>

          <h3 className="mb-4 text-[#002F49]">
            <b>Line-up</b>
          </h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>18:00 - 18:30 Trompetspelers </span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>18:45 - 19:15 Blue Gate</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>19:45 - 20:45 The Dripping Sun</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>21:30 - 22:15 Blue Robin</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>23:00 - 00:00 LIGHTSPEED</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>
                {language === "nl" ? "Afsluit: Radio Achterhaald" : "Sign-off: Radio Achterhaald"}
              </span>
            </li>
          </ul>

          {/* Artist lineup */}
          <div className="mt-12 space-y-10">
            {/* LIGHTSPEED 23:00 */}
            <div id="lightspeed" className="border-t border-gray-200 pt-12">
              <h2 className="mb-6 text-[36px]">
                <span className="font-bold">LIGHTSPEED - 23:00</span>
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {language === "nl"
                  ? "Nieuwe Lichting finalist LIGHTSPEED is het project rond songwriter Rik Bontinck. Onder een blend van melancholie en bravoure serveert de band een bezweet salvo aan onstuimige indierock. Dat het viertal bovendien gedreven wordt door een hoop extravagante gitaren, existentieel gepreek en de geboden van een zootje overzeese zondaars, beukt alvast zonder al te veel pardon naar binnen. Kort samengevat: indie met losse veters en een ietwat hardnekkige hekel aan snelheidsbeperkingen - niets dat verkeerd kan gaan dus."
                  : "Nieuwe Lichting finalist LIGHTSPEED is the project around songwriter Rik Bontinck. Under a blend of melancholy and bravado, the band serves a sweaty salvo of impetuous indie rock. The fact that the quartet is also driven by a lot of extravagant guitars, existential preaching and the commandments of a bunch of overseas sinners, pounds in without too much pardon. In short: indie with loose laces and a somewhat stubborn aversion to speed limits - nothing that can go wrong."}
              </p>
              <div className="flex gap-4 mb-4">
                <a
                  href="https://www.instagram.com/lightspeed.band?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#c11720] transition-colors"
                >
                  <Instagram className="size-6" />
                </a>
                <a
                  href="https://www.facebook.com/lightspeed.band.be/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#c11720] transition-colors"
                >
                  <FacebookBrandIcon />
                </a>
                <a
                  href="https://open.spotify.com/artist/6AKqwXVRN32svEj6t8gD3Q?si=-sFDxOIWQ8-de2_EW3qf4A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#c11720] transition-colors"
                >
                  <SpotifyIcon />
                </a>
              </div>
              <div className="mt-6">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/X2iXrM8-Was"
                  title="LIGHTSPEED video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Blue Robin 21:30 */}
            <div id="blue-robin" className="border-t border-gray-200 pt-12 mt-8">
              <h2 className="mb-6 text-[36px]">
                <span className="font-bold">Blue Robin - 21:30</span>
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {language === "nl"
                  ? "Blue Robin zweeft door de ether van de indie en dreampop. Hun geluid is een delicate dans tussen melancholie en drama, een samensmelting die je meeneemt naar een totaal andere wereld. Met inspiraties zoals Florence & The Machine, Tamino en Daughter. Als je verder kijkt dan de metaforen vind je de persoonlijke verhalen van Lore terug. De thema's zijn meestal verbonden met hun queer identiteit."
                  : "Blue Robin floats through the ether of indie and dreampop. Their sound is a delicate dance between melancholy and drama, a fusion that takes you to a completely different world. With inspirations such as Florence & The Machine, Tamino and Daughter. If you look beyond the metaphors you will find Lore's personal stories. The themes are usually connected to their queer identity."}
              </p>
              <div className="flex gap-4  mb-4">
                <a
                  href="https://www.instagram.com/bluerobin_band?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#c11720] transition-colors"
                >
                  <Instagram className="size-6" />
                </a>
                <a
                  href="https://www.facebook.com/bluerobin1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#c11720] transition-colors"
                >
                  <FacebookBrandIcon />
                </a>
                <a
                  href="https://open.spotify.com/artist/6LtKLlHgeRrs4nJFahntFs?si=1dhpah6NR5GkRKbMxmqOZw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#c11720] transition-colors"
                >
                  <SpotifyIcon />
                </a>
              </div>
              <div className="mt-6">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/iQWTcI2Eb5M"
                  title="Blue Robin video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* The Dripping Sun 19:45 */}
            <div id="the-dripping-sun" className="border-t border-gray-200 pt-12 mt-8">
              <h2 className="mb-6 text-[36px]">
                <span className="font-bold">The Dripping Sun - 19:45</span>
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {language === "nl"
                  ? "The Dripping Sun is een viertal dat sinds 2023 podia doorheen West-Vlaanderen onveilig maakt met hun stevige gitaarrock. Ze mochten onder meer al openen voor Edje Ska en brachten een unieke vibe op het 30ste verjaardagsfeestje van The Noodle. Met hun debuutplaat Universe 26 onder de arm komen op InSpot ook jouw zieltje voor zich winnen."
                  : "The Dripping Sun is a quartet that has been rocking stages throughout West Flanders since 2023 with their solid guitar rock. They have opened for Edje Ska and brought a unique vibe to The Noodle's 30th anniversary party. With their debut album Universe 26 under their arm, they come to InSpot to win your soul too."}
              </p>
              <div className="flex gap-4  mb-4">
                <a
                  href="https://www.instagram.com/the.dripping.sun?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#c11720] transition-colors"
                >
                  <Instagram className="size-6" />
                </a>
                <a
                  href="https://open.spotify.com/artist/3iBYzrHSBuwBeKAhgQjza8?si=2TgTFR2HSYKL76VHKn8yGg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#c11720] transition-colors"
                >
                  <SpotifyIcon />
                </a>
              </div>
            </div>

            {/* Blue Gate 18:45 */}
            <div id="blue-gate" className="border-t border-gray-200 pt-12 mt-8">
              <h2 className="mb-6 text-[36px]">
                <span className="font-bold">Blue Gate - 18:45</span>
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {language === "nl"
                  ? "Blue Gate is een vierkoppige band uit het exotische Ichtegem. Deze uit de kluiten gewassen tieners en prille twintigers zijn klaar om de wereld te veroveren. Tijdens InSpot presenteren ze hun plannen voor werelddominantie in absolute première. Met een eigenwijze selectie van classics – stuk voor stuk alternatieve rockpareltjes – zetten ze Het Entrepot in sneltempo in de fik."
                  : "Blue Gate is a four-piece band from the exotic Ichtegem. These burly teenagers and young twentysomethings are ready to conquer the world. During InSpot they present their plans for world domination in absolute premiere. With a bold selection of classics – all alternative rock gems – they set Het Entrepot on fire in no time."}
              </p>
            </div>

            {/* Pair of Trumpets 18:00 */}
            <div id="pair-of-trumpets" className="border-t border-gray-200 pt-12 mt-8">
              <h2 className="mb-6 text-[36px]">
                <span className="font-bold">Pair of Trumpets - 18:00</span>
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {language === "nl"
                  ? "Pair of Trumpets is een duo aan koperblazers, bestaande uit trompettist Floris en hoorniste Herlinde, een broer en zus met een passie voor muziek. Met hun energieke performance zorgen ze meteen voor de juiste sfeer van de avond."
                  : "Pair of Trumpets is a brass duo, consisting of trumpeter Floris and horn player Herlinde, a brother and sister with a passion for music. With their energetic performance, they immediately set the right mood for the evening."}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://my.weezevent.com/inspot"
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
