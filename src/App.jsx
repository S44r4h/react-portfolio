import "./App.css";

function App() {
  const frames = [`♡(>ᴗ•)`, `♡(•ᴗ•)`];

  let i = 0;
  setInterval(() => {
    document.getElementById("ascii").textContent = frames[i % frames.length];
    i++;
  }, 500);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      {/*  <div className="border-1 bg-base-100 w-5/10 h-4/10 flex p-2">
        <h1 className="w-4/10 text-7xl flex flex-col justify-center items-center ">
          O_O
        </h1>
        <div className="w-7/10 p-3 text-sm text-left font-ibm">
          <p>Webdev portfolio</p>
          <p>------------------</p>
          <p>
            Name: <span className=" text-primary">Saara Villman</span>
          </p>
          <p>
            Born: <span className="text-primary">1995</span>
          </p>
          <p>
            Education:{" "}
            <span className="text-primary">
              Degree in Programming Development
            </span>{" "}
          </p>
          <p>
            Former Occupation:{" "}
            <span className="text-primary">Radiologic Technologist</span>
          </p>
          <p>
            Uptime:{" "}
            <span className="text-primary">
              3+ years coding | 1 year full-stack
            </span>
          </p>
          <p>
            Hobbies:{" "}
            <span className="text-primary">Reading | Video Games | Gym</span>
          </p>
          <p>
            Languages: <span className="text-primary">Finland | English</span>
          </p>
        </div>
      </div>*/}
      <div className="grid grid-cols-1 w-9/10 h-full gap-7 py-5 font-ibm min-[440px]:justify-items-center min-[620px]:w-7/10 md:text-lg lg:text-sm lg:w-full lg:grid-cols-12 lg:grid-rows-7 lg:gap-4 ">
        {/* Small upper-bar */}
        <div className="flex-col absolute top-0 left-0 hidden lg:flex">
          <div className="bg-base-content text-base-100 p-2">
            /~Saara's portfolio
          </div>
        </div>
        {/* Info */}
        <div className="border-1 bg-base-100 flex flex-col p-3 items-center lg:flex-row lg:col-span-6 lg:row-span-4 lg:col-start-4 lg:row-start-2">
          <pre className="text-5xl p-10" id="ascii"></pre>
          <div className=" text-left ">
            <p className="text-secondary">Webdev info</p>
            <p>------------------</p>
            <p>
              Name: <span className="text-primary">Saara Villman</span>
            </p>
            <p>
              Born: <span className="text-primary">1995</span>
            </p>
            <p>
              Education:{" "}
              <span className="text-primary">
                Degree in Programming Development
              </span>{" "}
            </p>
            <p>
              Former Occupation:{" "}
              <span className="text-primary">Radiographer</span>
            </p>
            <p>
              Uptime:{" "}
              <span className="text-primary">
                3+ years coding | 1 year full-stack
              </span>
            </p>
            <p>
              Hobbies:{" "}
              <span className="text-primary">Reading | Video Games | Gym</span>
            </p>
            <p>
              Languages: <span className="text-primary">Finland | English</span>
            </p>

            <div className="grid grid-cols-4 w-5/10 pt-3">
              <div className=" bg-base-content aspect-square "></div>
              <div className="bg-primary aspect-square "></div>
              <div className="bg-secondary aspect-square "></div>
              <div className="bg-[#80B387] aspect-square "></div>
              <div></div>
            </div>
          </div>
        </div>
        {/* Dark-mode button */}
        <div className="border-1  bg-base-100 flex-col justify-center  hidden lg:flex lg:col-start-12 p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </div>
        {/* Clock hidden < lg */}
        <div className="border-1  bg-base-100 flex-col justify-center  hidden lg:flex lg:col-start-11 p-3 ">
          <h1 className=" text-5xl ">12:00</h1>
        </div>

        {/* Tech info */}
        <div className="border-1  bg-base-100 flex flex-col justify-center lg:col-span-6 lg:row-span-2 lg:row-start-6 lg:justify-start p-3">
          <h1 className="text-left text-secondary">Technical Skills</h1>
          <p>----------------</p>
          <div className="grid grid-cols-5 gap-5 ">
            <div className="flex flex-col items-center justify-center">
              <svg
                role="img"
                viewBox="0 0 24 24"
                strokeWidth={1}
                fill="currentColor"
                className="size-10 md:size-15 lg:size-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>HTML5</title>
                <path d="M0 13.01v-2l7.09-2.98.58 1.94-5.1 2.05 5.16 2.05-.63 1.9Zm16.37 1.03 5.18-2-5.16-2.09.65-1.88L24 10.95v2.12L17 16zm-2.85-9.98H16l-5.47 15.88H8.05Z" />
              </svg>
              <span className="text-[10px] font-bold pt-2 md:text-sm">
                HTML/CSS
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <svg
                role="img"
                viewBox="0 0 24 24"
                strokeWidth={1}
                fill="currentColor"
                className="size-10 md:size-15 lg:size-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>JavaScript</title>
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
              </svg>
              <span className="text-[10px] font-bold pt-2 md:text-sm ">
                JavaScript
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <svg
                role="img"
                viewBox="0 0 24 24"
                strokeWidth={1}
                fill="currentColor"
                className="size-10 md:size-15  lg:size-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Node.js</title>
                <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
              </svg>
              <span className="text-[10px] font-bold pt-2 md:text-sm">
                NodeJs
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <svg
                role="img"
                viewBox="0 0 24 24"
                strokeWidth={1}
                fill="currentColor"
                className="size-10 md:size-15  lg:size-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>WordPress</title>
                <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
              </svg>
              <span className="text-[10px] font-bold pt-2 md:text-sm">
                WordPress
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <svg
                role="img"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                fill="currentColor"
                className="size-10 md:size-15 lg:size-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>React</title>
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
              <span className="text-[10px] font-bold pt-2 md:text-sm">
                React
              </span>
            </div>
          </div>
        </div>
        {/* Contact me */}
        {/* w-440 px vois olla jo w-7/10? */}
        <div className="border-1 bg-base-100 text-left flex flex-col justify-center p-3 min-[440px]:w-7/10 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-5 lg:justify-start ">
          <h1 className="text-secondary">Contact</h1>
          <p>------------</p>
          <p>
            Email:{" "}
            <span className=" text-primary">Saara.Villman@gmail.com</span>
          </p>
          <p>
            Github: <span className=" text-primary">link</span>
          </p>

          <p>
            Linkedin: <span className=" text-primary">link</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
