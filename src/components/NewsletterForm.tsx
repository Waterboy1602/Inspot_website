import { useState } from "react";
import { Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface NewsletterFormProps {
  variant?: "light" | "dark";
  compact?: boolean;
}

export function NewsletterForm({ variant = "light", compact = false }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !isChecked) {
      alert(language === 'nl' 
        ? "Vul je e-mailadres in en bevestig dat je updates wilt ontvangen." 
        : "Please enter your email address and confirm that you want to receive updates.");
      return;
    }

    // Simulate submission
    console.log("Newsletter signup:", { email, timestamp: new Date() });
    
    setIsSubmitted(true);
    setEmail("");
    setIsChecked(false);

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const isDark = variant === "dark";

  if (compact) {
    return (
      <div>
        <h4 className={`mb-3 ${isDark ? "text-white" : "text-[#77160e]"}`}>
          {language === 'nl' ? 'Blijf op de hoogte' : 'Stay informed'}
        </h4>
        
        {isSubmitted ? (
          <div className={`p-3 rounded-lg text-sm ${isDark ? "bg-green-900/30 text-green-200" : "bg-green-100 text-green-800"}`}>
            ✓ {language === 'nl' ? 'Ingeschreven!' : 'Subscribed!'}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="je@email.be"
              required
              className={`w-full px-3 py-2 text-sm rounded-lg border ${
                isDark
                  ? "bg-[#002F49] border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-[#c11720] focus:border-transparent`}
            />

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id={`newsletter-compact-${variant}`}
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                required
                className="mt-0.5 w-3.5 h-3.5 rounded border-gray-300 text-[#c11720] focus:ring-[#c11720]"
              />
              <label
                htmlFor={`newsletter-compact-${variant}`}
                className={`text-xs leading-tight ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                {language === 'nl' ? 'Ja, ik wil updates ontvangen' : 'Yes, I want to receive updates'}
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-sm bg-[#c11720] text-white rounded-full hover:bg-[#c11720]/90 transition-colors"
            >
              {language === 'nl' ? 'Inschrijven' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className={`${isDark ? "bg-[#001829]" : "bg-[#fef0d6]"} rounded-xl p-6`}>
      <div className="flex items-start gap-3 mb-4">
        <div className={`w-10 h-10 ${isDark ? "bg-[#c11720]" : "bg-white"} rounded-full flex items-center justify-center flex-shrink-0`}>
          <Mail className={`size-5 ${isDark ? "text-white" : "text-[#77160e]"}`} />
        </div>
        <div>
          <h4 className={`mb-2 ${isDark ? "text-white" : "text-[#77160e]"}`}>
            {language === 'nl' ? 'Blijf op de hoogte!' : 'Stay informed!'}
          </h4>
          <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            {language === 'nl' 
              ? 'Wil je up to date blijven over InSpot? Laat dan hier je e-mailadres achter!' 
              : 'Want to stay up to date on InSpot? Leave your email address here!'}
          </p>
        </div>
      </div>

      {isSubmitted ? (
        <div className={`p-4 rounded-lg ${isDark ? "bg-green-900/30 text-green-200" : "bg-green-100 text-green-800"}`}>
          <p className="text-center">
            ✓ {language === 'nl' 
              ? 'Bedankt! Je bent ingeschreven voor onze updates.' 
              : 'Thank you! You have been subscribed to our updates.'}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="je@email.be"
              required
              className={`w-full px-4 py-3 rounded-lg border ${
                isDark
                  ? "bg-[#002F49] border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-[#c11720] focus:border-transparent`}
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id={`newsletter-${variant}`}
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              required
              className="mt-1 w-4 h-4 rounded border-gray-300 text-[#c11720] focus:ring-[#c11720]"
            />
            <label
              htmlFor={`newsletter-${variant}`}
              className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              {language === 'nl' 
                ? 'Ja, ik wil graag op de hoogte blijven van InSpot nieuws en updates' 
                : 'Yes, I would like to stay informed about InSpot news and updates'}
            </label>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#c11720] text-white rounded-full hover:bg-[#c11720]/90 transition-colors"
          >
            {language === 'nl' ? 'Inschrijven' : 'Subscribe'}
          </button>
        </form>
      )}
    </div>
  );
}
