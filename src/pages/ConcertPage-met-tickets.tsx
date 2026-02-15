import { Music, Clock, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AvondconcertPageMetTickets() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1631061434620-db65394197e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBjb25jZXJ0fGVufDF8fHx8MTc2MzU5MDYxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Avondconcert"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#002F49] mb-6">
              <Music className="size-10" />
            </div>
            <h1 className="text-white mb-4">Concert</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Sluit de dag af met een concert van opkomend talent. Ontdek de muzikanten van morgen in een intieme setting.
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
            <span>Timing later bekend</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-5" />
            <span>Grote zaal</span>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Sluit de dag af met live optredens van de meest veelbelovende muzikanten. Line-up volgt binnenkort!.
          </p>

          <h3 className="mb-4 text-[#002F49]">Hoogtepunten</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>Verschillende live acts</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1\">•</span>
              <span>Verschillende genres</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>Intieme setting</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>Bar aanwezig</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>Line-up volgt binnenkort</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#c11720] mt-1">•</span>
              <span>Afsluitende dj-set na het concert!</span>
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
