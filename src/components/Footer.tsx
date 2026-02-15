import { Facebook, Instagram, Music2 } from 'lucide-react';
import { NewsletterForm } from './NewsletterForm';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[#002F49] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4 text-white inspot-logo">InSpot</h3>
            <p className="text-gray-400">
              {t('home.hero.subtitle')}.{' '}
              {language === 'nl' ? 'Beleef lokaal talent op ' : 'Experience local talent on '} {t('common.date')}.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-white">{t('nav.contact')}</h4>
            <div className="space-y-2 text-gray-400">
              <p>inspot.scmc@outlook.be</p>
              <p>{t('common.location')}</p>
              <p>{t('footer.address')}</p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <NewsletterForm variant="dark" compact />
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="border-t border-gray-800 pt-8 pb-4 flex justify-center gap-6">
          <a 
            href="https://www.facebook.com/profile.php?id=61583935633806" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={language === 'nl' ? "Bezoek onze Facebook pagina" : "Visit our Facebook page"}
          >
            <Facebook className="w-8 h-8" />
          </a>
          <a 
            href="https://www.instagram.com/inspot2026/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={language === 'nl' ? "Bezoek onze Instagram pagina" : "Visit our Instagram page"}
          >
            <Instagram className="w-8 h-8" />
          </a>
          <a 
            href="https://www.tiktok.com/@inspot2026" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={language === 'nl' ? "Bezoek onze TikTok pagina" : "Visit our TikTok page"}
          >
            <Music2 className="w-8 h-8" />
          </a>
        </div>
        
        <div className="text-center text-gray-400">
          <p>&copy; 2026 InSpot. {language === 'nl' ? 'Alle rechten voorbehouden.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
}
