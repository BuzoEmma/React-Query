import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../utility/Axios.Utility";

const fetchSuperHeroes = () => {
  // return axios.get("http://localhost:4000/superheroes");
  return request({url: "/superheroes"})
};

const addSuperHero = (hero) => {
  // return axios.post("http://localhost:4000/superheroes", hero);
  return request({url: "/superheroes", method: "post", data: hero })

};

const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    cacheTime: 5000,
    staleTime: 3000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    // refetchInterval: 2000,
    refetchIntervalInBackground: true,
    // enabled: false,
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroname = data.data.map((hero) => hero.name);
    //   return superHeroname;
    // },
  });
};

export default useSuperHeroesData;

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries("super-heroes");
      queryClient.setQueryData("super-heroes", (oldqueryData)=>{
        return {
          ...oldqueryData,
          data: [...oldqueryData.data, data.data]
        }
      })
    },
  });
};
