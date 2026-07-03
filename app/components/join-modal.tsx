import Image from "next/image";
import type { FormEvent } from "react";

export interface FamilyMember {
  id: number;
}

interface JoinModalProps {
  type: "individual" | "family";
  submitted: boolean;
  family: FamilyMember[];
  onClose: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onAddFamilyMember: () => void;
  onRemoveFamilyMember: (id: number) => void;
}

const fieldClass =
  "w-full border-[1.5px] border-[#555] bg-black px-[14px] py-[13px] text-[15px] text-white outline-none focus:border-white";

export default function JoinModal({
  type,
  submitted,
  family,
  onClose,
  onSubmit,
  onAddFamilyMember,
  onRemoveFamilyMember,
}: JoinModalProps) {
  const isFamily = type === "family";
  const modalKicker = isFamily ? "Family Membership" : "Individual Membership";
  const modalTitle = isFamily ? "Family Sign-Up" : "Sign Me Up";
  const contactLabel = isFamily ? "Primary contact" : "Your name";
  const submitLabel = isFamily ? "Submit Family" : "Submit";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[10000] flex items-start justify-center overflow-y-auto bg-black/[0.88] px-5 py-10 backdrop-blur-[3px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.07] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n2)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-[560px] border-2 border-white bg-black px-[38px] pt-10 pb-11"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-[14px] right-[14px] cursor-pointer border-none bg-none text-[30px] leading-none text-white opacity-70 transition-opacity hover:opacity-100"
        >
          ×
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <Image
              src="/images/logo.png"
              alt=""
              width={90}
              height={90}
              className="mx-auto mb-6 block"
            />
            <h3 className="mb-4 font-display text-[46px] font-bold uppercase leading-[0.85]">
              You&rsquo;re In.
            </h3>
            <p className="mx-auto mb-7 max-w-[360px] text-[15px] leading-[1.55] opacity-[0.85]">
              Paddle&rsquo;s up. We&rsquo;ll be in touch at the email you gave
              us with payment &amp; your first session. Welcome to the club.
            </p>
            <button
              onClick={onClose}
              className="cursor-pointer border-none bg-white px-9 py-3 font-display text-[20px] font-bold uppercase text-black transition-colors hover:bg-black hover:text-white hover:shadow-[inset_0_0_0_2px_white]"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="mb-[10px] text-[11px] uppercase tracking-[0.3em] opacity-[0.55]">
              {modalKicker}
            </div>
            <h3 className="mb-7 font-display text-[clamp(34px,7vw,52px)] font-bold uppercase leading-[0.82]">
              {modalTitle}
            </h3>

            <label className="mb-[7px] block text-[11px] uppercase tracking-[0.2em] opacity-60">
              {contactLabel}
            </label>
            <input
              required
              type="text"
              placeholder="Full name"
              className={`${fieldClass} mb-[14px]`}
            />
            <div className="grid grid-cols-2 gap-[14px]">
              <input
                required
                type="email"
                placeholder="Email"
                className={`${fieldClass} mb-[14px]`}
              />
              <input
                required
                type="tel"
                placeholder="Phone"
                className={`${fieldClass} mb-[14px]`}
              />
            </div>

            {!isFamily && (
              <div className="grid grid-cols-2 gap-[14px]">
                <div>
                  <label className="mb-[7px] block text-[11px] uppercase tracking-[0.2em] opacity-60">
                    Date of birth
                  </label>
                  <input
                    type="date"
                    className={`${fieldClass} mb-[14px] [color-scheme:dark]`}
                  />
                </div>
                <div>
                  <label className="mb-[7px] block text-[11px] uppercase tracking-[0.2em] opacity-60">
                    SSA no. (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="SSA #"
                    className={`${fieldClass} mb-[14px]`}
                  />
                </div>
              </div>
            )}

            {isFamily && (
              <>
                <div className="mt-2 mb-1 flex items-center justify-between">
                  <label className="text-[11px] uppercase tracking-[0.2em] opacity-60">
                    Family members
                  </label>
                  <button
                    type="button"
                    onClick={onAddFamilyMember}
                    className="cursor-pointer border-[1.5px] border-white bg-none px-3 py-[6px] text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
                  >
                    + Add rider
                  </button>
                </div>
                {family.map((member) => (
                  <div
                    key={member.id}
                    className="mb-[10px] grid grid-cols-[1fr_140px_40px] items-center gap-[10px]"
                  >
                    <input
                      type="text"
                      placeholder="Rider name"
                      className={fieldClass}
                    />
                    <input
                      type="date"
                      aria-label="Date of birth"
                      className={`${fieldClass} [color-scheme:dark]`}
                    />
                    <button
                      type="button"
                      onClick={() => onRemoveFamilyMember(member.id)}
                      aria-label="Remove"
                      className="h-11 cursor-pointer border-[1.5px] border-[#555] bg-none text-[18px] text-white transition-colors hover:border-white"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </>
            )}

            <div className="mt-[18px] mb-4 border-t border-[#333] pt-[18px]">
              <label className="mb-[7px] block text-[11px] uppercase tracking-[0.2em] opacity-60">
                Emergency contact
              </label>
              <div className="grid grid-cols-2 gap-[14px]">
                <input required type="text" placeholder="Name" className={fieldClass} />
                <input required type="tel" placeholder="Number" className={fieldClass} />
              </div>
            </div>

            <label className="my-[6px] mb-[26px] flex cursor-pointer items-start gap-3 text-[13px] leading-[1.4] opacity-[0.85]">
              <input
                required
                type="checkbox"
                className="mt-[1px] h-5 w-5 flex-none accent-white"
              />
              <span>
                I&rsquo;ve read and accept the club liability waiver, and
                confirm the details above are correct.
              </span>
            </label>

            <button
              type="submit"
              className="w-full cursor-pointer border-none bg-white py-[15px] font-display text-[26px] font-bold uppercase text-black transition-colors hover:bg-black hover:text-white hover:shadow-[inset_0_0_0_2px_white]"
            >
              {submitLabel}
            </button>
            <div className="mt-[14px] text-center text-[10px] uppercase tracking-[0.18em] opacity-40">
              Submissions stored securely · pricing confirmed by email
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
