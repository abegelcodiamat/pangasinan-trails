import Link from "next/link";
import Button from "../../components/atoms/Button";
import Icon from "../../components/atoms/Icon";

export default function AboutPage() {
  return (
    <main>
      {/* INTRODUCTION */}
      <section className="bg-teal-950 px-5 py-16 text-white lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
            About the Guide
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight sm:text-6xl">
            A simple way to discover Pangasinan.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-teal-100">
            Pangasinan Trails is a digital heritage and
            tourism guide created to help visitors and
            locals discover destinations, natural
            attractions, and cultural places throughout
            Pangasinan.
          </p>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
              Our purpose
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
              Making local destinations easier to discover.
            </h2>
          </div>

          <div className="space-y-5 text-gray-600">
            <p className="leading-7">
              Pangasinan has a diverse collection of
              coastal landscapes, natural attractions,
              historical landmarks, and cultural
              destinations.
            </p>

            <p className="leading-7">
              This guide organizes destination information
              into a simple and accessible interface so
              users can browse places according to their
              interests.
            </p>

            <p className="leading-7">
              The platform is designed with mobile users
              in mind, making the experience practical for
              people exploring destinations while
              travelling.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-100 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
            Design principles
          </p>

          <h2 className="mt-3 text-3xl font-black text-gray-900">
            Built around the project requirements.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-3xl bg-white p-6 shadow-sm">
              <Icon
                name="compass"
                size={30}
                className="text-teal-700"
              />

              <h3 className="mt-5 font-bold">
                Mobile-first
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                The interface begins with smaller screens
                and adapts to larger devices.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-6 shadow-sm">
              <Icon
                name="arrow"
                size={30}
                className="text-teal-700"
              />

              <h3 className="mt-5 font-bold">
                Lightweight
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                The interface avoids unnecessary elements
                and focuses on useful destination content.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-6 shadow-sm">
              <Icon
                name="location"
                size={30}
                className="text-teal-700"
              />

              <h3 className="mt-5 font-bold">
                Accessible
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Semantic HTML, meaningful labels, and
                alternative text support inclusive use.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-6 shadow-sm">
              <Icon
                name="compass"
                size={30}
                className="text-teal-700"
              />

              <h3 className="mt-5 font-bold">
                Maintainable
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Reusable components separate interface
                elements from destination content.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="rounded-[2rem] bg-teal-700 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-3xl font-black sm:text-4xl">
            Ready to explore?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-teal-100">
            Browse destinations and discover a different
            side of Pangasinan.
          </p>

          <div className="mt-7">
            <Button
              href="/explore"
              className="bg-white text-teal-800 hover:bg-teal-50"
            >
              Explore Destinations
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}