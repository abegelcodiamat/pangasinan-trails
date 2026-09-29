import SiteImage from "../atoms/SiteImage";
import Button from "../atoms/Button";

export default function HeritageCard({
  destination,
}) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden">
        <SiteImage
          src={destination.image}
          alt={destination.name}
          width={900}
          height={600}
          className="aspect-[4/3] object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
          {destination.category}
        </span>

        <p className="mt-3 text-xs font-medium text-gray-500">
          {destination.location}
        </p>

        <h3 className="mt-1 text-xl font-bold text-gray-900">
          {destination.name}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {destination.description}
        </p>

        <div className="mt-5">
          <Button
            href={`/destinations/${destination.id}`}
            variant="outline"
          >
            Discover
          </Button>
        </div>
      </div>
    </article>
  );
}