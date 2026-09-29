import HeritageCard from "../molecules/HeritageCard";

export default function HeritageGrid({
  destinations,
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination) => (
        <HeritageCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </div>
  );
}