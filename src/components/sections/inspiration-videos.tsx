const videos = [
  {
    title: "Luxury Editorial",
    src: "/inspo-videos/luxury-landing.mp4",
  },
  {
    title: "Premium Corporate",
    src: "/inspo-videos/matcha-inspo.mp4",
  },
  {
    title: "Creative Digital Agency",
    src: "/inspo-videos/minimal-agency.mp4",
  },
];

export function InspirationVideos() {
  return (
    <section className="bg-stone-950 px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-12">
          <p className="text-[11px] uppercase tracking-[0.32em] text-stone-400 sm:text-sm sm:tracking-[0.35em]">
            Creative Direction
          </p>

          <h2 className="font-editorial mt-4 text-[clamp(3rem,12vw,4.5rem)] font-semibold leading-none md:text-6xl">
            Inspiration Videos
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-400 sm:text-base">
            A curated collection of visual references that inspire the style,
            interaction, and creative direction behind our projects.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.title}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur sm:rounded-3xl"
            >
              <div className="overflow-hidden bg-black">
                <video
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105 sm:aspect-video md:aspect-[4/5] xl:aspect-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-medium sm:text-xl">
                  {video.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-stone-400">
                  Premium web design and interaction inspiration.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
