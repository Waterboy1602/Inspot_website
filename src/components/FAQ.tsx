import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const TICKETING_URL = "https://inspot.weticket.io/inspot/shop";

interface FAQCategory {
  title: string;
  faqs: FAQItem[];
}

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language, t } = useLanguage();

  const faqData: Record<string, FAQCategory[]> = {
    nl: [
      {
        title: "Praktisch",
        faqs: [
          {
            question: "Moet ik van tevoren tickets kopen?",
            answer: (
              <div>
                <p className="mb-4">
                  Nee, het is niet noodzakelijk om van tevoren tickets te kopen. Je kan ook aan de
                  deur tickets kopen. Echter zijn de plaatsen beperkt en raden we aan om op voorhand
                  tickets te kopen om teleurstelling te voorkomen. Indien het uitverkocht is zal dit
                  duidelijk vermeld staan op de website.
                </p>
                <a
                  href={TICKETING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-[#c11720] text-white rounded-full text-sm font-medium hover:bg-[#a1131a] transition-colors"
                >
                  Tickets kopen
                </a>
              </div>
            ),
          },
          {
            question: "Is er parkeergelegenheid?",
            answer:
              "Ja, je kan gratis parkeren bij Het Entrepot. Er zijn drie rolstoeltoegankelijke parkeerplaatsen voorzien. Is de parking volzet, dan kan je op de gratis openbare Randparking Coiseaukaai parkeren. Ook is er een bewaakte fietsenstalling aanwezig. Het evenement is goed bereikbaar met het openbaar vervoer.",
          },
          {
            question: "Is er eten en drinken op het evenement?",
            answer:
              "Ja, er zullen pasta en versnaperingen te krijgen zijn. De bar is de doorlopend geopend.",
          },
        ],
      },
      {
        title: "Workshops",
        faqs: [
          {
            question: "Kan ik als particulier deelnemen aan de workshops?",
            answer: "Neen, helaas zijn al onze workshops enkel toegankelijk voor bedrijven.",
          },
          {
            question: "Hoe kan ik als bedrijf een workshop boeken?",
            answer:
              "Om als bedrijf deel te nemen aan een van onze workshops kan je contact opnemen met ons via info@inspot.be.",
          },
        ],
      },
      {
        title: "Concert",
        faqs: [
          {
            question: "Wat kost het concert?",
            answer: (
              <div>
                <p className="mb-4">
                  Voor studenten kost het concert €8 in voorverkoop. Hiervoor heb je een studenten-
                  of leerlingenkaart nodig. De reguliere tickets (niet-studenten) kosten €12 in
                  voorverkoop. Tickets kunnen online of aan de deur worden gekocht. Let op dat de
                  online ticketverkoop 1 dag voor het concert stopt. Tickets die aan de deur gekocht
                  worden zullen meer kosten. Daarnaast heeft de concertzaal heeft een beperkte
                  capaciteit, dus we raden aan om van tevoren tickets te kopen.
                </p>
                <a
                  href={TICKETING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-[#c11720] text-white rounded-full text-sm font-medium hover:bg-[#a1131a] transition-colors"
                >
                  Tickets kopen
                </a>
              </div>
            ),
          },
          {
            question: "Wanneer wordt de line-up bekend gemaakt?",
            answer: "De volledige line-up voor het concert wordt in februari 2026 bekend gemaakt.",
          },
          {
            question: "Is het concert staand of zittend?",
            answer:
              "Het concert is staand. Heb je vanwege een beperking moeite met lang staan? Neem gerust op voorhand contact op met ons team via mail info@inspot.be, dan kijken we wat er mogelijk is.",
          },
          {
            question: "Help! Ik ben mijn concertticket kwijt. Wat nu?",
            answer:
              "Kan je je bevestigingsmail van je aankoop niet meer terugvinden? Stuur ons dan een mailtje via info@inspot.be met voornaam- en achternaam en e-mailadres op het ticket. Dan kijken wij voor je en verzenden we de bevestigingsmail opnieuw.",
          },
        ],
      },
      {
        title: "Expo",
        faqs: [
          {
            question: "Hoeveel kost de expo?",
            answer: "De expo is voor iedereen gratis te bezoeken.",
          },
          {
            question: "Kan ik kunstwerken kopen tijdens de expositie?",
            answer:
              "Aangezien wij de werken te leen krijgen is er helaas geen mogelijkheid om kunstwerken te kopen.",
          },
          {
            question: "Is fotograferen toegestaan?",
            answer:
              "Fotograferen met een smartphone is toegestaan. Bij sommige kunstwerken kan het zijn dat de kunstenaar geen fotografie toestaat. Dit wordt duidelijk aangegeven. We vragen je om geen flitslicht te gebruiken en respectvol om te gaan met de werken en andere bezoekers.",
          },
          {
            question: "Kan ik mijn werk laten tentoonstellen?",
            answer:
              "Voor onze expositie hebben we lokale artiesten geselecteerd waarvan hun stijl goed bij onze visie past. Omdat dit bewust zo gekozen is, is het helaas niet mogelijk om je aan te melden om werken tentoon te stellen. .",
          },
        ],
      },
      {
        title: "Toegankelijkheid",
        faqs: [
          {
            question: "Is InSpot toegankelijk voor mensen met een beperking?",
            answer:
              "Ja, InSpot is volledig toegankelijk voor bezoekers met een beperking. Het Entrepot is rolstoeltoegankelijk met een aangepaste lift. Er zijn zelfstandig toegankelijke toiletten en assistentiehonden zijn natuurlijk welkom. De toegangspaden en ingang zijn toegankelijk met hulp. Er zijn drie rolstoelvriendelijke parkeerplaatsen voorbehouden. Ook is er een rustige ruimte beschikbaar voor wie even tot rust wil komen.",
          },
          {
            question: "Is er een rustige ruimte beschikbaar?",
            answer:
              "Ja, er is een aparte rustige ruimte beschikbaar voor bezoekers die even tot rust willen komen of overstimuleerd raken. Deze ruimte is de hele dag open en bevindt zich op de eerste verdieping. Vraag de medewerkers bij de informatiebalie naar de locatie.",
          },
          {
            question: "Overige vragen",
            answer:
              "Zijn je vragen in verband met toegankelijkheid hierboven niet (volledig) beantwoord of heb je aanvullende noden of zorgen? Neem gerust contact op met ons via mail info@inspot.be. We kijken graag mee naar de best passende oplossing!",
          },
        ],
      },
      {
        title: "Overig",
        faqs: [
          {
            question: "Is InSpot geschikt voor kinderen?",
            answer:
              "Ja, InSpot is toegankelijk voor alle leeftijden. Echter is ons doelpubliek studenten en jongvolwassenen. De prijs voor kinderen is dezelfde als die voor volwassenen.",
          },
          {
            question: "Kan ik mijn huisdier meenemen?",
            answer:
              "Assistentiehonden zijn van harte welkom. Andere huisdieren kunnen helaas niet mee naar binnen vanwege de drukte en uit respect voor andere bezoekers en de kunstwerken.",
          },
          {
            question: "Mag ik mijn eigen eten en drinken meenemen?",
            answer:
              "Het is niet toegestaan om zelf eten en drinken mee te nemen. Heb je vragen in verband met ons aanbod van eten en drinken? Neem gerust contact met ons op via info@inspot.be.",
          },
          {
            question: "Is er een vestiaire aanwezig?",
            answer: "Ja, er is een vestiaire aanwezig je je jassen en tassen kunt achterlaten.",
          },
        ],
      },
    ],
    en: [
      {
        title: "Practical",
        faqs: [
          {
            question: "Do I need to buy tickets in advance?",
            answer: (
              <div>
                <p className="mb-4">
                  No, it's not necessary to buy tickets in advance. You can also buy tickets at the
                  door. However, places are limited and we recommend buying in advance to avoid
                  disappointment. If it's sold out, it will be clearly stated on the website.
                </p>
                <a
                  href={TICKETING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-[#c11720] text-white rounded-full text-sm font-medium hover:bg-[#a1131a] transition-colors"
                >
                  Buy tickets
                </a>
              </div>
            ),
          },
          {
            question: "Is there parking available?",
            answer:
              "Yes, you can park for free at Het Entrepot. There are three wheelchair-accessible parking spaces provided. If the parking is full, you can park at the free public Randparking Coiseaukaai. There is also a guarded bicycle shed. The event is easily accessible by public transport.",
          },
          {
            question: "Is there food and drink at the event?",
            answer: "Yes, pasta and snacks will be available. The bar is open continuously.",
          },
        ],
      },
      {
        title: "Workshops",
        faqs: [
          {
            question: "Can I participate in the workshops as an individual?",
            answer: "No, unfortunately all our workshops are only accessible to companies.",
          },
          {
            question: "How can I book a workshop as a company?",
            answer:
              "To participate in one of our workshops as a company, you can contact us via info@inspot.be.",
          },
        ],
      },
      {
        title: "Concert",
        faqs: [
          {
            question: "How much does the concert cost?",
            answer: (
              <div>
                <p className="mb-4">
                  For students, the concert costs €8 in presale. You need a student or pupil card
                  for this. Regular tickets (non-students) cost €12 in presale. Tickets can be
                  bought online or at the door. Note that online ticket sales stop 1 day before the
                  concert. Tickets bought at the door will cost more. Additionally, the concert hall
                  has a limited capacity, so we recommend buying tickets in advance.
                </p>
                <a
                  href={TICKETING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-[#c11720] text-white rounded-full text-sm font-medium hover:bg-[#a1131a] transition-colors"
                >
                  Buy tickets
                </a>
              </div>
            ),
          },
          {
            question: "When will the line-up be announced?",
            answer: "The full line-up for the concert will be announced in February 2026.",
          },
          {
            question: "Is the concert standing or seated?",
            answer:
              "The concert is standing. Do you have difficulty standing for long periods due to a disability? Feel free to contact our team in advance via email info@inspot.be, and we will see what is possible.",
          },
          {
            question: "Help! I lost my concert ticket. Now what?",
            answer:
              "Can't find your purchase confirmation email? Send us an email at info@inspot.be with your first name, last name, and the email address on the ticket. We'll look into it for you and resend the confirmation email.",
          },
        ],
      },
      {
        title: "Exhibition",
        faqs: [
          {
            question: "How much does the exhibition cost?",
            answer: "The exhibition is free for everyone to visit.",
          },
          {
            question: "Can I buy artworks during the exhibition?",
            answer:
              "Since we receive the works on loan, there is unfortunately no possibility to buy artworks.",
          },
          {
            question: "Is photography allowed?",
            answer:
              "Photography with a smartphone is allowed. For some artworks, the artist may not allow photography. This will be clearly indicated. We ask you not to use flash and to be respectful of the works and other visitors.",
          },
          {
            question: "Can I have my work exhibited?",
            answer:
              "For our exhibition, we have selected local artists whose style fits well with our vision. Because this was deliberately chosen, it is unfortunately not possible to apply to exhibit works.",
          },
        ],
      },
      {
        title: "Accessibility",
        faqs: [
          {
            question: "Is InSpot accessible for people with disabilities?",
            answer:
              "Yes, InSpot is fully accessible for visitors with disabilities. Het Entrepot is wheelchair accessible with an adapted lift. There are independently accessible toilets and assistance dogs are of course welcome. Access paths and the entrance are accessible with assistance. Three wheelchair-friendly parking spaces are reserved. There is also a quiet room available for those who want to relax for a moment.",
          },
          {
            question: "Is there a quiet room available?",
            answer:
              "Yes, there is a separate quiet room available for visitors who want to relax for a moment or become overstimulated. This room is open all day and is located on the first floor. Ask the staff at the information desk for the location.",
          },
          {
            question: "Other questions",
            answer:
              "Are your accessibility questions above not (fully) answered or do you have additional needs or concerns? Feel free to contact us via email info@inspot.be. We are happy to look for the best fitting solution together!",
          },
        ],
      },
      {
        title: "Other",
        faqs: [
          {
            question: "Is InSpot suitable for children?",
            answer:
              "Yes, InSpot is accessible for all ages. However, our target audience is students and young adults. The price for children is the same as for adults.",
          },
          {
            question: "Can I bring my pet?",
            answer:
              "Assistance dogs are very welcome. Other pets unfortunately cannot be brought inside due to the crowds and out of respect for other visitors and the artworks.",
          },
          {
            question: "Can I bring my own food and drink?",
            answer:
              "It is not allowed to bring your own food and drink. Do you have questions about our food and drink offer? Feel free to contact us via info@inspot.be.",
          },
          {
            question: "Is there a cloakroom present?",
            answer: "Yes, there is a cloakroom where you can leave your coats and bags.",
          },
        ],
      },
    ],
  };

  const categories = faqData[language];

  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[#77160e] text-3xl md:text-4xl">{t("faq.title")}</h2>
          <p className="text-lg text-gray-600">{t("faq.subtitle")}</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(index);
                setOpenIndex(null);
              }}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === index
                  ? "bg-[#c11720] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {categories[activeCategory].faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`size-5 text-[#c11720] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white rounded-2xl text-center shadow-sm">
          <h3 className="mb-3">{t("faq.noQuestion")}</h3>
          <p className="text-gray-600 mb-6">{t("faq.contactUs")}</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#c11720] text-white rounded-full hover:bg-[#c11720]/90 transition-colors"
          >
            {t("faq.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
