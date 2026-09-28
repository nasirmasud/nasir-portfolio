import { cn } from "../lib/utils";

const STREAK_MASKS = [
  "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0, 0.78) 78%, rgba(0, 0, 0, 0) 97%)",
  "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0, 0.78) 78%, rgba(0, 0, 0, 0) 97%)",
  "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0, 0.48) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0, 0.88) 88%, rgba(0, 0, 0, 0) 97%)",
  "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0, 0.35) 35%, rgba(0, 0, 0, 0) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0, 0.79) 79%, rgba(0, 0, 0, 0) 97%)",
  "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0, 0.42) 42%, rgba(0, 0, 0, 0) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0, 0.74) 74%, rgb(0, 0, 0, 0.82) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)",
];

const STREAK_BACKGROUND = "linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)";

const DarkGradientBg = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-black",
        className
      )}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(100% 100% at 0% 0%, rgb(46, 46, 46) 0%, rgb(0, 0, 0) 100%)",
            mask: "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
            WebkitMask:
              "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          {STREAK_MASKS.map((streakMask) => (
            <div
              key={streakMask}
              className="absolute inset-0 opacity-20"
              style={{
                background: STREAK_BACKGROUND,
                mask: streakMask,
                WebkitMask: streakMask,
                transform: "skewX(45deg)",
              }}
            />
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-5 bg-repeat"
        style={{
          backgroundImage:
            'url("https://cdn.21st.dev/assets/mirror/f5/f55dfc553c100e6da0ad95258a042b4100f0ff4bb03a5313d1f541984275e262.png")',
          backgroundSize: "149.76px",
        }}
      />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 100% at 0% 0%, rgba(30, 41, 59, 0.2) 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default DarkGradientBg;
