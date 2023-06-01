import { Link } from "react-router-dom";
import useSuperHeroesData, {
  useAddSuperHeroData,
} from "./hooks/useSuperHeroesData";

import { useState } from "react";

const onSuccess = (data) => {
  // console.log("Sucess", data);
};
const onError = (error) => {
  // console.log("Error", error);
};

const RQSuperheros = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const { isLoading, data, isError, error, refetch, isFetching } =
    useSuperHeroesData(onSuccess, onError);
  // console.log({ isLoading, isFetching });

  const { mutate: addHero } = useAddSuperHeroData();

  const handleAddHeroClick = () => {
    const hero = { name, alterEgo }
 
    addHero(hero);
    setName("");
    setAlterEgo("");
  };

  if (isLoading || isFetching) {
    return <div>Loading.....</div>;
  }
  if (isError) {
    return <h3>{error.message}</h3>;
  }
  return (
    <div>
      <div>
        <p>Let Add Hero Page</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true}
          placeholder="Name"
        />
        <br />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
          required={true}
          placeholder="AlterEgo"
        />
        <br />
      
  
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <h3>RQSuperhero 1</h3>
      {/* <button onClick={refetch}>Fetch-Heroes</button> */}
      {data?.data.map((hero) => (
        <div key={hero.id}>
          <div>{/* {hero.alterEgos} */}</div>
          <Link to={`/RQSuperhero/${hero.id}`}>{hero.name} {hero.alterEgo}</Link>
          {/* <Outlet /> */}
        </div>
      ))}
      {/* {data?.map((name) => {
        return <div key={name}>{name}</div>;
      })} */}
    </div>
  );
};

export default RQSuperheros;
