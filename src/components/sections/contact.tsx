export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-black/10 bg-[#F5F1EA]"
    >
      <div className="mx-auto max-w-7xl px-8 py-32">

        <p className="mb-8 text-xs uppercase tracking-[0.5em] text-[#B89A68]">
          Contact
        </p>

        <h2 className="font-editorial max-w-5xl text-5xl leading-[0.95] md:text-7xl">
          Ready to Build
          <br />
          Something Meaningful?
        </h2>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-neutral-600">
          Whether you're launching a new business or refreshing
          an existing brand, LIKHA is here to create a thoughtful
          digital experience for you.
        </p>

        <div className="mt-16 flex flex-wrap gap-5">

          <a
            href="mailto:princeroveev@gmail.com"
            className="rounded-full bg-black px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#B89A68]"
          >
            Start a Project
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61573510591382"
            target="_blank"
            className="rounded-full border border-black px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] transition hover:bg-black hover:text-white"
          >
            Facebook
          </a>

        </div>

        <div className="mt-20 grid gap-10 border-t border-black/10 pt-12 md:grid-cols-3">

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#B89A68]">
              Email
            </p>

            <p className="text-lg">
              Likha@gmail.com
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#B89A68]">
              Services
            </p>

            <p className="leading-8 text-neutral-600">
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
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#B89A68]">
              LIKHA
            </p>

            <p className="leading-8 text-neutral-600">
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