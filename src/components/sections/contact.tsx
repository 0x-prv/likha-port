export function Contact() {
  return (
    <section id="contact" className="border-t border-black/10 bg-[#F5F1EA]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <p className="mb-6 text-[11px] uppercase tracking-[0.38em] text-[#B89A68] sm:mb-8 sm:text-xs sm:tracking-[0.5em]">
          Contact
        </p>

        <h2 className="font-editorial max-w-5xl text-[clamp(3.25rem,13vw,5rem)] leading-[0.94] md:text-7xl">
          Ready to Build
          <br />
          Something Meaningful?
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-600 sm:mt-10 sm:text-lg sm:leading-8">
          Whether you&apos;re launching a new business or refreshing an existing
          brand, LIKHA is here to create a thoughtful digital experience for
          you.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:mt-16 sm:flex-row sm:flex-wrap sm:gap-5">
          <a
            href="mailto:princeroveev@gmail.com"
            className="rounded-full bg-black px-7 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#B89A68] sm:px-8 sm:text-xs sm:tracking-[0.3em]"
          >
            Start a Project
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61573510591382"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black px-7 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] transition hover:bg-black hover:text-white sm:px-8 sm:text-xs sm:tracking-[0.3em]"
          >
            Facebook
          </a>
        </div>

        <div className="mt-14 grid gap-8 border-t border-black/10 pt-10 sm:mt-20 sm:gap-10 sm:pt-12 md:grid-cols-3">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#B89A68] sm:text-xs sm:tracking-[0.35em]">
              Email
            </p>

            <p className="break-words text-base sm:text-lg">Likha@gmail.com</p>
          </div>

          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#B89A68] sm:text-xs sm:tracking-[0.35em]">
              Services
            </p>

            <p className="text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              Website Design
              <br />
              Web Development
              <br />
              Landing Pages
              <br />
              Custom Web Applications
            </p>
          </div>

          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#B89A68] sm:text-xs sm:tracking-[0.35em]">
              LIKHA
            </p>

            <p className="text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              Web Design & Development
              <br />
              Designed to Leave an Impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
