import kademsaher  from "../ArtistsPics/8.jpg"
import hasnichakroun from "../ArtistsPics/h.jpg"

export const myPlanning = [
  {
    date: "19 June 2026",
    artist: "Kadem saher",
    stage: "OLM Souissi",
    time: "21:00",
    image: kademsaher
  },

  {
    date: "27 June 2026",
    artist: "hasni chakroun",
    stage: "Nahda",
    time: "20:30",
    image: hasnichakroun
  }
];

export default function MonPlanning() {
  return (
    <section className="min-h-screen bg-linear-to-b from-black to-zinc-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-red-500 mb-4">
          Mon Planning Mawazine 2026
        </h1>

<div className="grid md:grid-cols-2 gap-8">
          {myPlanning.map((event, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-3xl overflow-hidden shadow-xl border border-zinc-700 hover:border-red-500 transition"
            >
              <img
                src={event.image}
                alt={event.artist}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h2 className="text-3xl font-bold mb-3">{event.artist}</h2>

                <div className="space-y-2 text-zinc-300">
                  <p>
                    <span className="text-red-400 font-semibold">Date:</span>{" "}
                    {event.date}
                  </p>
                  <p>
                    <span className="text-red-400 font-semibold">Heure:</span>{" "}
                    {event.time}
                  </p>
                  <p>
                    <span className="text-red-400 font-semibold">Scène:</span>{" "}
                    {event.stage}
                  </p>
                </div>

                <button className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition">
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}