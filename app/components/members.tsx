import Image from "next/image";
import type { RefObject } from "react";
import type { RosterMember } from "../data";

interface MembersProps {
  roster: RosterMember[];
  trackRef: RefObject<HTMLDivElement | null>;
  onPrev: () => void;
  onNext: () => void;
}

export default function Members({ roster, trackRef, onPrev, onNext }: MembersProps) {
  return (
    <section id="members" className="border-t-2 border-white bg-black py-[140px] text-white">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-end justify-between gap-6 px-[28px]">
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.36em] opacity-50">
            02 / The Crew
          </div>
          <h2 className="m-0 font-display text-[clamp(36px,5.5vw,76px)] font-bold uppercase leading-[0.86]">
            Heat Sheet
          </h2>
        </div>
        <div className="flex gap-[10px]">
          <button
            onClick={onPrev}
            aria-label="Previous"
            className="h-[54px] w-[54px] cursor-pointer border-2 border-white bg-black text-[22px] text-white transition-colors hover:bg-white hover:text-black"
          >
            ←
          </button>
          <button
            onClick={onNext}
            aria-label="Next"
            className="h-[54px] w-[54px] cursor-pointer border-2 border-white bg-white text-[22px] text-black transition-colors hover:bg-black hover:text-white hover:shadow-[inset_0_0_0_2px_white]"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="[scrollbar-width:none] [-ms-overflow-style:none] mt-10 flex gap-0 overflow-x-auto px-[28px]"
        style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
      >
        {roster.map((surfer) => (
          <div
            key={surfer.slotId}
            className="w-[300px] flex-none border-r-2 border-white"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="relative aspect-[3/4] w-full bg-[#111]">
              <Image
                src={surfer.photo}
                alt={surfer.name}
                fill
                sizes="300px"
                className="object-cover"
                style={{ filter: "grayscale(1) contrast(1.3)" }}
              />
            </div>
            <div className="flex items-baseline justify-between border-t-2 border-white px-[18px] py-4">
              <div>
                <div className="font-display text-[22px] font-bold uppercase leading-[0.95]">
                  {surfer.name}
                </div>
                <div className="mt-[6px] text-[11px] uppercase tracking-[0.18em] opacity-60">
                  {surfer.division}
                </div>
              </div>
              <div className="font-display text-[30px] font-bold opacity-25">
                {surfer.seed}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-7 max-w-[1320px] px-[28px] text-[11px] uppercase tracking-[0.2em] opacity-50">
        ⚠ Placeholder roster &amp; photos — drag in real shots, swap names once
        the club supplies the heat sheet.
      </div>
    </section>
  );
}
