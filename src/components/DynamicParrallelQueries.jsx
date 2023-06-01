import React from "react";
import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHeroes = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallelQueries = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHeroes(id),
      };
    })
  );

  return (
    <div>
      <h1>Dynamic Parallel Queries</h1>
      {queryResults.map((result) => {
        console.log(result)
        const { isLoading, isError, error, data } = result;

        if (isLoading) {
          return <p >Loading...</p>;
        }

        if (isError) {
          return <p>{error.message}</p>;
        }

        return (
          <div key={result.id}>
            <h2>{data?.data.name}</h2>
            <p>{data?.data.alterEgos}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DynamicParallelQueries;
