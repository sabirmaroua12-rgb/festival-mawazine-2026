
import ConcertCard from "./ConcertCard";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-black text-white flex items-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
        style={{ backgroundImage: "url('/src/assets/2.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

      <div className="relative z-10 px-6 md:px-12 py-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Mawazine <br />
              <span className="text-red-600">2026</span>
            </h1>
            <p className="text-red-500 text-2xl md:text-3xl font-black uppercase tracking-[0.2em]">
              Rythmes du Monde
            </p>
          </div>

          <div className="flex items-center gap-8 border-l-4 border-red-600 pl-8 py-2">
            <div className="space-y-1">
              <p className="text-zinc-500 text-xs uppercase font-black tracking-widest">Dates</p>
              <p className="text-xl md:text-2xl font-bold">19-27 juin 2026</p>
            </div>
            <div className="space-y-1">
              <p className="text-zinc-500 text-xs uppercase font-black tracking-widest">Lieu</p>
              <p className="text-xl md:text-2xl font-bold">Rabat, Maroc</p>
            </div>
          </div>

          <p className="max-w-md text-zinc-300 italic text-xl leading-relaxed font-medium">
            "Le plus grand festival de musique au monde"
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-red-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all duration-300 shadow-2xl shadow-red-600/20 transform hover:-translate-y-1">
              Découvrir le festival
            </button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end group">
          {/* Decorative glow behind the card */}
          <div className="absolute -inset-4 bg-red-600/20 rounded-full blur-3xl group-hover:bg-red-600/30 transition-all duration-700"></div>
          <ConcertCard />
        </div>
      </div>
    </section>
  );
}


