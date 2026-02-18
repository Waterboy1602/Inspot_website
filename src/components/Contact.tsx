import { Mail, MapPin, Instagram, Facebook, Send, Music2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { language, t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[#77160e] text-3xl md:text-4xl">
            {language === "nl" ? "Contact" : "Contact"}
          </h2>
          <p className="text-lg text-gray-600">
            {language === "nl"
              ? "Heb je vragen of wil je meer informatie? Neem contact met ons op!"
              : "Do you have questions or want more information? Contact us!"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="mb-8 text-[#77160e] text-3xl md:text-4xl">
                {language === "nl" ? "Contactgegevens" : "Contact details"}
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#fef0d6] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="size-6 text-[#77160e]" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-[18px] font-semibold">E-mail</h4>
                    <a
                      href={`mailto:${t("common.contactEmail")}`}
                      className="text-[16.5px] text-gray-600 hover:text-[#c11720] transition-colors"
                    >
                      {t("common.contactEmail")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#fef0d6] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="size-6 text-[#002F49]" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-[18px] font-semibold">
                      {language === "nl" ? "Adres" : "Address"}
                    </h4>
                    <p className="text-[16.5px] text-gray-600">{t("common.location")}</p>
                    <p className="text-[16.5px] text-gray-600">Binnenweg 4</p>
                    <p className="text-[16.5px] text-gray-600">
                      8000 {language === "nl" ? "Brugge" : "Bruges"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="mb-6 text-xl font-semibold text-[#77160e]">
                {language === "nl" ? "Volg ons" : "Follow us"}
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/inspot2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#c11720] rounded-full flex items-center justify-center text-white hover:bg-[#c11720]/90 transition-colors shadow-md hover:shadow-lg"
                  aria-label={
                    language === "nl" ? "Bezoek onze Instagram pagina" : "Visit our Instagram page"
                  }
                >
                  <Instagram className="size-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61583935633806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#002F49] rounded-full flex items-center justify-center text-white hover:bg-[#002F49]/90 transition-colors shadow-md hover:shadow-lg"
                  aria-label={
                    language === "nl" ? "Bezoek onze Facebook pagina" : "Visit our Facebook page"
                  }
                >
                  <Facebook className="size-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@inspot2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#000000] rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors shadow-md hover:shadow-lg"
                  aria-label={
                    language === "nl" ? "Bezoek onze TikTok pagina" : "Visit our TikTok page"
                  }
                >
                  <Music2 className="size-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Google Maps */}
          <div className="flex flex-col">
            <h3 className="mb-8 text-[#77160e] text-3xl md:text-4xl">
              {language === "nl" ? "Locatie" : "Location"}
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px] md:min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.3487846384815!2d3.2176869999999997!3d51.214392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c350fb3cbf96e5%3A0x8d1c8e8c8c8c8c8c!2sBinnenweg%204%2C%208000%20Brugge%2C%20Belgium!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Het Entrepot"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
