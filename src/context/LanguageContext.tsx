import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'nl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations: Record<Language, Record<string, any>> = {
  nl: {
    common: {
      date: "3 april 2026",
      location: "Het Entrepot",
      moreInfo: "Meer info",
      buyTickets: "Tickets kopen",
      interestSponsoring: "Interesse in sponsoring?",
      interestSponsoringDesc: "Wilt u InSpot steunen en samen met ons kunst en cultuur promoten? Neem contact met ons op voor een vrijblijvend gesprek over de mogelijkheden.",
      contactEmail: "inspot.scmc@outlook.be"
    },
    nav: {
      praktisch: "Praktisch",
      bedrijven: "Voor bedrijven",
      faq: "FAQ",
      overOns: "Over ons",
      sponsors: "Sponsors",
      contact: "Contact",
      buyTickets: "Tickets kopen"
    },
    home: {
      hero: {
        subtitle: "Een plek waar creativiteit en inspiratie samenkomen",
      },
      program: {
        expo: {
          title: "Expo",
          desc: "Lokale artiesten exposeren hun werk. Ontdek lokaal talent!"
        },
        food: {
          title: "Food and Drinks",
          desc: "Geniet van heerlijke gerechten en verfrissende drankjes. Ontdek ons aanbod!"
        },
        concert: {
          title: "Concert",
          desc: "Sluit de dag af met een concert van opkomend talent. Ontdek de muzikanten van morgen."
        }
      }
    },
    faq: {
      title: "Veelgestelde Vragen",
      subtitle: "Vind antwoorden op de meest gestelde vragen over InSpot",
      noQuestion: "Staat je vraag er niet tussen?",
      contactUs: "Neem gerust contact met ons op. We helpen je graag verder!",
      cta: "Neem contact op",
      categories: {
        praktisch: "Praktisch",
        workshops: "Workshops",
        concert: "Concert",
        expo: "Expo",
        accessibility: "Toegankelijkheid",
        other: "Overig"
      },
      concertLostTicket: {
        question: "Help! Ik ben mijn concertticket kwijt. Wat nu?",
        answer: "Kan je je bevestigingsmail van je aankoop niet meer terugvinden? Stuur ons dan een mailtje via inspot.scmc@outlook.be met voornaam- en achternaam en e-mailadres op het ticket. Dan kijken wij voor je en verzenden we de bevestigingsmail opnieuw."
      }
    },
    sponsors: {
      title: "Onze Sponsors",
      subtitle: "Samen maken we kunst en cultuur toegankelijk voor iedereen",
      intro: "InSpot wordt mogelijk gemaakt door de steun van onze geweldige sponsors en partners. Zonder hun bijdrage zouden we niet in staat zijn om dit evenement te organiseren en lokaal talent een podium te bieden.",
      sponsorsTitle: "Sponsors",
      partnersTitle: "Partners",
      contactBtn: "Contacteer ons via mail"
    },
    footer: {
      desc: "InSpot is een initiatief dat jong talent en lokale kunst in de verf zet. Ontdek, beleef en steun de creativiteit in Brugge.",
      quickLinks: "Snelkoppelingen",
      contact: "Contact",
      address: "Binnenweg 4, 8000 Brugge"
    }
  },
  en: {
    common: {
      date: "April 3, 2026",
      location: "Het Entrepot",
      moreInfo: "More info",
      buyTickets: "Buy tickets",
      interestSponsoring: "Interested in sponsoring?",
      interestSponsoringDesc: "Would you like to support InSpot and promote art and culture with us? Contact us for a non-binding conversation about the possibilities.",
      contactEmail: "inspot.scmc@outlook.be"
    },
    nav: {
      praktisch: "Practical",
      bedrijven: "For companies",
      faq: "FAQ",
      overOns: "About us",
      sponsors: "Sponsors",
      contact: "Contact",
      buyTickets: "Buy tickets"
    },
    home: {
      hero: {
        subtitle: "A place where creativity and inspiration come together",
      },
      program: {
        expo: {
          title: "Exhibition",
          desc: "Local artists exhibit their work. Discover local talent!"
        },
        food: {
          title: "Food and Drinks",
          desc: "Enjoy delicious dishes and refreshing drinks. Discover our offer!"
        },
        concert: {
          title: "Concert",
          desc: "End the day with a concert of rising talent. Discover the musicians of tomorrow."
        }
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to the most common questions about InSpot",
      noQuestion: "Is your question not listed?",
      contactUs: "Feel free to contact us. We're happy to help!",
      cta: "Get in touch",
      categories: {
        praktisch: "Practical",
        workshops: "Workshops",
        concert: "Concert",
        expo: "Exhibition",
        accessibility: "Accessibility",
        other: "Other"
      },
      concertLostTicket: {
        question: "Help! I lost my concert ticket. Now what?",
        answer: "Can't find your purchase confirmation email? Send us an email at inspot.scmc@outlook.be with your first name, last name, and the email address on the ticket. We'll look into it for you and resend the confirmation email."
      }
    },
    sponsors: {
      title: "Our Sponsors",
      subtitle: "Together we make art and culture accessible to everyone",
      intro: "InSpot is made possible by the support of our amazing sponsors and partners. Without their contribution, we wouldn't be able to organize this event and provide a stage for local talent.",
      sponsorsTitle: "Sponsors",
      partnersTitle: "Partners",
      contactBtn: "Contact us via email"
    },
    footer: {
      desc: "InSpot is an initiative that highlights young talent and local art. Discover, experience and support creativity in Bruges.",
      quickLinks: "Quick Links",
      contact: "Contact",
      address: "Binnenweg 4, 8000 Bruges"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('nl');

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[language];
    for (const key of keys) {
      if (current === undefined || current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
