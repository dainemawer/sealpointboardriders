import Image from "next/image";

const STATS = [
  { value: "33", suffix: "", label: "Years Running" },
  { value: "10", suffix: "/yr", label: "Comps & Clinics" },
  { value: "200", suffix: "+", label: "At the Boogie" },
  { value: "#1", suffix: "", label: "Club in SA" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1320px] px-[28px] py-[154px]">
      <div className="grid grid-cols-1 items-start gap-[56px] md:grid-cols-2">
        <div>
          <div className="mb-5 text-xs uppercase tracking-[0.36em] opacity-60">
            01 / About the Club
          </div>
          <h2 className="mb-7 font-display text-[clamp(36px,5.5vw,76px)] font-bold uppercase leading-[0.88]">
            Biggest club
            <br />
            in the country.
            <br />
            Run by hand.
          </h2>
          <p className="mb-[18px] max-w-[520px] text-[17px] leading-[1.6] opacity-90">
            Based at Seal Point, Cape St Francis and affiliated with Surfing
            South Africa, SPBRC is — by its own account — the biggest and
            most active boardriders club in the country. No clubhouse
            politics, no corporate gloss. A volunteer committee, a season
            packed with surfing, and a town that shows up.
          </p>
          <p className="mb-7 max-w-[520px] text-[17px] leading-[1.6] opacity-90">
            Around ten grom comps and coaching sessions a year (with
            Luckyfish Surf School), an annual Club Championships, the AGM,
            and a season-ending fundraiser — the Boardriders Boogie — that
            last drew 200-plus to the Pig &amp; Rooster.
          </p>
          <div className="max-w-[520px] border-t border-[#333] pt-[14px] text-[11px] uppercase tracking-[0.2em] opacity-45">
            ⚠ Facts pieced together from public sources — club to confirm
            committee, sponsors &amp; history before launch.
          </div>
        </div>
        <div>
          <div className="relative aspect-[4/5] w-full border-2 border-white">
            <Image
              src="/images/about.png"
              alt="The lineup at the point"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              style={{ filter: "grayscale(1) contrast(1.3) brightness(0.92)" }}
            />
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 divide-x-2 divide-y-2 divide-white border-2 border-white md:grid-cols-4 md:divide-y-0">
        {STATS.map((stat) => (
          <div key={stat.label} className="px-6 py-8">
            <div className="font-display text-[clamp(44px,6vw,82px)] font-bold leading-[0.85]">
              {stat.value}
              {stat.suffix && <span className="text-[0.4em]">{stat.suffix}</span>}
            </div>
            <div className="mt-[10px] text-[11px] uppercase tracking-[0.24em] opacity-70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
