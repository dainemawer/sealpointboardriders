"use client";

import { useRef, useState, type FormEvent } from "react";
import GrainOverlay from "./grain-overlay";
import Header from "./header";
import Hero from "./hero";
import Marquee from "./marquee";
import About from "./about";
import Members from "./members";
import Events from "./events";
import HellHounds from "./hell-hounds";
import Join from "./join";
import Footer from "./footer";
import JoinModal, { type FamilyMember } from "./join-modal";
import { roster, events } from "../data";

type ModalType = "individual" | "family" | null;

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [modal, setModal] = useState<ModalType>(null);
  const [submitted, setSubmitted] = useState(false);
  const [family, setFamily] = useState<FamilyMember[]>([{ id: 1 }, { id: 2 }]);
  const nextFamilyId = useRef(2);
  const membersTrack = useRef<HTMLDivElement>(null);

  const openIndividual = () => {
    setModal("individual");
    setSubmitted(false);
    setMobileNavOpen(false);
  };

  const openFamily = () => {
    setModal("family");
    setSubmitted(false);
    setMobileNavOpen(false);
  };

  const closeModal = () => {
    setModal(null);
    setSubmitted(false);
  };

  const scrollMembers = (direction: 1 | -1) => {
    membersTrack.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  const addFamilyMember = () => {
    nextFamilyId.current += 1;
    setFamily((current) => [...current, { id: nextFamilyId.current }]);
  };

  const removeFamilyMember = (id: number) => {
    setFamily((current) => (current.length > 1 ? current.filter((m) => m.id !== id) : current));
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black font-body text-white">
      <GrainOverlay />
      <Header
        mobileNavOpen={mobileNavOpen}
        onToggleMobileNav={() => setMobileNavOpen((v) => !v)}
        onCloseMobileNav={() => setMobileNavOpen(false)}
        onOpenIndividual={openIndividual}
      />
      <Hero onOpenIndividual={openIndividual} />
      <Marquee />
      <About />
      <Members
        roster={roster}
        trackRef={membersTrack}
        onPrev={() => scrollMembers(-1)}
        onNext={() => scrollMembers(1)}
      />
      <Events events={events} />
      <HellHounds />
      <Join onOpenIndividual={openIndividual} onOpenFamily={openFamily} />
      <Footer />

      {modal && (
        <JoinModal
          type={modal}
          submitted={submitted}
          family={family}
          onClose={closeModal}
          onSubmit={submitForm}
          onAddFamilyMember={addFamilyMember}
          onRemoveFamilyMember={removeFamilyMember}
        />
      )}
    </div>
  );
}
