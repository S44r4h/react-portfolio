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
import Movies from "./movies";
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
    <div className="flex flex-col w-screen justify-center items-center lg:">
      <div className="grid grid-cols-1 w-9/10 gap-7 pt-5 pb-5 font-ibm min-[440px]:justify-items-center min-[620px]:w-7/10 md:text-lg lg:text-sm 2xl:text-base lg:w-full lg:grid-cols-12 lg:grid-rows-7 lg:gap-4 lg:px-3">
        {/* Small upper-bar */}
        <div className="flex-row absolute top-0 left-0 hidden lg:flex">
          <UpperBar />
        </div>
        <div className="border-2 flex flex-col p-1 bg-primary lg:col-start-4  lg:row-start-2 lg:row-span-2 lg:col-span-2 w-full items-center">
          <img
            className=" h-full object-cover"
            src="/src/profiili_j_kopio.jpeg"
          ></img>
        </div>
        <div className=" border-2 bg-base-100 flex flex-col p-3 items-center w-full  lg:flex-row lg:col-span-4 lg:row-span-2  lg:col-start-6 lg:row-start-2   ">
          <Info />
        </div>
        <div className="border-2 bg-base-100 flex flex-col p-3 lg:col-span-4 lg:col-start-6 row-span-2 row-start-4 w-full ">
          <Projects />
        </div>
        <div className="border-2  bg-base-100 flex-col  p-3 hidden lg:flex lg:col-start-12 lg:row-start-1 lg:self-center  2xl:border-2 ">
          <DarMode_Button isdark={isdark} setIsdark={setIsdark} />
        </div>
        {/*   <div className="border-2  bg-base-100 flex flex-col justify-center p-3 lg:col-span-6 lg:row-span-2 lg:row-start-6 lg:self-start 2xl:border-2 ">
          <TechSkills />
        </div>  */}
        <div className=" bg-base-100 flex flex-col  lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-5">
          <GithubStats isDark={isdark} />
        </div>
        {/* TESTI */} {/* TÄSTÄ KOMPONENTTI PERJANTAINA  */}{" "}
        <div className="border-2 bg-base-100  flex flex-col  p-3  lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-4 w-full   ">
          <TechSkills />
        </div>
        <div className="border-2 bg-base-100   flex flex-col p-3 w-full lg:col-span-4 lg:row-span-1 lg:col-start-6 lg:row-start-6 ">
          <Movies list={movies} />
        </div>
        <div className="border-2 bg-base-100  flex flex-col  p-3  lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-6 w-full   ">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
