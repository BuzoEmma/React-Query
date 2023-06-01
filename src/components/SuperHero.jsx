import axios from "axios";
import { useEffect, useState } from "react";

function SuperHero() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    }).catch((error)=>{
        setError(error.message)
        setIsLoading(false)
    })
  }, []);

  if (isLoading) {
    return <h2>Loading .....</h2>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }
  return (
    <div>
      <h3>Super Heroes</h3> 
      {data.map((hero) => (
        <div key={hero.id}>
            <div>{hero.name} {hero.alterEgos}</div>
            
        </div>
      ))}
    </div>
  );
}

export default SuperHero;
