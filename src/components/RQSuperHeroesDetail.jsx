import { useParams } from "react-router-dom";
import { useSuperHeroDetail } from "./hooks/useSuperHeroData";

const RQSuperHeroesDetail = () => {
  const { heroId } = useParams();

  const { isLoading, error, isError, data } = useSuperHeroDetail(heroId);

  if (isLoading) return "Is Loading.....";
  if (isError) return <h3>{error.message}</h3>;
  return (
    <>
      <div>RQSuperHeroes Details</div>
      {data.data.name} {data.data.alterEgo}
    </>
  );
};

export default RQSuperHeroesDetail;
