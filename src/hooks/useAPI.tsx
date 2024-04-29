import { useQuery, useMutation } from "react-query";
import { useNavigate } from 'react-router-dom';

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

const postPower = async (input: PowerData) => {
  const url = `${API_LOC}:${API_PORT}${API_SUFFIX}Power`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    console.log("error creating a new power");
  }

  return await response.json();
};

const postHero = async (input: SuperheroDataForm) => {
  const url = `${API_LOC}:${API_PORT}${API_SUFFIX}Superhero`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    console.log("error creating a new power");
  }

  return await response.json();
};

const patchPower = async (input: PowerData) => {
  const url = `${API_LOC}:${API_PORT}${API_SUFFIX}Power`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    console.log("error modifying a power");
  }

  return await response.json();
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

export const usePostHeroAPI = () => {

  const navigate = useNavigate();
  const {
    mutate: addHero,
    isLoading: addHeroIsLoading,
    error: addHeroError
  } = useMutation(postHero, {
    onSuccess: () => {
      navigate("/superheroes");
    },
    onError: (error) => {
      // Error actions
      console.log("error occured mutating w/ react query.", error);
    },
  });

  return {
    addHero,
    addHeroIsLoading,
    addHeroError
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

export const usePostPowerAPI = () => {

  const navigate = useNavigate();
  const {
    mutate: addPower,
    isLoading: addPowerIsLoading,
    error: addPowerError
  } = useMutation(postPower, {
    onSuccess: () => {
      navigate("/powers");
    },
    onError: (error) => {
      // Error actions
      console.log("error occured mutating w/ react query.", error);
    },
  });

  return {
    addPower,
    addPowerIsLoading,
    addPowerError
  };
};

export const usePatchPowerAPI = () => {

  const navigate = useNavigate();
  const {
    mutate: editPower,
    isLoading: editPowerIsLoading,
    error: editPowerError
  } = useMutation(patchPower, {
    onSuccess: () => {
      navigate("/powers");
    },
    onError: (error) => {
      // Error actions
      console.log("error occured mutating w/ react query.", error);
    },
  });

  return {
    editPower,
    editPowerIsLoading,
    editPowerError
  };
};