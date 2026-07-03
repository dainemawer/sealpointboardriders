import Image from "next/image";

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-black font-body text-white">
      <div
        aria-hidden="true"
        className="animate-grain pointer-events-none fixed -inset-1/2 z-[9000] h-[200%] w-[200%] opacity-[0.085] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          animation: "grain 0.5s steps(3) infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1.6px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 60%)",
        }}
      />

      <div className="relative z-[2] flex items-center justify-between px-8 py-7">
        <div className="text-[11px] uppercase tracking-[0.32em] opacity-60">
          Cape St Francis
        </div>
        <div className="text-[11px] uppercase tracking-[0.32em] opacity-60">
          Est. 1993
        </div>
      </div>

      <div className="relative z-[2] flex flex-1 flex-col items-center justify-center px-6 pt-6 pb-12 text-center">
        <Image
          src="/images/logo.png"
          alt="Seal Point Boardriders Club"
          width={160}
          height={160}
          preload
          className="mb-9 h-[clamp(96px,14vw,160px)] w-[clamp(96px,14vw,160px)]"
        />

        <div className="mb-[18px] border-l-[3px] border-white pl-3 text-xs uppercase tracking-[0.4em] opacity-75">
          Seal Point Boardriders Club
        </div>

        <h1 className="m-0 font-display text-[clamp(56px,12vw,168px)] font-bold uppercase leading-[0.84] tracking-[-0.01em]">
          Coming
          <br />
          Soon
        </h1>

        <p className="my-[26px] mb-10 max-w-[480px] text-[clamp(15px,2vw,19px)] leading-[1.5] opacity-90">
          South Africa&rsquo;s biggest, most active boardriders club is
          building a new home online. Comps, coaching, the Boogie — all of
          it, soon.
        </p>

        <div
          className="animate-pulse-dim text-[11px] uppercase tracking-[0.3em] opacity-60"
          style={{ animation: "pulse-dim 2.4s ease-in-out infinite" }}
        >
          ● Building the site
        </div>
      </div>

      <div className="relative z-[2] flex flex-wrap items-center justify-between gap-3 border-t-2 border-white px-8 py-[26px] text-[11px] uppercase tracking-[0.2em] opacity-[0.55]">
        <span>Affiliated — Surfing South Africa</span>
        <a
          href="mailto:sealsboardriders@gmail.com"
          className="text-white no-underline opacity-[0.85] transition-opacity hover:opacity-100"
        >
          sealsboardriders@gmail.com
        </a>
      </div>
    </div>
  );
}
