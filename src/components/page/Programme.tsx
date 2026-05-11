import Ninho from "../ArtistsPics/OIP.jpg"
import TamerHosny from "../ArtistsPics/4.jpg"

const program = [
  {
    date: "19 June 2026",
    stage: "OLM Souissi",
    artist: "Ninho",
    image: Ninho

  },

  {
    date: "27 June 2026",
    stage: "Nahda",
    artist: "Tamer Hosny",
    image: TamerHosny
  },
];

export default function Programme() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-black text-white py-24 px-6 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-red-500">
          Mawazine Festival 2026
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {program.map((event, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500 transition shadow-lg"
            >
              <img
                src={event.image}
                alt={event.artist}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h2 className="text-3xl font-bold mb-2">{event.artist}</h2>
                <p className="text-zinc-400 mb-1">{event.stage}</p>
                <p className="text-red-400 font-medium">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}