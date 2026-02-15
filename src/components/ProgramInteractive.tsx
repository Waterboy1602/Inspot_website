import { Palette, Lightbulb, Music } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Activity {
  id: number;
  title: string;
  description: string;
  icon: any;
  color: string;
  image: string;
  time: string;
  link: string;
}

export function ProgramInteractive() {
  const activities: Activity[] = [
    {
      id: 1,
      title: "Expo",
      description: "Lokale artiesten exposeren hun werk. Ontdek lokaal talent!",
      icon: Palette,
      color: "#77160e",
      image: "https://images.unsplash.com/photo-1719935115623-4857df23f3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBleGhpYml0aW9uJTIwZ2FsbGVyeXxlbnwxfHx8fDE3NjM2Njg4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "Timing later bekend",
      link: "/kunstexposities"
    },
    {
      id: 2,
      title: "Food and Drinks",
      description: "Verschillende creatieve workshops. Enkel toegankelijk als bedrijf!",
      icon: Lightbulb,
      color: "#c11720",
      image: "https://images.unsplash.com/photo-1757085242652-f8cd4d3de889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzaG9wJTIwcGVvcGxlfGVufDF8fHx8MTc2MzY3NDAyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "Timing later bekend",
      link: "/food-and-drinks"
    },
    {
      id: 3,
      title: "Concert",
      description: "Sluit de dag af met een concert van opkomend talent. Ontdek de muzikanten van morgen in een intieme setting.",
      icon: Music,
      color: "#002F49",
      image: "https://images.unsplash.com/photo-1631061434620-db65394197e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBjb25jZXJ0fGVufDF8fHx8MTc2MzU5MDYxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      time: "Timing later bekend",
      link: "/avondconcert"
    }
  ];

  return (
    <section id="program" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[#77160e]">Programma</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Een dag vol creativiteit, inspiratie en talent. Klik op een activiteit voor meer informatie.
          </p>
        </div>
        
        <div className="mb-12 p-8 bg-gradient-to-r from-[#77160e] to-[#c11720] rounded-2xl text-white text-center">
          <h3 className="mb-3 text-white">Tijdschema</h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="opacity-90">Timing later bekend</div>
              <div>Expo</div>
            </div>
            <div>
              <div className="opacity-90">Timing later bekend</div>
              <div>Food and Drinks</div>
            </div>
            <div>
              <div className="opacity-90">Timing later bekend</div>
              <div>Concert</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity) => {
            const Icon = activity.icon;
            
            return (
              <Link
                key={activity.id}
                to={activity.link}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-left w-full group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: activity.color }}>
                    <Icon className="size-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="mt-4 text-[#c11720] group-hover:translate-x-1 transition-transform inline-block">
                    Meer info →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}