import { Lightbulb, Clock, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function WorkshopsPageMetTickets() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1757085242652-f8cd4d3de889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzaG9wJTIwcGVvcGxlfGVufDF8fHx8MTc2MzY3NDAyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Workshops"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#c11720] mb-6">
              <Lightbulb className="size-10" />
            </div>
            <h1 className="text-white mb-4">Workshops</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Creatieve workshops voor middelbareschoolstudenten en volwassenen. Doe zelf mee en ontdek je creatieve kant.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link 
          to="/programma" 
          className="inline-flex items-center gap-2 text-[#77160e] hover:text-[#c11720] transition-colors mb-8"
        >
          <ArrowLeft className="size-4" />
          Terug naar programma
        </Link>

        <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="size-5" />
            <span>14:00 - 17:00</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-5" />
            <span>Workshop Ruimtes 1-4</span>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Doe mee aan hands-on workshops onder begeleiding van ervaren kunstenaars. Kies uit schilderen, beeldhouwen, grafisch ontwerp, fotografie of mixed media. Alle materialen worden verstrekt en er is geen ervaring nodig!
          </p>

          <h3 className="mb-4 text-[#c11720]">Hoogtepunten</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>Schilderen & tekenen</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>Keramiek & boetseren</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>Grafisch ontwerp</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>Fotografie basics</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>Materialen inbegrepen</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>Voor alle niveaus</span>
            </li>
          </ul>

          <Link
            to="/tickets"
            className="inline-block px-8 py-4 bg-[#c11720] text-white rounded-full hover:bg-[#c11720]/90 transition-colors"
          >
            Tickets kopen
          </Link>
        </div>
      </div>
    </div>
  );
}
