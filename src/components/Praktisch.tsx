import { Calendar, Clock, MapPin, Euro, Accessibility, Car, Train, Bike } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Praktisch() {
  const { language, t } = useLanguage();

  return (
    <section id="praktisch" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[#77160e] text-3xl md:text-4xl">
            {language === 'nl' ? 'Praktische Informatie' : 'Practical Information'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'nl' 
              ? 'Alle praktische informatie voor je bezoek aan InSpot 2026'
              : 'All practical information for your visit to InSpot 2026'}
          </p>
        </div>

        <div className="mb-12 p-8 bg-gradient-to-r from-[#77160e] to-[#c11720] rounded-2xl text-white text-center">
          <h3 className="mb-3 text-white"><b>{language === 'nl' ? 'Tijdschema' : 'Schedule'}</b></h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="opacity-90">{language === 'nl' ? 'Timing later bekend' : 'Timing announced later'}</div>
              <div>{language === 'nl' ? 'Expo' : 'Exhibition'}</div>
            </div>
            <div>
              <div className="opacity-90">{language === 'nl' ? 'Timing later bekend' : 'Timing announced later'}</div>
              <div>Food and Drinks</div>
            </div>
            <div>
              <div className="opacity-90">{language === 'nl' ? 'Timing later bekend' : 'Timing announced later'}</div>
              <div>{language === 'nl' ? 'Concert' : 'Concert'}</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-[#fef0d6] rounded-full flex items-center justify-center mb-4">
              <Calendar className="size-6 text-[#77160e]" />
            </div>
            <h3 className="mb-2"><b>{language === 'nl' ? 'Datum & Tijd' : 'Date & Time'}</b></h3>
            <p className="text-gray-600">{t('common.date')}</p>
            <p className="text-gray-600">{language === 'nl' ? 'Vanaf 12u30!' : 'Starting from 12:30 PM!'}</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-[#fef0d6] rounded-full flex items-center justify-center mb-4">
              <MapPin className="size-6 text-[#c11720]" />
            </div>
            <h3 className="mb-2"><b>{language === 'nl' ? 'Locatie' : 'Location'}</b></h3>
            <p className="text-gray-600">{t('common.location')}</p>
            <p className="text-gray-600">Binnenweg 4</p>
            <p className="text-gray-600">8000 {language === 'nl' ? 'Brugge' : 'Bruges'}</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-[#fef0d6] rounded-full flex items-center justify-center mb-4">
              <Euro className="size-6 text-[#002F49]" />
            </div>
            <h3 className="mb-2"><b>{language === 'nl' ? 'Toegang' : 'Access'}</b></h3>
            <p className="text-gray-600">
              {language === 'nl' ? 'Gratis entree voor de expo' : 'Free entrance for the exhibition'}
            </p>
            <p className="text-gray-600">
              {language === 'nl' ? 'Workshops voor bedrijven: neem contact op' : 'Workshops for companies: contact us'}
            </p>
            <p className="text-gray-600">
              {language === 'nl' ? 'Concert: €8 studenten, €12 regulier' : 'Concert: €8 students, €12 regular'}
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-6 text-center text-3xl md:text-4xl text-[#77160e]">
            {language === 'nl' ? 'Bereikbaarheid' : 'Accessibility & Transport'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Car className="size-6 text-[#77160e]" />
                <h4><b>{language === 'nl' ? 'Met de auto' : 'By car'}</b></h4>
              </div>
              <p className="text-gray-600 text-sm">
                {language === 'nl' 
                  ? 'Gratis parkeren bij Het Entrepot (3 rolstoelvriendelijke plaatsen) of openbare parking Randparking Coiseaukaai.'
                  : 'Free parking at Het Entrepot (3 wheelchair-friendly spaces) or public parking Randparking Coiseaukaai.'}
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Train className="size-6 text-[#c11720]" />
                <h4><b>{language === 'nl' ? 'Met het openbaar vervoer' : 'By public transport'}</b></h4>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {language === 'nl'
                  ? 'Bus 2 Sint-Jozef P+R Coiseaukaai stopt op 180m van de ingang. Buslijnen 6, 42 en 421, Sint-Jozef Krommestraat, stoppen op 450m van de ingang.'
                  : 'Bus 2 Sint-Jozef P+R Coiseaukaai stops at 180m from the entrance. Bus lines 6, 42 and 421, Sint-Jozef Krommestraat, stop at 450m from the entrance.'}
              </p>
              <a 
                href="https://www.delijn.be/nl/routeplanner/?aankomst=Reg.+Centr.+Jongerencult.+Entrepot+%28Het+Entrepot%29&aankomstLn=3.2258&aankomstLt=51.22606&aankomstId=aGVyZTpwZHM6cGxhY2U6MDU2dTE0NzMtZmVjMDg3NmNkYmYyNDM2ZDgzZTZlNDExM2M1NzE5Njc_&aankomstType=AutosuggestEntity&aankomstLocatieType=place&aankomstAdres=Binnenweg+4%2C+8000+Brugge%2C+België"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c11720] hover:underline text-sm font-medium"
              >
                {language === 'nl' ? 'Plan hier je route' : 'Plan your route here'}
              </a>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Bike className="size-6 text-[#002F49]" />
                <h4><b>{language === 'nl' ? 'Met de fiets' : 'By bike'}</b></h4>
              </div>
              <p className="text-gray-600 text-sm">
                {language === 'nl'
                  ? 'Deels overdekte en bewaakte fietsenstalling beschikbaar. Aparte plaatsen voorzien voor bakfietsen.'
                  : 'Partly covered and guarded bicycle storage available. Separate spaces provided for cargo bikes.'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-gradient-to-r from-[#fef0d6] to-[#fef0d6]/50 rounded-2xl h-full">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#77160e] rounded-full flex items-center justify-center flex-shrink-0">
                <Accessibility className="size-6 text-white" />
              </div>
              <div>
                <h3 className="mb-3">{language === 'nl' ? 'Toegankelijkheid' : 'Accessibility'}</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  {language === 'nl'
                    ? 'InSpot is volledig toegankelijk voor bezoekers met een beperking. Het Entrepot heeft verschillende voorzieningen om iedereen een comfortabel bezoek te garanderen.'
                    : 'InSpot is fully accessible for visitors with disabilities. Het Entrepot has various facilities to guarantee everyone a comfortable visit.'}
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• {language === 'nl' ? 'Rolstoeltoegankelijk (lift aanwezig)' : 'Wheelchair accessible (lift present)'}</li>
                  <li>• {language === 'nl' ? 'Toegankelijke toiletten' : 'Accessible toilets'}</li>
                  <li>• {language === 'nl' ? 'Assistentiehonden welkom' : 'Assistance dogs welcome'}</li>
                  <li>• {language === 'nl' ? 'Rustige ruimte beschikbaar' : 'Quiet room available'}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md h-full min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.3487846384815!2d3.2176869999999997!3d51.214392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c350fb3cbf96e5%3A0x8d1c8e8c8c8c8c8c!2sBinnenweg%204%2C%208000%20Brugge%2C%20Belgium!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Het Entrepot"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://inspot.weticket.io/inspot/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#c11720] text-white rounded-full font-medium hover:bg-[#a1131a] transition-colors shadow-lg"
          >
            {t('common.buyTickets')}
          </a>
        </div>
      </div>
    </section>
  );
}
