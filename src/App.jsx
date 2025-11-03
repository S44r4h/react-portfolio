import "./App.css";
import { useState, useEffect } from "react";
import Info from "./Info";
import DarMode_Button from "./DarkMode_btn";
import TechSkills from "./TechSkills";
import Contact from "./contact";
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

  return (
    <div className="flex flex-col h-screen w-screen  justify-center items-center">
      <div className="grid grid-cols-1 w-9/10 h-full gap-7 py-5 font-ibm min-[440px]:justify-items-center min-[620px]:w-7/10 md:text-lg lg:text-sm lg:w-full lg:grid-cols-12 lg:grid-rows-7 lg:gap-4">
        {/* Small upper-bar */}
        <div className="flex-row absolute top-0 left-0 hidden lg:flex">
          <UpperBar />
        </div>
        <div className="border-1 bg-base-100 flex flex-col p-6 items-center lg:flex-row lg:col-span-6 lg:row-span-4 lg:col-start-4 lg:row-start-2 lg:self-center  xl:row-start-2 xl:row-span-4 2xl:border-2  2xl:self-center 2xl:py-20 ">
          <Info />
        </div>

        <div className="border-1 bg-base-100 flex flex-col p-3 justify-center lg:col-span-3 row-span-2  row-start-3">
          <Projects />
        </div>

        <div className="border-1  bg-base-100 flex-col justify-center p-3 hidden lg:flex lg:col-start-12 lg:self-center  2xl:border-2 ">
          <DarMode_Button isdark={isdark} setIsdark={setIsdark} />
        </div>
        <a
          href="https://github.com/vn7n24fzkq/github-profile-summary-cards"
          target="_blank"
        ></a>
        <div className="border-1  bg-base-100 flex flex-col justify-center p-3 lg:col-span-6 lg:row-span-2 lg:row-start-6 lg:self-start 2xl:border-2 ">
          <TechSkills />
        </div>
        {/* w-440 px vois olla jo w-7/10? */}
        <div className="border-1 bg-base-100 text-left flex flex-col justify-center p-3 min-[440px]:w-7/10 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4 lg:self-start lg:justify-self-center 2xl:border-2">
          <Contact />
        </div>
        <div className="border-1 bg-base-100 flex flex-col p-3   lg:self-center  lg:flex-row lg:col-span-4 lg:col-start-8 lg:row-start-6">
          <GithubStats isDark={isdark} />
        </div>
      </div>
    </div>
  );
}

export default App;
