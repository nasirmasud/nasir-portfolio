import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Hero from "./Hero";
import Projects from "./Projects";
import Skill from "./Skill";
import TechStack from "./TechStack";

const PANELS = [
  { id: "hero", Component: Hero },
  { id: "projects", Component: Projects },
  { id: "stack", Component: TechStack },
  { id: "skill", Component: Skill },
];

const PANEL_COUNT = PANELS.length;
const PANEL_STEPS = PANEL_COUNT - 1;
const END_HOLD = 0.9;

// scrollYProgress value at which each panel is fully framed.
const STOPS = PANELS.map((_, index) => (index / PANEL_STEPS) * END_HOLD);
const X_INPUT = [...STOPS, 1];

const toPercent = (values) => values.map((value) => `${value}%`);

/**
 * Each panel owns its offset instead of sharing one track transform, which is
 * what allows the travel direction to alternate between steps.
 *
 * Travel per step:
 *   Hero     -> Projects : left  (unchanged)
 *   Projects -> TechStack : right (reversed)
 *   TechStack-> Skills   : left
 *
 * A panel's width is 100vw, so 100% == one full panel.
 *
 * Only the two panels taking part in a step are ever on screen together, and
 * they move at the same speed and stay exactly one panel apart. Opacity keeps
 * the parked panels hidden, which a single shared track could not do: with one
 * track a panel's position *is* its index, so motion is always monotonic.
 */
const MOTION = {
  hero: {
    x: toPercent([0, -100, -100, -200, -200]),
    opacityInput: [0, STOPS[1]],
    opacityOutput: [1, 0],
  },
  projects: {
    x: toPercent([100, 0, 100, 200, 200]),
    opacityInput: [0, STOPS[1], STOPS[2]],
    opacityOutput: [0, 1, 0],
  },
  stack: {
    x: toPercent([-200, -100, 0, -100, -100]),
    opacityInput: [STOPS[1], STOPS[2], STOPS[3]],
    opacityOutput: [0, 1, 0],
  },
  skill: {
    x: toPercent([-300, -300, 100, 0, 0]),
    opacityInput: [STOPS[2], STOPS[3], 1],
    opacityOutput: [0, 1, 1],
  },
};

const Panel = ({ id, Component, scrollYProgress, staticLayout }) => {
  const { x, opacityInput, opacityOutput } = MOTION[id];

  const translateX = useTransform(scrollYProgress, X_INPUT, x);
  const opacity = useTransform(scrollYProgress, opacityInput, opacityOutput);

  // Faded-out panels are still hit-testable, so keep pointer events on the
  // panel the reader is actually looking at.
  const [interactive, setInteractive] = useState(true);
  useMotionValueEvent(opacity, "change", (value) =>
    setInteractive(value > 0.5)
  );

  return (
    <motion.div
      style={
        staticLayout
          ? undefined
          : { x: translateX, opacity, pointerEvents: interactive ? "auto" : "none" }
      }
      className="w-full overflow-y-auto no-scrollbar md:absolute md:inset-y-0 md:left-0 md:h-full"
    >
      <Component />
    </motion.div>
  );
};

const HorizontalScroll = () => {
  const wrapperRef = useRef(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const scrollToPanel = useCallback(
    (index) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const top =
        wrapper.getBoundingClientRect().top + window.scrollY;
      const travel = wrapper.offsetHeight - window.innerHeight;
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      window.scrollTo({
        top: top + (index / PANEL_STEPS) * END_HOLD * travel,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    },
    []
  );

  useEffect(() => {
    if (isMobile !== false) return;

    const handleClick = (event) => {
      const link = event.target.closest?.('a[href^="#"]');
      if (!link) return;

      const index = PANELS.findIndex(
        (panel) => panel.id === link.getAttribute("href").slice(1)
      );
      if (index === -1) return;

      event.preventDefault();
      scrollToPanel(index);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isMobile, scrollToPanel]);

  // undefined until the media query resolves; render the plain vertical stack
  // rather than flashing the desktop transform for a frame.
  const staticLayout = isMobile !== false;

  return (
    <div ref={wrapperRef} className="relative md:h-[400vh]">
      <div className="md:sticky md:top-0 md:h-screen md:overflow-hidden">
        <div className="flex flex-col md:relative md:h-full">
          {PANELS.map(({ id, Component }) => (
            <Panel
              key={id}
              id={id}
              Component={Component}
              scrollYProgress={scrollYProgress}
              staticLayout={staticLayout}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;