export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="animate-grain pointer-events-none fixed -inset-1/2 z-[9000] h-[200%] w-[200%] opacity-[0.085] mix-blend-screen"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        animation: "grain 0.5s steps(3) infinite",
      }}
    />
  );
}
