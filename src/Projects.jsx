function Projects() {
  return (
    <>
      <p className="text-secondary font-bold">Projects</p>
      <p>------------</p>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title  font-semibold">
          PixelList - <span className="text-primary">Mern-stack</span>
        </div>
        <div className="collapse-content text-xs">
          Full-stack app for managing game wishlists and played lists, with
          admin tools for game and user management.
          <div className="flex flex-col pt-3 text-primary">
            <a
              href="https://pixel-list.vercel.app/"
              target="_blank"
              className="link link-primary"
            >
              Live site
            </a>
            <a target="_blank" className="link link-primary pt-3">
              GitHub repo
            </a>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          VioletCrow - <span className="text-primary">Wordpress</span>
        </div>
        <div className="collapse-content text-xs">
          Tarot Service Website. Custom WordPress site built with Elementor and
          a tailored child theme for design and layout modifications.
          <div className="flex flex-col pt-3 text-primary">
            <a
              href="https://sv004212.nube.fi/Violetcrow/"
              target="_blank"
              className="link link-primary"
            >
              Live site
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
