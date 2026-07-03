import Image from "next/image";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#members", label: "Members" },
  { href: "#events", label: "Events" },
  { href: "#hellhounds", label: "Hell Hounds" },
];

interface HeaderProps {
  mobileNavOpen: boolean;
  onToggleMobileNav: () => void;
  onCloseMobileNav: () => void;
  onOpenIndividual: () => void;
}

export default function Header({
  mobileNavOpen,
  onToggleMobileNav,
  onCloseMobileNav,
  onOpenIndividual,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-[1000] border-b-2 border-white bg-black/[0.82] backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-[28px] py-[14px]">
        <a href="#top" className="flex flex-none items-center gap-[14px] text-white no-underline">
          <Image
            src="/images/logo.png"
            alt="Seal Point Boardriders Club"
            width={50}
            height={50}
            className="block"
          />
        </a>

        <nav className="hidden items-center gap-[30px] md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.26em] text-white opacity-[0.78] no-underline transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={(e) => {
              e.preventDefault();
              onOpenIndividual();
            }}
            className="bg-white px-[22px] py-[11px] text-xs font-bold uppercase tracking-[0.26em] text-black no-underline transition-colors hover:bg-black hover:text-white hover:shadow-[inset_0_0_0_2px_white]"
          >
            Join
          </a>
        </nav>

        <button
          onClick={onToggleMobileNav}
          aria-label="Menu"
          className="border-2 border-white px-3 py-2 text-lg leading-none text-white md:hidden"
        >
          ≡
        </button>
      </div>

      {mobileNavOpen && (
        <div className="flex flex-col gap-0.5 border-t-2 border-white bg-black px-[28px] pt-2 pb-[18px] md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onCloseMobileNav}
              className="border-b border-[#222] py-3 text-sm uppercase tracking-[0.22em] text-white no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={(e) => {
              e.preventDefault();
              onOpenIndividual();
              onCloseMobileNav();
            }}
            className="mt-2 bg-white py-[14px] text-center text-sm font-bold uppercase tracking-[0.22em] text-black no-underline"
          >
            Join
          </a>
        </div>
      )}
    </header>
  );
}
