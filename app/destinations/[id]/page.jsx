import Link from "next/link";
import { notFound } from "next/navigation";
import SiteImage from "../../../components/atoms/SiteImage";
import Button from "../../../components/atoms/Button";
import destinations from "../../../data/destinations";

export function generateStaticParams() {
  return destinations.map((destination) => ({
    id: destination.id,
  }));
}

export default async function DestinationPage({
  params,
}) {
  const destination = destinations.find(
    (item) => item.id === params.id
  );

  if (!destination) {
    notFound();
  }

  return (
    <main>
      {/* HERO IMAGE */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
          <Link
            href="/explore"
            className="text-sm font-semibold text-teal-700 hover:text-teal-900"
          >
            ← Back to Explore
          </Link>

          <div className="mt-6 overflow-hidden rounded-[2rem]">
            <SiteImage
              src={destination.image}
              alt={destination.name}
              width={1400}
              height={800}
              className="max-h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-16">
        <span className="inline-block rounded-full bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-700">
          {destination.category}
        </span>

        <h1 className="mt-5 text-4xl font-black text-gray-900 sm:text-5xl">
          {destination.name}
        </h1>

        <p className="mt-4 text-sm font-semibold text-gray-500">
          {destination.location}
        </p>

        <div className="mt-8 max-w-3xl">
          <p className="text-lg leading-8 text-gray-700">
            {destination.description}
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            {destination.details}
          </p>
        </div>

        <div className="mt-10">
          <Button href="/explore">
            Explore More Destinations
          </Button>
        </div>
      </section>
    </main>
  );
}