import {  useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const fetchColors = (PageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${PageNumber}`);
};

const PaginatedQueriesPage = () => {
  const [PageNumber, setPageNumber] = useState(1);

  const { data, isLoading, error, isError, isFetching  } = useQuery(
    ["colors", PageNumber],
    () => fetchColors(PageNumber),
    {
        keepPreviousData: true
    }
  );

  if (isError) {
    return <p>{error.meaasge}</p>;
  }
  if (isLoading) {
    return "Loading......";
  }
  return (
    <div>
      <p>PaginatedQueriesPage</p>
      <div>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h3>
                {color.id} {color.label}
              </h3>
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={PageNumber === 1}
        >
          Prev Page
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={PageNumber === 4}
        >
          Next Page
        </button>
      </div>
      <div>{isFetching && "loading"}</div>
    </div>
  );
};

export default PaginatedQueriesPage;
