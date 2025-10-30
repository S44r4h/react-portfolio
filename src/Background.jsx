import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { useState } from "react";

const Background = () => {
  //let [count, setCount] = useState(0);
  let [count, setCount] = useState(() => {
    let saved = 0;
    return saved;
  });
  return (
    //<div className="absolute top-0 -z-10 h-full w-full bg-base-100">
    //  {/* Aurora Mystic Mist Background /patterncraft.fun */}
    //  <div
    //    className="absolute inset-0 z-0"
    //    style={{
    //      backgroundImage: `
    //      radial-gradient(circle at 50% 100%, rgba(58, 175, 169, 0.6) 0%, transparent 60%),
    //      radial-gradient(circle at 50% 100%, rgba(255, 140, 0, 0.4) 0%, transparent 70%),
    //      radial-gradient(circle at 50% 100%, rgba(238, 130, 238, 0.3) 0%, transparent 80%)
    //    `,
    //    }}
    //  />
    //</div>
    <div className=" w-50 rounded-xs text-center md:order-0">
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        PAINA
      </button>
      <p>{count}</p>
    </div>
  );
};

export default Background;
