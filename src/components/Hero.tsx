
export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url 2.png')" }}>
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase">
              Mawazine 2026
            </h1>
            <p className="text-red-500 text-2xl font-bold uppercase">
              Rythmes du Monde
            </p>
          </div>

          <div className="text-lg md:text-xl font-semibold">
            <p>19-27 juin 2026</p>
            <p>Rabat, Maroc</p>
          </div>

          <p className="max-w-sm text-gray-200 italic text-lg">
            Le plus grand festival de musique au monde
          </p>

          <button className="bg-white text-red-500 px-8 py-3 rounded-full font-bold hover:bg-red-500 hover:text-white transition">
            Découvrir le festival
          </button>
        </div>
        <div></div>
      </div>
    </section>
  );
}


