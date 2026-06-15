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
    <section className="bg-stone-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-400">
            Creative Direction
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Inspiration Videos
          </h2>

          <p className="mt-4 max-w-2xl text-stone-400">
            A curated collection of visual references that inspire the style,
            interaction, and creative direction behind our projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="overflow-hidden">
                <video
                  className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium">
                  {video.title}
                </h3>

                <p className="mt-2 text-sm text-stone-400">
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