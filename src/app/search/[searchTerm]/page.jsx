import React from "react";
import Result from "@/components/Result";

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}`
  );
  const data = await res.json();
  const results = data.results;

  return (
    <div className="search-page">
      {results.length === 0 ? (
        <h1 className="text-center pt-6">No result found!</h1>
      ) : (
        <Result result={results} />
      )}
    </div>
  );
}
