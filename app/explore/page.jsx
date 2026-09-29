"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import HeaderNavigation from "@/components/organisms/HeaderNavigation";
import HeritageGrid from "@/components/organisms/HeritageGrid";
import SearchForm from "@/components/molecules/SearchForm";
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
      const matchesSearch =
        destination.name.toLowerCase().includes(search.toLowerCase()) ||
        destination.description.toLowerCase().includes(search.toLowerCase()) ||
        destination.location.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || destination.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen bg-[#F8FAF9]">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1F2937]">
            Explore Pangasinan
          </h1>

          <p className="mt-2 text-[#6B7280]">
            Discover beaches, natural attractions, cultural landmarks,
            historical places, and agricultural destinations.
          </p>
        </div>

        <div className="mb-6">
          <SearchForm
            value={search}
            onChange={setSearch}
            placeholder="Search destinations..."
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                category === item
                  ? "bg-[#0F766E] text-white"
                  : "bg-white text-[#1F2937] border border-[#E5E7EB] hover:bg-[#E8F5F2]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {filteredDestinations.length > 0 ? (
          <HeritageGrid destinations={filteredDestinations} />
        ) : (
          <div className="rounded-lg bg-white p-10 text-center">
            <h2 className="text-xl font-semibold text-[#1F2937]">
              No destinations found
            </h2>

            <p className="mt-2 text-[#6B7280]">
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
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-[#6B7280]">Loading destinations...</p>
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