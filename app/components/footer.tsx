import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1320px] border-t-2 border-white px-[28px] pt-16 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-10">
        <div className="flex max-w-[360px] items-center gap-[18px]">
          <Image
            src="/images/logo.png"
            alt="SPBRC badge"
            width={72}
            height={72}
            className="flex-none"
          />
          <div>
            <div className="font-display text-[24px] font-bold uppercase leading-[0.9]">
              Seal Point
              <br />
              Boardriders Club
            </div>
            <a
              href="mailto:sealsboardriders@gmail.com"
              className="mt-[10px] inline-block text-[13px] tracking-[0.06em] text-white no-underline opacity-70 transition-opacity hover:opacity-100"
            >
              sealsboardriders@gmail.com
            </a>
          </div>
        </div>

        <div className="min-w-[200px]">
          <div className="mb-4 text-[11px] uppercase tracking-[0.26em] opacity-50">
            Backed By
          </div>
          <div className="flex flex-col gap-2 text-[13px] tracking-[0.04em] opacity-[0.85]">
            <span>Billy&rsquo;s Beach</span>
            <span>Rotary St Francis</span>
            <span>Cape St Francis Resort</span>
          </div>
        </div>

        <div className="min-w-[200px]">
          <div className="mb-4 text-[11px] uppercase tracking-[0.26em] opacity-50">
            Local Support
          </div>
          <div className="flex flex-col gap-2 text-[13px] tracking-[0.04em] opacity-[0.85]">
            <span>The Bakery · Pig &amp; Rooster</span>
            <span>The Full Stop · The Brewery</span>
            <span>Nevermind · Luckyfish Surf School</span>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-[#333] pt-[18px] text-[11px] uppercase tracking-[0.18em] opacity-45">
        <span>Est. 1993 · Cape St Francis, South Africa</span>
        <span>Affiliated — Surfing South Africa</span>
      </div>
    </footer>
  );
}
