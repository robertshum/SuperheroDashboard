import { useQuery, useMutation } from "react-query";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const API_LOC: string = import.meta.env.VITE_API_LOCATION;
let API_PORT: string = "";

const ENV_PORT: string = import.meta.env.VITE_API_PORT;

if (ENV_PORT) {
  API_PORT = ENV_PORT;
}

const API_SUFFIX: string = import.meta.env.VITE_API_SUFFIX;

const getPowers = async (getToken: () => Promise<string | null>, id?: number) => {
  const token = await getToken();

  if (!token) {
    throw new Error('We cannot validate this request without a token.');
  }

  const powerSuffix = id === undefined ? 'Power' : `Power/${id}`;
  const response =
    await fetch(`${API_LOC}${API_PORT}${API_SUFFIX}${powerSuffix}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
  const jsonResults = await response.json();
  return jsonResults;
};

const getSuperHeroes = async (getToken: () => Promise<string | null>, id?: number) => {
  const token = await getToken();

  const heroSuffix = id === undefined ? 'SuperHero' : `SuperHero/${id}`;
  const response =
    await fetch(`${API_LOC}${API_PORT}${API_SUFFIX}${heroSuffix}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
  const jsonResults = await response.json();
  return jsonResults;
};

const postPower = async (input: PowerData) => {
  const url = `${API_LOC}${API_PORT}${API_SUFFIX}Power`;
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
  const url = `${API_LOC}${API_PORT}${API_SUFFIX}Superhero`;
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
  const url = `${API_LOC}${API_PORT}${API_SUFFIX}Power`;
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

const patchHero = async (input: SuperheroDataForm) => {
  const url = `${API_LOC}${API_PORT}${API_SUFFIX}Superhero`;
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

const deletePower = async (id: number) => {
  const url = `${API_LOC}${API_PORT}${API_SUFFIX}Power/${id}`;
  const response = await fetch(url, {
    method: "DELETE"
  });

  if (!response.ok) {
    console.log("error deleting a power");
  }

  return await response.json();
};

const deleteHero = async (id: number) => {
  const url = `${API_LOC}${API_PORT}${API_SUFFIX}Superhero/${id}`;
  const response = await fetch(url, {
    method: "DELETE"
  });

  if (!response.ok) {
    console.log("error deleting a hero");
  }

  return await response.json();
};

export const useSuperheroAPI = (id?: number) => {

  const queryKey = id === undefined ? "allHeroData" : "oneHeroData";
  const { getToken } = useAuth();

  // get superheroes from API call
  const {
    data: superHeroesFromQuery,
    error: superHeroesError,
    isLoading: superHeroesIsLoading,
    refetch: superHeroesRefetch
  } = useQuery<SuperheroesData | SuperheroData>(queryKey, () => getSuperHeroes(getToken, id));

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

export const usePatchSuperheroAPI = () => {

  const navigate = useNavigate();
  const {
    mutate: editHero,
    isLoading: editHeroIsLoading,
    error: editHeroError
  } = useMutation(patchHero, {
    onSuccess: () => {
      navigate("/superheroes");
    },
    onError: (error) => {
      // Error actions
      console.log("error occured mutating w/ react query.", error);
    },
  });

  return {
    editHero,
    editHeroIsLoading,
    editHeroError
  };
};

export const useDeleteSuperheroAPI = () => {

  const navigate = useNavigate();
  const {
    mutate: removeHero,
    isLoading: removeHeroIsLoading,
    error: removeHeroError
  } = useMutation(deleteHero, {
    onSuccess: () => {
      navigate("/superheroes");
    },
    onError: (error) => {
      // Error actions
      console.log("error occured mutating w/ react query.", error);
    },
  });

  return {
    removeHero,
    removeHeroIsLoading,
    removeHeroError
  };
};

export const usePowerAPI = (id?: number) => {

  const queryKey = id === undefined ? "allPowerData" : "onePowerData";
  const { getToken } = useAuth();

  // get powers from API call
  const {
    data: powersFromQuery,
    error: powersError,
    isLoading: powersIsLoading,
    refetch: powersRefetch
  } = useQuery<PowersData | PowerData>(queryKey, () => getPowers(getToken, id));

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

export const useDeletePowerAPI = () => {

  const navigate = useNavigate();
  const {
    mutate: removePower,
    isLoading: removePowerIsLoading,
    error: removePowerError
  } = useMutation(deletePower, {
    onSuccess: () => {
      navigate("/powers");
    },
    onError: (error) => {
      // Error actions
      console.log("error occured mutating w/ react query.", error);
    },
  });

  return {
    removePower,
    removePowerIsLoading,
    removePowerError
  };
};