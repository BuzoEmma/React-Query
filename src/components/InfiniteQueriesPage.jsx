import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { Fragment } from "react";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

const InfiniteQueriesPage = () => {
  const {
    data,
    isLoading,
    error,
    isError,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isError) {
    return <p>{error.meaasge}</p>;
  }
  if (isLoading) {
    return "Loading......";
  }

  return (
    <div>
      <p>InfiniteQueriesPage</p>
      <div>
        {data?.pages?.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.map((color) => (
                <h2 key={color.id}>
                  {color.id} {color.label}
                </h2>
              ))}
            </Fragment>
          );
        })}
      </div>
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        Load More
      </button>
      <div>{isFetching && !isFetchingNextPage ? "Fetching....." : false}</div>
    </div>
  );
};

export default InfiniteQueriesPage;
