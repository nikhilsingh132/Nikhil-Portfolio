import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowId) => {
  const Wrapped = (props) => {
    const { windows, focusWindow } = useWindowStore();
    const { zIndex, isOpen } = windows[windowId];
    const ref = useRef(null);

    useLayoutEffect(() => {
      const element = ref.current;
      if (!element) return;

      if (isOpen) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }, [isOpen]);

    useGSAP(() => {
      const element = ref.current;
      if (!element) return;
      const draggable = Draggable.create(element, {
        onPress: () => focusWindow(windowId),
      });
      return () => {
        draggable.forEach((item) => item.kill());
      };
    }, []);

    useGSAP(() => {
      const element = ref.current;

      if (!element || !isOpen) return;

      gsap.fromTo(
        element,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.2, ease: "power3.Out" }
      );
    }, [isOpen]);

    return (
      <section
        id={windowId}
        ref={ref}
        style={{ zIndex, display: isOpen ? "block" : "none" }}
        className="absolute"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;
  return Wrapped;
};

export default WindowWrapper;
