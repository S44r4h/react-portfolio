function Projects() {
  return (
    <>
      <p className="text-secondary font-bold">Projects</p>
      <p>------------</p>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title  font-semibold">
          PixelList - <span className="text-primary">Mern-stack</span>
        </div>
        <div className="collapse-content text-xs">
          <div className="flex items-center">
            <img
              src="https://placehold.net/4.png"
              width={100}
              height={100}
            ></img>
            <p className="p-2">
              Full-stack app for managing game wishlists and played lists, with
              admin tools for game and user management.
            </p>
          </div>

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
          <div className="flex items-center">
            <img
              src="https://placehold.net/4.png"
              width={100}
              height={100}
            ></img>
            <p className="p-2">
              Tarot Service Website. Custom WordPress site built with Elementor
              and a tailored child theme for design and layout modifications.
            </p>
          </div>

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
