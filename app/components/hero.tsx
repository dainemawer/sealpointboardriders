import Image from "next/image";

interface HeroProps {
  onOpenIndividual: () => void;
}

export default function Hero({ onOpenIndividual }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-end overflow-hidden border-b-2 border-white"
    >
      <Image
        src="/images/hero.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover"
        style={{ filter: "grayscale(1) contrast(1.35) brightness(0.78)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 38%, rgba(0,0,0,0.45) 70%, #000 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.22] mix-blend-multiply"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1.6px)",
          backgroundSize: "5px 5px",
        }}
      />
      <div className="relative z-[2] mx-auto w-full max-w-[1320px] px-[28px] pb-16">
        <div className="mb-[18px] border-l-[3px] border-white pl-3 text-xs uppercase tracking-[0.4em] opacity-[0.85]">
          Cape St Francis · Est. 1993
        </div>
        <h1
          className="m-0 font-display font-bold uppercase leading-[0.82] tracking-[-0.01em] text-[clamp(54px,11vw,168px)]"
          style={{ textShadow: "0 4px 40px rgba(0,0,0,0.7)" }}
        >
          Seal Point
          <br />
          Boardriders
        </h1>
        <p className="my-[22px] mb-[30px] max-w-[560px] text-[clamp(15px,2vw,21px)] leading-[1.45] opacity-[0.92]">
          Family-run. Wave-obsessed since forever. South Africa&rsquo;s biggest,
          most active boardriders club — groms to old salts, all of us out at
          the point.
        </p>
        <div className="flex flex-wrap items-center gap-[14px]">
          <button
            onClick={onOpenIndividual}
            className="cursor-pointer border-none bg-white px-[42px] py-[14px] font-display text-[26px] font-bold uppercase tracking-[0.02em] text-black transition-colors hover:bg-black hover:text-white hover:shadow-[inset_0_0_0_2px_white]"
          >
            Join the Club
          </button>
        </div>
      </div>
    </section>
  );
}
