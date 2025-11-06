function Info() {
  /* Animation */

  return (
    <>
      <div className="pr-10">
        <img src="/public/dithered-image.png" />
      </div>
      <div className=" text-left ">
        <p className="text-secondary font-bold">Webdev info</p>
        <p>------------------</p>
        <p>
          Name: <span className="text-primary">Saara Villman</span>
        </p>
        <p>
          Born: <span className="text-primary">1995</span>
        </p>
        <p>
          Education:{" "}
          <span className="text-primary">Vocational Qualification in ICT</span>{" "}
        </p>
        <p>
          Former Occupation: <span className="text-primary">Radiographer</span>
        </p>
        <p>
          Uptime: <span className="text-primary">Recent graduate</span>
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
    </>
  );
}

export default Info;
