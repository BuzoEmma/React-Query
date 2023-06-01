import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHeroDetail = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroDetail = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["super-hero", heroId], () => fetchSuperHeroDetail(heroId), {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-hero")
        ?.data?.find((hero) => hero.id === parseInt(heroId));
      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};

// OR

const fetchSuperHeroDetail1 = ({ queryKey }) => {
  const heroId = queryKey[1];

  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroDetail1 = (heroId) => {
  return useQuery(["super-hero", heroId], fetchSuperHeroDetail1);
};
