"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import SearchForm from "@/components/molecules/SearchForm";
import HeritageGrid from "@/components/organisms/HeritageGrid";

import destinations from "@/data/destinations";

const categories = [
  "All",
  "Beach",
  "Nature",
  "Heritage",
];

function ExploreContent() {
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");

    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setCategory(categoryFromUrl);
    }
  }, [searchParams]);

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesSearch =
        destination.name.toLowerCase().includes(search.toLowerCase()) ||
        destination.location.toLowerCase().includes(search.toLowerCase()) ||
        destination.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || destination.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen bg-[#F8FAF9] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore Pangasinan
          </h1>

          <p className="mt-2 max-w-2xl text-gray-600">
            Discover beaches, natural attractions, and heritage destinations
            across Pangasinan.
          </p>
        </div>

        <div className="mb-6">
          <SearchForm onSearch={setSearch} />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                category === item
                  ? "bg-teal-700 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {filteredDestinations.length > 0 ? (
          <HeritageGrid destinations={filteredDestinations} />
        ) : (
          <div className="rounded-xl border border-gray-200 bg-white p-10 text-center">
            <h2 className="text-lg font-semibold text-gray-900">
              No destinations found
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Try another search term or category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function ExplorePage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#F8FAF9] px-4 py-10">
          <div className="mx-auto max-w-7xl">
            Loading destinations...
          </div>
        </main>
      }
    >
      <ExploreContent />
    </Suspense>
  );
}