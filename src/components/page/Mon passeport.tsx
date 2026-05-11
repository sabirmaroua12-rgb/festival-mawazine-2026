
const festivalPass = {
  name: "Votre Nom",
  passType: "VIP PASS",
  festival: "Mawazine 2026",
  validDates: "19 Juin - 27 Juin 2026",
  qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Mawazine2026VIP",
  profileImage: "https://via.placeholder.com/150",
};

export default function MonPasseport() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-linear-to-br from-black via-zinc-900 to-red-950 flex items-center justify-center px-6 py-24 text-white">
      <div className="max-w-md w-full bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-red-500">

        <div className="bg-red-600 text-center py-6">
          <h1 className="text-4xl font-bold uppercase tracking-wider">
            Mawazine 2026
          </h1>
          <p className="text-sm mt-2 text-red-100">
            Festival Pass Officiel
          </p>
        </div>
        <div className="flex flex-col items-center py-8 px-6">
          <img
            src={festivalPass.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-red-500 object-cover mb-4"
          />

          <h2 className="text-3xl font-bold">{festivalPass.name}</h2>
          <p className="text-red-400 text-lg mt-2">{festivalPass.passType}</p>

          <div className="mt-6 text-center text-zinc-300 space-y-2">
            <p>{festivalPass.festival}</p>
            <p>{festivalPass.validDates}</p>
          </div>
        </div>
        <div className="bg-zinc-800 flex flex-col items-center py-8">
          <img
            src={festivalPass.qrCode}
            alt="QR Code"
            className="w-40 h-40 bg-white p-2 rounded-xl"
          />
          <p className="text-sm text-zinc-400 mt-4">
            Présentez ce QR code à l’entrée
          </p>
        </div>

        <div className="text-center py-4 text-zinc-500 text-sm">
          © Mawazine Festival 2026
        </div>
      </div>
    </section>
  );
}