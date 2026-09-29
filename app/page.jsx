import Link from "next/link";
import SiteImage from "../components/atoms/SiteImage";
import Button from "../components/atoms/Button";
import HeritageGrid from "../components/organisms/HeritageGrid";
import destinations from "../data/destinations";

export default function HomePage() {
  const featured = destinations.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-teal-950">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="text-white">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
              A Pangasinan Heritage Guide
            </p>

            <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Discover Pangasinan beyond the usual trail.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-teal-100 sm:text-lg">
              Explore beaches, natural wonders, historic landmarks,
              and stories that connect visitors with the province.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/explore">
                Explore Destinations
              </Button>

              <Button
                href="/about"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                About the Guide
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <SiteImage
              src="/images/hundred-islands.jpg"
              alt="Hundred Islands in Pangasinan"
              width={1200}
              height={800}
              className="h-full min-h-[320px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
              Featured Trails
            </p>

            <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
              Places worth discovering
            </h2>
          </div>

          <Link
            href="/explore"
            className="font-semibold text-teal-700 hover:text-teal-900"
          >
            View all →
          </Link>
        </div>

        <HeritageGrid destinations={featured} />
      </section>

      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            Explore by experience
          </p>

          <h2 className="mt-2 text-3xl font-black text-gray-900">
            Find your kind of trail
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["Beach", "Nature", "Heritage", "Culture"].map(
              (category) => (
                <Link
                  key={category}
                  href={`/explore?category=${category}`}
                  className="rounded-2xl bg-white p-6 text-center font-bold text-gray-800 shadow-sm transition hover:-translate-y-1 hover:text-teal-700"
                >
                  {category}
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}