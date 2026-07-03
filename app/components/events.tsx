import type { ClubEvent } from "../data";

interface EventsProps {
  events: ClubEvent[];
}

export default function Events({ events }: EventsProps) {
  return (
    <section
      id="events"
      className="mx-auto max-w-[1320px] border-t-2 border-white px-[28px] py-[154px]"
    >
      <div className="mb-4 text-xs uppercase tracking-[0.36em] opacity-60">
        03 / The Calendar
      </div>
      <h2 className="mb-12 font-display text-[clamp(36px,5.5vw,76px)] font-bold uppercase leading-[0.86]">
        Upcoming &amp; Past
      </h2>

      <div className="border-t-2 border-white">
        {events.map((event) => (
          <div
            key={event.name}
            className="grid grid-cols-[90px_1fr] items-center gap-[14px] border-b border-[#333] py-7 px-1 transition-colors hover:bg-[#0d0d0d] sm:grid-cols-[160px_1fr_150px] sm:gap-6"
          >
            <div className="font-display text-[20px] font-bold uppercase leading-none">
              {event.date}
            </div>
            <div>
              <div className="font-display text-[clamp(22px,2.6vw,34px)] font-bold uppercase leading-[0.95]">
                {event.name}
              </div>
              <div className="mt-2 text-[13px] tracking-[0.06em] opacity-70">
                {event.meta}
              </div>
            </div>
            <div className="col-span-2 justify-self-start sm:col-span-1 sm:justify-self-end">
              <span
                className={`inline-block border-[1.5px] border-white px-4 py-2 text-[11px] uppercase tracking-[0.2em] ${
                  event.dashed ? "border-dashed opacity-50" : ""
                }`}
              >
                {event.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-[11px] uppercase tracking-[0.2em] opacity-50">
        ⚠ Placeholder dates — recurring grom comps, Club Champs, AGM &amp; the
        Boogie will populate once real dates land.
      </div>
    </section>
  );
}
