const Stats = () => {
  return (
    <div className="w-full px-6">
      <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-16 uppercase tracking-tighter">
        Le Festival en <span className="text-red-500">Chiffres</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white/10 backdrop-blur-lg text-white p-8 rounded-2xl text-center border border-white/20 hover:border-red-500 transition-all group">
          <div className="text-4xl mb-4 group-hover:scale-110 transition">🎵</div>
          <div className="text-3xl font-bold">90+</div>
          <div className="text-gray-400 uppercase text-sm mt-2">Artistes</div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg text-white p-8 rounded-2xl text-center border border-white/20 hover:border-red-500 transition-all group">
          <div className="text-4xl mb-4 group-hover:scale-110 transition">🏟️</div>
          <div className="text-3xl font-bold">7</div>
          <div className="text-gray-400 uppercase text-sm mt-2">Scènes</div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg text-white p-8 rounded-2xl text-center border border-white/20 hover:border-red-500 transition-all group">
          <div className="text-4xl mb-4 group-hover:scale-110 transition">📅</div>
          <div className="text-3xl font-bold">9</div>
          <div className="text-gray-400 uppercase text-sm mt-2">Jours</div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg text-white p-8 rounded-2xl text-center border border-white/20 hover:border-red-500 transition-all group">
          <div className="text-4xl mb-4 group-hover:scale-110 transition">👥</div>
          <div className="text-3xl font-bold">2M+</div>
          <div className="text-gray-400 uppercase text-sm mt-2">Festivaliers</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
