import Image from "next/image";

export default function HellHounds() {
  return (
    <section id="hellhounds" className="border-t-2 border-white bg-black">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-[56px] px-[28px] py-[168px] md:grid-cols-2">
        <div className="max-w-[560px]">
          <div className="mb-4 text-xs uppercase tracking-[0.36em] opacity-60">
            04 / The Inner Circle
          </div>
          <h2 className="mb-6 font-display text-[clamp(40px,6vw,96px)] font-bold uppercase leading-[0.82]">
            Hell Hounds
            <br />
            Club House
          </h2>
          <p className="mb-4 text-[17px] leading-[1.6] opacity-[0.92]">
            The members&rsquo; tier, run out of <strong>Nevermind</strong>{" "}
            at the Seal Point Lighthouse — chef Wesley Randles&rsquo;
            kitchen. A clubhouse within the clubhouse: somewhere to land
            after a session, sort merch, and keep the social side of the
            club alive.
          </p>
          <div className="mb-[30px] border-t border-[#444] pt-[14px] text-[11px] uppercase tracking-[0.2em] opacity-[0.55]">
            ⚠ Perks, pricing &amp; how the tier relates to membership — to be
            confirmed with the club.
          </div>
          <a
            href="#"
            className="inline-block bg-white px-8 py-3 font-display text-[22px] font-bold uppercase tracking-[0.02em] text-black no-underline transition-colors hover:bg-black hover:text-white hover:shadow-[inset_0_0_0_2px_white]"
          >
            Visit Nevermind →
          </a>
        </div>
        <div className="grid grid-cols-1 gap-[18px]">
          <div className="relative aspect-[4/3] w-full border-2 border-white">
            <Image
              src="/images/hellhounds-lighthouse.png"
              alt="The lighthouse at Seal Point"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              style={{ filter: "grayscale(1) contrast(1.35) brightness(0.85)" }}
            />
          </div>
          <div className="relative aspect-video w-full border-2 border-white">
            <Image
              src="/images/hellhounds-nevermind.png"
              alt="Members at Nevermind"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              style={{ filter: "grayscale(1) contrast(1.35) brightness(0.9)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
