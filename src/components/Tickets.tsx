import { Ticket, Check, ExternalLink } from "lucide-react";

export function Tickets() {
  // Externe ticketing URL
  const TICKETING_URL = "https://inspot.weticket.io/inspot/shop";

  const ticketOptions = [
    {
      title: "Gratis Toegang",
      price: "Gratis",
      description: "Toegang tot het hele evenement",
      features: [
        "Toegang kunstexposities",
        "Toegang food & drinks area",
        "Toegang tot alle publieke ruimtes",
        "Rondleidingen (op aanvraag)"
      ],
      highlight: false
    },
    {
      title: "Concert Ticket",
      price: "€8 - €12",
      description: "Toegang tot het avondconcert",
      features: [
        "Alle voordelen gratis toegang",
        "Toegang avondconcert (19:00-22:00)",
        "€8 voor studenten (met kaart)",
        "€12 regulier tarief",
        "Intieme setting (beperkte capaciteit)",
      ],
      highlight: true
    }
  ];

  return (
    <section id="tickets" className="py-20 px-4 bg-gradient-to-br from-[#77160e] via-[#c11720] to-[#002F49]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Ticket className="size-8 text-white" />
          </div>
          <h2 className="mb-4 text-white">Tickets</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Kies je ticket en maak je dag op Inspot compleet. De basis toegang is gratis, 
            upgrade voor workshops en het concert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ticketOptions.map((option, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 ${
                option.highlight 
                  ? "ring-4 ring-[#fef0d6] shadow-2xl transform md:scale-105" 
                  : "shadow-lg"
              }`}
            >
              {option.highlight && (
                <div className="inline-block px-4 py-1 bg-[#c11720] text-white rounded-full text-sm mb-4">
                  Populair
                </div>
              )}
              <h3 className="mb-2 text-[#77160e]">{option.title}</h3>
              <div className="mb-2">
                <span className="text-3xl text-[#77160e]">{option.price}</span>
              </div>
              <p className="text-gray-600 mb-6 pb-6 border-b border-gray-200">
                {option.description}
              </p>
              <ul className="space-y-3 mb-8">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="size-5 text-[#c11720] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
          <h3 className="mb-4 text-white">Bestel je tickets</h3>
          <p className="mb-6 text-white/90 max-w-2xl mx-auto">
            Tickets worden verkocht via onze ticketing partner. Klik op de knop hieronder 
            om doorgestuurd te worden naar het bestelformulier.
          </p>
          <a
            href={TICKETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#fef0d6] text-[#77160e] rounded-full hover:bg-[#fef0d6]/90 transition-all transform hover:scale-105 shadow-lg"
          >
            <Ticket className="size-5" />
            <span>Tickets kopen</span>
            <ExternalLink className="size-4" />
          </a>
          <p className="mt-6 text-sm text-white/70">
            Je wordt doorgestuurd naar onze ticketing partner
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-white">
          <div className="text-center">
            <h4 className="mb-2 text-white">Veilig betalen</h4>
            <p className="text-sm text-white/80">
              Alle gangbare betaalmethoden worden geaccepteerd
            </p>
          </div>
          <div className="text-center">
            <h4 className="mb-2 text-white">Direct bevestiging</h4>
            <p className="text-sm text-white/80">
              Ontvang je tickets direct per e-mail
            </p>
          </div>
          <div className="text-center">
            <h4 className="mb-2 text-white">Flexibel annuleren</h4>
            <p className="text-sm text-white/80">
              Tot 48 uur van tevoren kosteloos annuleren
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
