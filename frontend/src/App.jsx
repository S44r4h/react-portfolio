import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Info from "./Info";
import DarMode_Button from "./DarkMode_btn";
import TechSkills from "./TechSkills";
import Contact from "./Contact";
import UpperBar from "./UpperBar";
import GithubStats from "./GitHubStats";
import Projects from "./Projects";

/* DARKMODE */

function App() {
  const [isdark, setIsdark] = useState(() => {
    const saved = localStorage.getItem("isdark");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));

    if (isdark) {
      document.documentElement.setAttribute("data-theme", "abyss");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isdark]);

  /* GET movies */
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setMovies(res.data); /* vai res.data ? */
    } catch (error) {
      console.log(error); /* vaihda tähän error userille sivulle */
    }
  };

  /* kaksi useeffect? */
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div className="flex flex-col h-screen w-screen  justify-center items-center">
      <div className="grid grid-cols-1 w-9/10 h-full gap-7 pt-5 pb-5 font-ibm min-[440px]:justify-items-center min-[620px]:w-7/10 md:text-lg lg:text-sm lg:w-full lg:grid-cols-12 lg:grid-rows-7 lg:gap-4 lg:px-3">
        {/* Small upper-bar */}
        <div className="flex-row absolute top-0 left-0 hidden lg:flex">
          <UpperBar />
        </div>
        <div className="border-2 bg-base-100 flex flex-col p-6 items-center lg:p-10 lg:flex-row lg:col-span-6  lg:col-start-4 lg:row-start-3 lg:self-center  xl:row-start-2 xl:row-span-4   2xl:self-center 2xl:py-20 ">
          <Info />
        </div>
        <div className="border-2 bg-base-100 flex flex-col p-3 justify-center lg:col-span-3 row-span-4  row-start-2 self-center ">
          <Projects />
        </div>
        <div className="border-2  bg-base-100 flex-col justify-center p-3 hidden lg:flex lg:col-start-12 lg:self-center  2xl:border-2 ">
          <DarMode_Button isdark={isdark} setIsdark={setIsdark} />
        </div>
        <div className="border-2  bg-base-100 flex flex-col justify-center p-3 lg:col-span-6 lg:row-span-2 lg:row-start-6 lg:self-start 2xl:border-2 ">
          <TechSkills />
        </div>
        <div className="border-2 bg-base-100  flex flex-col justify-center p-3  lg:col-span-3 lg:row-span-2 lg:col-start-10 lg:row-start-4 lg:self-start lg:justify-self-center ">
          <Contact />
        </div>
        <div className="border-2 bg-base-100 flex flex-col p-3  lg:self-center  lg:flex-row lg:col-span-4 lg:row-span-2 lg:col-start-8 lg:row-start-6">
          <GithubStats isDark={isdark} />
        </div>
        {/* TESTI */} {/* TÄSTÄ KOMPONENTTI PERJANTAINA  */}{" "}
        {/* Ehkä icon joka aukeaa? */}
        <div className="border-2 bg-base-100 flex flex-col p-3 text-xs  lg:self-center  lg:flex-col lg:col-span-2 lg:row-span-3 lg:col-start-10 lg:row-start-1">
          <ul>
            {movies.map((item, i) => (
              <li key={i} className="p-1">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
