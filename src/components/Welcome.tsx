import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_WEIGHTS = {
  title: {
    min: 400,
    max: 900,
  },
  subtitle: {
    min: 100,
    max: 400,
  },
};

const renderText = (text: string, className: string, baseWeight = 400) => {
  return text.split("").map((char, index) => (
    <span
      key={index}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupHoverTextEffects = (container, type: string) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max } = FONT_WEIGHTS[type];

  const animateLetter = (
    letter: HTMLSpanElement,
    weight: number,
    duration: number = 0.25
  ) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.Out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter: HTMLSpanElement) => {
      const { width: w, left: l } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 2000);
      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter: HTMLSpanElement) => {
      animateLetter(letter, min, 0.3);
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = (): React.ReactNode => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const titleCleanUp = setupHoverTextEffects(titleRef.current, "title");
    const subtitleCleanUp = setupHoverTextEffects(
      subtitleRef.current,
      "subtitle"
    );
    return () => {
      titleCleanUp();
      subtitleCleanUp();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Nikhil! Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>
      <h2 ref={titleRef} className="mt-7">
        {renderText("portfolio", "text-9xl italic font-georama")}
      </h2>

      <div className="small-screen">
        <p>This Portfolio is designed for tablet and desktop screens</p>
      </div>
    </section>
  );
};

export default Welcome;
