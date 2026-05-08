
import ConcertCard from "./components/ConcertCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MonPasseport from "./components/page/Mon passeport";
import MonPlanning from "./components/page/Mon Planning";
import Programme from "./components/page/Programme";
import Stats from "./components/Stats";





export function App(){
    return (
    <>
 <div className="bg-[url(\src\assets\2.png)]">

  <Navbar/>
  <Hero />
  <ConcertCard/>
  <Stats />
  <Programme />
  <MonPlanning />
  <MonPasseport />


  </div>
        </>


        
    );
}
