export default function ConcertCard() {
  return (
    <div className="bg-zinc-900/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/10 max-w-sm w-full transform hover:scale-[1.02] transition-all duration-300">
      <h3 className="text-yellow-400 font-black uppercase mb-6 text-xl tracking-tighter">
        Concert Vedette
      </h3>
      <div className="bg-white text-black rounded-2xl overflow-hidden shadow-inner">
        <div className="relative">
          <img
            src="df.jpg"
            alt="Elgrand Toto"
            className="w-full h-80 object-cover object-top"
          />
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            LIVE
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <h4 className="text-3xl font-black uppercase leading-tight tracking-tighter">
            Elgrand Toto
          </h4>

          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <div className="flex flex-col">
              <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Heure</span>
              <span className="text-red-500 font-black text-2xl">22:00</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Genre</span>
              <span className="font-black text-lg uppercase">Rap Marocain</span>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button className="flex-1 bg-black text-white py-4 rounded-xl font-bold text-sm hover:bg-zinc-800 transition-all active:scale-95 shadow-lg">
              Réserver
            </button>
            <button className="flex-1 bg-zinc-100 text-black py-4 rounded-xl font-bold text-sm hover:bg-zinc-200 transition-all active:scale-95 border border-zinc-200">
              Détails
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

