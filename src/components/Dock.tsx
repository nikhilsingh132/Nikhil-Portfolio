import { dockApps } from "#constants/index";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Dock = (): React.ReactNode => {
  const dockRef = useRef(null);

  const handleAppClick = (app) => {
    console.log(`App ${app} clicked`);
  };

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const dockIcons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX: number) => {
      const { left: dockLeft } = dock.getBoundingClientRect();
      dockIcons.forEach((icon: HTMLElement) => {
        const { left: iconLeft, width: iconWidth } =
          icon.getBoundingClientRect();
        const center = iconLeft - dockLeft + iconWidth / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 3) / 2000);
        gsap.to(icon, {
          duration: 0.2,
          ease: "power1.Out",
          scale: 1 + intensity * 0.25,
          y: -15 * intensity,
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect();
      const mouseX = e.clientX - left;
      animateIcons(mouseX);
    };
    const handleMouseLeave = () => {
      dockIcons.forEach((icon: HTMLElement) => {
        gsap.to(icon, {
          duration: 0.2,
          ease: "power1.Out",
          scale: 1,
        });
      });
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map((app) => (
          <div
            key={app.id}
            className="relative flex justify-center items-center"
          >
            <button
              className="dock-icon"
              aria-label={app.name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={app.name}
              data-tooltip-delay-show={150}
              disabled={!app.canOpen}
              onClick={() => handleAppClick(app)}
            >
              <img
                src={`/images/${app.icon}`}
                alt={app.name}
                loading="lazy"
                className={!app.canOpen ? "opacity-50" : ""}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" className="tooltip" place="top" />
      </div>
    </section>
  );
};

export default Dock;
