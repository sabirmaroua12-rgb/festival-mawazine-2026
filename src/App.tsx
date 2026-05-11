
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MonPasseport from "./components/page/Mon passeport";
import MonPlanning from "./components/page/Mon Planning";
import Programme from "./components/page/Programme";
import Stats from "./components/Stats";

export function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={
            <div className="space-y-0">
              <Hero />
              <div className="bg-black py-24">
                <Stats />
              </div>
            </div>
          } />
          <Route path="/programme" element={<Programme />} />
          <Route path="/planning" element={<MonPlanning />} />
          <Route path="/passeport" element={<MonPasseport />} />
        </Routes>
      </main>
    </div>
  );
}
