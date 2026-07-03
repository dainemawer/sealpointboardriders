interface JoinProps {
  onOpenIndividual: () => void;
  onOpenFamily: () => void;
}

export default function Join({ onOpenIndividual, onOpenFamily }: JoinProps) {
  return (
    <section
      id="join"
      className="mx-auto max-w-[1320px] border-t-2 border-white px-[28px] py-[168px] text-center"
    >
      <div className="mb-[18px] text-xs uppercase tracking-[0.36em] opacity-60">
        05 / Join Up
      </div>
      <h2 className="mb-[18px] font-display text-[clamp(44px,8vw,128px)] font-bold uppercase leading-[0.82]">
        Get In The Water
      </h2>
      <p className="mx-auto mb-12 max-w-[520px] text-[17px] leading-[1.5] opacity-90">
        One paddle-out, one club. Sign on as an individual or bring the whole
        family.
      </p>
      <div className="mx-auto grid max-w-[840px] grid-cols-1 gap-6 md:grid-cols-2">
        <button
          onClick={onOpenIndividual}
          className="flex cursor-pointer flex-col gap-[14px] border-2 border-white bg-black px-9 py-10 text-left text-white transition-colors hover:bg-white hover:text-black"
        >
          <span className="text-xs uppercase tracking-[0.28em] opacity-60">
            Membership
          </span>
          <span className="font-display text-[clamp(34px,4.5vw,56px)] font-bold uppercase leading-[0.85]">
            Individual
          </span>
          <span className="text-sm leading-[1.4] opacity-80">
            One rider. Full season access to comps, coaching &amp; club
            events.
          </span>
          <span className="mt-2 self-start border-b-[1.5px] border-current pb-1 text-[13px] uppercase tracking-[0.2em]">
            Sign up →
          </span>
        </button>
        <button
          onClick={onOpenFamily}
          className="flex cursor-pointer flex-col gap-[14px] border-2 border-white bg-white px-9 py-10 text-left text-black transition-colors hover:bg-black hover:text-white hover:shadow-[inset_0_0_0_2px_white]"
        >
          <span className="text-xs uppercase tracking-[0.28em] opacity-60">
            Membership
          </span>
          <span className="font-display text-[clamp(34px,4.5vw,56px)] font-bold uppercase leading-[0.85]">
            Family
          </span>
          <span className="text-sm leading-[1.4] opacity-80">
            Groms &amp; parents under one membership. Add as many riders as
            you like.
          </span>
          <span className="mt-2 self-start border-b-[1.5px] border-current pb-1 text-[13px] uppercase tracking-[0.2em]">
            Sign up →
          </span>
        </button>
      </div>
    </section>
  );
}
