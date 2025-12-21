import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowId) => {
  const Wrapped = (props) => {
    const { windows, focusWindow } = useWindowStore();
    const { zIndex, isOpen, isMaximized, originalPosition } = windows[windowId];
    const ref = useRef(null);
    const draggableRef = useRef(null);

    useLayoutEffect(() => {
      const element = ref.current;
      if (!element) return;

      if (isOpen) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }, [isOpen]);

    // CRITICAL: Use useLayoutEffect to synchronously override CSS when isMaximized changes
    useLayoutEffect(() => {
      const element = ref.current;
      if (!element || !isOpen) return;

      if (isMaximized) {
        // Maximize: Use setProperty with important to override CSS
        element.style.setProperty("position", "fixed", "important");
        element.style.setProperty("width", "100vw", "important");
        element.style.setProperty("height", "100vh", "important");
        element.style.setProperty("top", "0", "important");
        element.style.setProperty("left", "0", "important");
        element.style.setProperty("right", "0", "important");
        element.style.setProperty("bottom", "0", "important");
        element.style.setProperty("border-radius", "0", "important");
        element.style.setProperty("margin", "0", "important");
        element.style.setProperty("max-width", "none", "important");
        element.style.setProperty("max-height", "none", "important");
      } else {
        // Restore: Force restore styles immediately
        let restorePosition;

        if (originalPosition) {
          restorePosition = {
            x: originalPosition.x,
            y: originalPosition.y,
            width: originalPosition.width,
            height: originalPosition.height,
          };
        } else {
          restorePosition = {
            x: window.innerWidth / 2 - 400,
            y: window.innerHeight / 2 - 300,
            width: "800px",
            height: "600px",
          };
        }

        // Use setProperty with important to override CSS and GSAP styles
        element.style.setProperty("position", "absolute", "important");
        element.style.setProperty("width", restorePosition.width, "important");
        element.style.setProperty(
          "height",
          restorePosition.height,
          "important"
        );
        element.style.setProperty("top", `${restorePosition.y}px`, "important");
        element.style.setProperty(
          "left",
          `${restorePosition.x}px`,
          "important"
        );
        element.style.setProperty("right", "auto", "important");
        element.style.setProperty("bottom", "auto", "important");
        element.style.setProperty("border-radius", "", "important");
        element.style.setProperty("margin", "", "important");
        element.style.setProperty("max-width", "", "important");
        element.style.setProperty("max-height", "", "important");
      }
    }, [isMaximized, isOpen, originalPosition]);

    // Handle maximize/restore animations
    useGSAP(() => {
      const element = ref.current;
      if (!element || !isOpen) return;

      if (isMaximized) {
        // Kill draggable first to avoid conflicts
        if (draggableRef.current) {
          draggableRef.current.forEach((item) => item.kill());
          draggableRef.current = null;
        }

        // Clear any transforms
        gsap.set(element, { clearProps: "transform" });

        // Animate scale/opacity only - styles already set by useLayoutEffect
        gsap.fromTo(
          element,
          { scale: 0.95, opacity: 0.9 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "power2.inOut" }
        );
      } else {
        // Restore animation - styles already set by useLayoutEffect
        // Clear transforms first
        gsap.set(element, { clearProps: "transform" });

        gsap.fromTo(
          element,
          { scale: 0.95 },
          {
            scale: 1,
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
              // Re-enable dragging after restore
              if (!draggableRef.current && element) {
                const draggable = Draggable.create(element, {
                  onPress: () => focusWindow(windowId),
                });
                draggableRef.current = draggable;
              }
            },
          }
        );
      }
    }, [isMaximized, isOpen, originalPosition]);

    // Initialize draggable (only when not maximized)
    useGSAP(() => {
      const element = ref.current;
      if (!element || !isOpen || isMaximized) return;

      const draggable = Draggable.create(element, {
        onPress: () => focusWindow(windowId),
      });
      draggableRef.current = draggable;

      return () => {
        draggable.forEach((item) => item.kill());
        draggableRef.current = null;
      };
    }, [isOpen, isMaximized]);

    useGSAP(() => {
      const element = ref.current;

      if (!element || !isOpen || isMaximized) return;

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
        data-maximized={isMaximized}
        style={{
          zIndex,
          display: isOpen ? "block" : "none",
        }}
        className={isMaximized ? "" : "absolute"}
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
