const ITEMS = [
  "Grom Comps",
  "Club Champs",
  "Boardriders Boogie",
  "Coaching",
  "Hell Hounds",
];

export default function Marquee() {
  const items = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden whitespace-nowrap border-b-2 border-white bg-white text-black">
      <div
        className="animate-marquee inline-block py-2 font-display text-[18px] font-bold uppercase tracking-[0.05em]"
        style={{ animation: "marquee 22s linear infinite" }}
      >
        {items.map((item, i) => (
          <span key={i}>
            <span className="px-[22px]">{item}</span>•
          </span>
        ))}
      </div>
    </div>
  );
}
