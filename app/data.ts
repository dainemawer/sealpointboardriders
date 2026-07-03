export interface RosterMember {
  slotId: string;
  name: string;
  division: string;
  seed: string;
  photo: string;
}

export const roster: RosterMember[] = [
  {
    slotId: "mem-1",
    name: "Rory Dace",
    division: "U18 · SA Champ '25",
    seed: "01",
    photo: "/images/member-rory-dace.png",
  },
  {
    slotId: "mem-2",
    name: "Rylan Jarvis",
    division: "Junior",
    seed: "02",
    photo: "/images/member-rylan-jarvis.png",
  },
  {
    slotId: "mem-3",
    name: "Summer Harding",
    division: "U16 Girls",
    seed: "03",
    photo: "/images/member-summer-harding.png",
  },
  {
    slotId: "mem-4",
    name: "Jack Erlank",
    division: "Junior",
    seed: "04",
    photo: "/images/member-jack-erlank.png",
  },
  {
    slotId: "mem-5",
    name: "Leo McLeod",
    division: "Grom",
    seed: "05",
    photo: "/images/member-leo-mcleod.png",
  },
  {
    slotId: "mem-6",
    name: "Slade Shooter",
    division: "Grom",
    seed: "06",
    photo: "/images/member-slade-shooter.png",
  },
  {
    slotId: "mem-7",
    name: "Brin Jarvis",
    division: "Junior",
    seed: "07",
    photo: "/images/member-brin-jarvis.png",
  },
  {
    slotId: "mem-8",
    name: "David Moussouris",
    division: "Open",
    seed: "08",
    photo: "/images/member-david-moussouris.png",
  },
];

export interface ClubEvent {
  date: string;
  name: string;
  meta: string;
  tag: string;
  dashed?: boolean;
}

export const events: ClubEvent[] = [
  {
    date: "Sat 12 Jul",
    name: "Grom Comp — Round 3",
    meta: "Seal Point Main · Coaching by Luckyfish",
    tag: "RSVP",
  },
  {
    date: "Sat 16 Aug",
    name: "Club Championships",
    meta: "Seal Point · All divisions · Day event",
    tag: "Details",
  },
  {
    date: "Fri 19 Sep",
    name: "The AGM",
    meta: "Pig & Rooster · Members & committee",
    tag: "RSVP",
  },
  {
    date: "Sat 25 Oct",
    name: "Boardriders Boogie",
    meta: "Pig & Rooster · Season fundraiser party",
    tag: "Details",
  },
  {
    date: "Jun 2025",
    name: "Grom Comp — Round 2",
    meta: "Seal Point Main · 33 entries",
    tag: "Results",
    dashed: true,
  },
];
