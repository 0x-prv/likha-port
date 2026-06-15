export function Footer() {
  return (
    <footer className="border-t border-neutral-300">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-8 py-10 md:flex-row">
        <div>
          <h2 className="font-editorial text-3xl font-semibold">
            LIKHA
          </h2>

          <p className="mt-2 text-sm text-neutral-500">
            Boutique Web Studio
          </p>
        </div>

        <div className="text-sm text-neutral-500">
          © 2026 LIKHA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}