import { Briefcase, Music2, Wine, Mail, Flame, Heart, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";

export function VoorBedrijvenPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Voor bedrijven"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#77160e] mb-6">
              <Briefcase className="size-10" />
            </div>
            <h1 className="text-white mb-4">
              {language === 'nl' ? 'Voor bedrijven' : 'For companies'}
            </h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              {language === 'nl' 
                ? 'Op zoek naar een unieke teambuilding? Boek nu uw plekje op InSpot!' 
                : 'Looking for a unique teambuilding? Book your spot on InSpot now!'}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
            {language === 'nl'
              ? 'Bent u met uw bedrijf op zoek naar een unieke teambuilding, waarbij u van begin tot einde op uw wenken bediend wordt? Lees dan snel verder!'
              : 'Is your company looking for a unique teambuilding where you are served from start to finish? Read on!'}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Music2 className="size-8 text-[#77160e]" />
                <h3 className="mb-0 text-[#77160e]"><b>{language === 'nl' ? 'Burlesque dansen' : 'Burlesque dancing'}</b></h3>
              </div>
              <p className="text-gray-700 mb-0">
                {language === 'nl'
                  ? 'Deze workshop legt de nadruk op het bouwen van zelfvertrouwen tijdens het dansen op hakken.'
                  : 'This workshop emphasizes building self-confidence while dancing on heels.'}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Wine className="size-8 text-[#77160e]" />
                <h3 className="mb-0 text-[#77160e]"><b>Cocktail/mocktail</b></h3>
              </div>
              <p className="text-gray-700 mb-0">
                {language === 'nl'
                  ? 'Hier krijg je een professionele uitleg hoe je een cocktail en/of een mocktail kan maken.'
                  : 'Here you get a professional explanation of how to make a cocktail and/or mocktail.'}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="size-8 text-[#77160e]" />
                <h3 className="mb-0 text-[#77160e]">
                  <s><b>{language === 'nl' ? 'Houtbranden' : 'Wood burning'}</b></s> {language === 'nl' ? 'Gekozen!' : 'Chosen!'}
                </h3>
              </div>
              <p className="text-gray-700 mb-0">
                {language === 'nl'
                  ? 'Leer houtbranden op een kleine tapasplank of een wijnhouder die je dan mee mag nemen naar huis.'
                  : 'Learn wood burning on a small tapas board or a wine holder that you can then take home.'}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="size-8 text-[#77160e]" />
                <h3 className="mb-0 text-[#77160e]"><b>Yoga</b></h3>
              </div>
              <p className="text-gray-700 mb-0">
                {language === 'nl'
                  ? 'Geniet van een workshop waar je alleen even moet concentreren op je eigen lichaam en niets anders dan dat.'
                  : 'Enjoy a workshop where you only have to focus on your own body and nothing else.'}
              </p>
            </div>
          </div>
          
          <h2 className="mb-4 text-[#77160e] text-center text-4xl md:text-5xl">
            {language === 'nl' ? <>Kies voor een <b>all-in formule!</b></> : <>Choose an <b>all-in formula!</b></>}
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {language === 'nl'
              ? 'Aan bedrijven bieden wij de unieke kans om in deze setting een teambuildingevent te hosten. Wij nemen de volledige organisatie op ons, u kan zorgeloos genieten met uw team. Voor een pakketprijs van 75 euro per persoon (minimum 10 deelnemers), kan u rekenen op:'
              : 'We offer companies the unique opportunity to host a teambuilding event in this setting. We take on the full organization, so you can enjoy worry-free with your team. For a package price of 75 euros per person (minimum 10 participants), you can count on:'}
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>{language === 'nl' ? <>Aperitief met <b>tapasplank</b>: vanaf 17u30</> : <>Aperitif with <b>tapas board</b>: from 5:30 PM</>}</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>{language === 'nl' ? <>Een <b>inspirerende workshop</b>, exclusief voor uw team: van 18u00 tot 20u00</> : <>An <b>inspiring workshop</b>, exclusive to your team: from 6:00 PM to 8:00 PM</>}</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>{language === 'nl' ? <>Een <b>pastamaaltijd</b> om 20u00</> : <>A <b>pasta meal</b> at 8:00 PM</>}</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>{language === 'nl' ? <><b>Gratis toegang</b> tot de geplande concerten: vanaf 20u00</> : <><b>Free access</b> to the planned concerts: from 8:00 PM</>}</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>{language === 'nl' ? <>Toegang to de <b>InSpot-expositie</b> (doorlopend)</> : <>Access to the <b>InSpot exhibition</b> (continuous)</>}</span>
            </li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-[#669bbb] p-6 rounded-lg mb-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="size-6 text-[#669bbb] flex-shrink-0 mt-1" />
              <p className="text-gray-700 mb-0">
                <strong>Tip:</strong> {language === 'nl' 
                  ? <>zin om al vroeger in de sfeer te komen? Zak dan al vroeger af naar het Entrepot af en pik het <b>Happy Hour </b>(16u30 - 17u30) mee!</>
                  : <>feel like getting into the mood earlier? Head over to Het Entrepot early and catch the <b>Happy Hour</b> (4:30 PM - 5:30 PM)!</>}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#77160e] to-[#c11720] p-10 rounded-2xl text-white mt-12 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Mail className="size-10 flex-shrink-0" />
              <div>
                <h3 className="mb-3 text-white">{language === 'nl' ? 'Neem contact op' : 'Get in touch'}</h3>
                <p className="mb-6 text-white/90">
                  {language === 'nl'
                    ? 'Heeft u specifieke wensen of nog vragen? Dan staan wij uiteraard open om samen met u een formule op maat van uw bedrijf uit te werken. We hebben plaats voor een beperkt aantal bedrijven. Heeft u interesse, laat ons dit dan snel weten via onze mail!'
                    : 'Do you have specific wishes or questions? We are of course open to working with you to develop a formula tailored to your company. We have space for a limited number of companies. If you are interested, let us know quickly via our email!'}
                </p>
                <a 
                  href="mailto:inspot.scmc@outlook.be" 
                  className="inline-block bg-white text-[#77160e] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  inspot.scmc@outlook.be
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
