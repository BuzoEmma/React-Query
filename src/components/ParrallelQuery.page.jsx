import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const fetchFrineds = () => {
  return axios.get("http://localhost:4000/frineds");
};

const ParrallelQuery = () => {
  const { data: heros } = useQuery("super", fetchSuperHeroes);

  const {
    isLoading,
    error,
    isError,
    data: friends,
  } = useQuery("super-friends", fetchFrineds);

  if (isLoading) {
    return <h3>Loading....</h3>;
  }
  if (isError) {
    return <h3>{error.message}</h3>;
  }
  return (
    <>
      <div>
        <h1>Parrallel</h1> <br />
        <em>
          {heros?.data.map((hero) => {
            return (
              <div key={hero.id}>
                <h3>{hero.name}</h3>
                <h5>{hero.alterEgos}</h5>
              </div>
            );
          })}
        </em>
      </div>
      <div>
        <h6>
          {friends?.data.map((hero) => {
            return (
              <b key={hero.id}>
                <h5>{hero.name}</h5>
                <h1>{hero.alterEgos}</h1>
              </b>
            );
          })}
        </h6>
      </div>
    </>
  );
};

export default ParrallelQuery;
