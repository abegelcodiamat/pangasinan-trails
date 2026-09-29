"use client";

import { useState } from "react";
import Icon from "../atoms/Icon";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (onSearch) {
      onSearch(query);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm"
    >
      <label htmlFor="destination-search" className="sr-only">
        Search destinations
      </label>

      <input
        id="destination-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Pangasinan destinations..."
        className="min-w-0 flex-1 px-5 py-3 text-sm outline-none"
      />

      <button
        type="submit"
        aria-label="Search destinations"
        className="flex items-center justify-center bg-teal-700 px-5 text-white hover:bg-teal-800"
      >
        <Icon name="search" size={22} />
      </button>
    </form>
  );
}