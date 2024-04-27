import { useQuery } from "react-query";
const API_LOC: string = import.meta.env.VITE_API_LOCATION;
const API_PORT: number = import.meta.env.VITE_API_PORT;
const API_SUFFIX: string = import.meta.env.VITE_API_SUFFIX;

const getPowers = async (id?: number) => {
  const powerSuffix = id === undefined ? 'Power' : `Power/${id}`;
  const response =
    await fetch(`${API_LOC}:${API_PORT}${API_SUFFIX}${powerSuffix}`);
  const jsonResults = await response.json();
  return jsonResults;
};

const getSuperHeroes = async (id?: number) => {
  const heroSuffix = id === undefined ? 'SuperHero' : `SuperHero/${id}`;
  const response =
    await fetch(`${API_LOC}:${API_PORT}${API_SUFFIX}${heroSuffix}`);
  const jsonResults = await response.json();
  return jsonResults;
};

export const useSuperheroAPI = (id?: number) => {

  const queryKey = id === undefined ? "allHeroData" : "oneHeroData";

  // get superheroes from API call
  const {
    data: superHeroesFromQuery,
    error: superHeroesError,
    isLoading: superHeroesIsLoading,
    refetch: superHeroesRefetch
  } = useQuery<SuperheroesData | SuperheroData>(queryKey, () => getSuperHeroes(id));

  return {
    // superheroes
    superHeroesFromQuery,
    superHeroesError,
    superHeroesIsLoading,
    superHeroesRefetch
  };
};

export const usePowerAPI = (id?: number) => {

  const queryKey = id === undefined ? "allPowerData" : "onePowerData";

  // get powers from API call
  const {
    data: powersFromQuery,
    error: powersError,
    isLoading: powersIsLoading,
    refetch: powersRefetch
  } = useQuery<PowersData | PowerData>(queryKey, () => getPowers(id));

  return {
    // powers
    powersFromQuery,
    powersError,
    powersIsLoading,
    powersRefetch,
  };
};