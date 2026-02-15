import { Mail, MapPin, Instagram, Facebook, Send, Music2 } from "lucide-react";
import { NewsletterForm } from "./NewsletterForm";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { language, t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[#77160e] text-3xl md:text-4xl">
            {language === 'nl' ? 'Contact' : 'Contact'}
          </h2>
          <p className="text-lg text-gray-600">
            {language === 'nl' 
              ? 'Heb je vragen of wil je meer informatie? Neem contact met ons op!' 
              : 'Do you have questions or want more information? Contact us!'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-[#77160e] text-3xl md:text-4xl">
              {language === 'nl' ? 'Contactgegevens' : 'Contact details'}
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fef0d6] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="size-5 text-[#77160e]" />
                </div>
                <div>
                  <h4 className="mb-1 text-[18px]">E-mail</h4>
                  <a href={`mailto:${t('common.contactEmail')}`} className="text-[16.5px] text-gray-600 hover:text-[#c11720] transition-colors">
                    {t('common.contactEmail')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fef0d6] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="size-5 text-[#002F49]" />
                </div>
                <div>
                  <h4 className="mb-1 text-[18px]">{language === 'nl' ? 'Adres' : 'Address'}</h4>
                  <p className="text-[16.5px] text-gray-600">{t('common.location')}</p>
                  <p className="text-[16.5px] text-gray-600">Binnenweg 4</p>
                  <p className="text-[16.5px] text-gray-600">8000 {language === 'nl' ? 'Brugge' : 'Bruges'}</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.3487846384815!2d3.2176869999999997!3d51.214392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c350fb3cbf96e5%3A0x8d1c8e8c8c8c8c8c!2sBinnenweg%204%2C%208000%20Brugge%2C%20Belgium!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Het Entrepot"
              ></iframe>
            </div>

            <div className="mt-8">
              <h4 className="mb-4">{language === 'nl' ? 'Volg ons' : 'Follow us'}</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/inspot2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#c11720] rounded-full flex items-center justify-center text-white hover:bg-[#c11720]/90 transition-colors"
                  aria-label={language === 'nl' ? "Bezoek onze Instagram pagina" : "Visit our Instagram page"}
                >
                  <Instagram className="size-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61583935633806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#002F49] rounded-full flex items-center justify-center text-white hover:bg-[#002F49]/90 transition-colors"
                  aria-label={language === 'nl' ? "Bezoek onze Facebook pagina" : "Visit our Facebook page"}
                >
                  <Facebook className="size-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@inspot2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#000000] rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                  aria-label={language === 'nl' ? "Bezoek onze TikTok pagina" : "Visit our TikTok page"}
                >
                  <Music2 className="size-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6">{language === 'nl' ? 'Stuur een bericht' : 'Send a message'}</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    {language === 'nl' ? 'Naam' : 'Name'} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c11720] focus:border-transparent"
                    placeholder={language === 'nl' ? "Je volledige naam" : "Your full name"}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c11720] focus:border-transparent"
                    placeholder="je@email.be"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-gray-700">
                    {language === 'nl' ? 'Onderwerp' : 'Subject'} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c11720] focus:border-transparent"
                    placeholder={language === 'nl' ? "Waar gaat je bericht over?" : "What is your message about?"}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">
                    {language === 'nl' ? 'Bericht' : 'Message'} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c11720] focus:border-transparent resize-none"
                    placeholder={language === 'nl' ? "Je bericht aan ons..." : "Your message to us..."}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#c11720] text-white rounded-full hover:bg-[#c11720]/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="size-5" />
                  <span>{language === 'nl' ? 'Verstuur bericht' : 'Send message'}</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  {language === 'nl' 
                    ? 'We reageren meestal binnen 2 werkdagen' 
                    : 'We usually respond within 2 business days'}
                </p>
              </form>
            </div>

            {/* Newsletter Signup */}
            <div>
              <NewsletterForm variant="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
