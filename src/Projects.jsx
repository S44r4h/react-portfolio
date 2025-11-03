function Projects() {
  return (
    <>
      <p className="text-secondary font-bold">Webdev info</p>
      <p>------------</p>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title  font-semibold">
          PixelList - <span className="text-primary">Mern-stack</span>
        </div>
        <div className="collapse-content text-xs">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          VioletCrow - <span className="text-primary">Wordpress</span>
        </div>
        <div className="collapse-content text-xs">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>
    </>
  );
}

export default Projects;
