"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import HeritageGrid from "../../components/organisms/HeritageGrid";
import SearchForm from "../../components/molecules/SearchForm";
import destinations from "../../data/destinations";

const categories = [
  "All",
  "Beach",
  "Nature",
  "Heritage",
  "Culture",
];

export default function ExplorePage() {
  const searchParams = useSearchParams();

  const initialCategory =
    searchParams.get("category") || "All";

  const [category, setCategory] =
    useState(initialCategory);

  const [search, setSearch] = useState("");

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesCategory =
        category === "All" ||
        destination.category === category;

      const searchText = search.toLowerCase();

      const matchesSearch =
        destination.name
          .toLowerCase()
          .includes(searchText) ||
        destination.location
          .toLowerCase()
          .includes(searchText) ||
        destination.description
          .toLowerCase()
          .includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main>
      {/* PAGE HEADER */}
      <section className="bg-teal-950 px-5 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
            Explore
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-black sm:text-5xl">
            Find your next Pangasinan trail.
          </h1>

          <p className="mt-5 max-w-2xl text-teal-100">
            Search through beaches, natural attractions,
            heritage landmarks, and other destinations.
          </p>
        </div>
      </section>

      {/* SEARCH + FILTER */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="flex flex-col gap-6">
          <SearchForm
            onSearch={(value) => setSearch(value)}
          />

          <div
            className="flex flex-wrap gap-2"
            aria-label="Destination categories"
          >
            {categories.map((item) => {
              const active = category === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-teal-700 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-bold text-gray-900">
              {filteredDestinations.length}
            </span>{" "}
            destination
            {filteredDestinations.length !== 1
              ? "s"
              : ""}
          </p>
        </div>

        <HeritageGrid
          destinations={filteredDestinations}
        />
      </section>
    </main>
  );
}