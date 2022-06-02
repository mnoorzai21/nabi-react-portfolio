const myPorjects = [
  {
    id: 1,
    title: "Git-Fit",
    details: "Fitness app, that generates a workout with exercises/set/reps",
    deployedLink: "https://peaceful-dusk-53929.herokuapp.com/",
    github: "https://github.com/ShawnArgent/Git-Fit",
  },
  {
    id: 2,
    title: "Golfapedia",
    details: "Golfing app, that finds nearby golf courses",
    deployedLink: "https://nirav-v.github.io/golfapedia/",
    github: "https://github.com/nirav-v/golfapedia",
  },
  {
    id: 3,
    title: "password-generator",
    details: "Passwork generator app, generates a random password",
    deployedLink: "https://mnoorzai21.github.io/password-generator-mnn/",
    github: "https://github.com/mnoorzai21/password-generator-mnn",
  },
];

export default function Portfolio() {
  return (
    <div className="">
      {myPorjects.map((project) => {
        return (
          <div key={project.id} className="">
            <img src="" alt="" />
            <div className="">
              <h5 className="">{project.title}</h5>
              <p className="">{project.details}</p>
              <a className="" href={project.deployedLink} role="button">
                deployedLink
              </a>
              <a className="" href={project.github} role="button">
                github
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
