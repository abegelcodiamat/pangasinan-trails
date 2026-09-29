"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import SearchForm from "@/components/molecules/SearchForm";
import HeritageGrid from "@/components/organisms/HeritageGrid";
import { destinations } from "@/data/destinations";

const categories = [
  "All",
  "Beach",
  "Nature",
  "History",
  "Culture",
  "Agriculture",
];

function ExploreContent() {
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const urlCategory = searchParams.get("category");

    if (urlCategory && categories.includes(urlCategory)) {
      setCategory(urlCategory);
    }
  }, [searchParams]);

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        destination.name.toLowerCase().includes(searchText) ||
        destination.description.toLowerCase().includes(searchText) ||
        destination.location.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || destination.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen bg-[#F8FAF9]">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Page heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1F2937]">
            Explore Pangasinan
          </h1>

          <p className="mt-2 text-[#6B7280]">
            Discover beaches, natural attractions, cultural landmarks,
            historical places, and agricultural destinations.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <SearchForm onSearch={setSearch} />
        </div>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                category === item
                  ? "bg-teal-700 text-white"
                  : "border border-gray-200 bg-white text-gray-700 hover:bg-teal-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Results */}
        {filteredDestinations.length > 0 ? (
          <HeritageGrid destinations={filteredDestinations} />
        ) : (
          <div className="rounded-lg bg-white p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              No destinations found
            </h2>

            <p className="mt-2 text-gray-500">
              Try a different search term or category.
            </p>
          </div>
        )}

      </section>
    </main>
  );
}

function ExploreLoading() {
  return (
    <main className="min-h-screen bg-[#F8FAF9]">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-gray-500">
          Loading destinations...
        </p>
      </section>
    </main>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<ExploreLoading />}>
      <ExploreContent />
    </Suspense>
  );
}