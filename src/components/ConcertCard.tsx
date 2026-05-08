export default function ConcertCard() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl max-w-sm ml-auto">
      <h3 className="text-yellow-400 font-bold uppercase mb-4 text-lg">
        Concert du soir
      </h3>
      <div className="bg-white text-black rounded-lg overflow-hidden">
        <img
          src="df.jpg"
          alt="Elgrand Toto"
          className="w-full h-72 object-cover object-top"
        />
        <div className="p-4 space-y-2">
          <h4 className="text-2xl font-extrabold uppercase">
            Elgrand Toto
          </h4>

          <div className="flex items-center justify-between">
            <span className="text-red-500 font-bold text-xl">22.00</span>
            <span className="uppercase font-semibold">Rap</span>
          </div>

          <div className="flex gap-2 pt-4">
            <button className="flex-1 bg-black text-white py-2 rounded-md text-sm hover:bg-gray-800 transition">
              Ajouter au planning
            </button>
       

                  <button className="flex-1 bg-red-200 text-black py-2 rounded-md text-sm hover:bg-red-300 transition">
              Y détails
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

