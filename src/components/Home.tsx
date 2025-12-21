import { locations } from "#constants/index";
import cx from "classnames";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "#store/window";
import useFinderLocationStore from "#store/finderLocation";

const Home = (): React.ReactNode => {
  const { setActiveLocation } = useFinderLocationStore();
  const { openWindow } = useWindowStore();
  const projects = locations.work.children ?? [];

  const handleProjectClick = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={cx("folder", "group", project.windowPosition)}
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.icon} alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
