import { useQuery } from "react-query";
const API_LOC: string = import.meta.env.VITE_API_LOCATION;
const API_PORT: number = import.meta.env.VITE_API_PORT;
const API_SUFFIX: string = import.meta.env.VITE_API_SUFFIX;

const getPowers = async () => {
  const response = await fetch(`${API_LOC}:${API_PORT}${API_SUFFIX}Power`);
  const jsonResults = await response.json();
  return jsonResults;
};

const getSuperHeroes = async () => {
  const response = await fetch(`${API_LOC}:${API_PORT}${API_SUFFIX}SuperHero`);
  const jsonResults = await response.json();
  return jsonResults;
};

const useSuperheroAPI = () => {

  console.log("Making Superhero API call!");
  // get powers from API call
  const {
    data: powersFromQuery,
    error: powersError,
    isLoading: powersIsLoading,
    refetch: powersRefetch
  } = useQuery("powersData", getPowers);

  // get superheroes from API call
  const {
    data: superHeroesFromQuery,
    error: superHeroesError,
    isLoading: superHeroesIsLoading,
    refetch: superHeroesRefetch
  } = useQuery("superHeroesData", getSuperHeroes);

  return {
    // powers
    powersFromQuery,
    powersError,
    powersIsLoading,
    powersRefetch,
    // superheroes
    superHeroesFromQuery,
    superHeroesError,
    superHeroesIsLoading,
    superHeroesRefetch
  };
};

export default useSuperheroAPI;