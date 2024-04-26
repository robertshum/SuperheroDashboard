import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import SuperHeroCard from '../components/SuperHeroCard';

const API_LOC: string = import.meta.env.VITE_API_LOCATION;
const API_PORT: number = import.meta.env.VITE_API_PORT;
const API_SUFFIX: string = import.meta.env.VITE_API_SUFFIX;

const getSuperHeroes = async () => {
  const response = await fetch(`${API_LOC}:${API_PORT}${API_SUFFIX}SuperHero`);
  const jsonResults = await response.json();
  return jsonResults;
};

const useSuperHeroesData = () => {

  // update superheroes
  const [superHeroes, setSuperHeroes] = useState([]);

  // get powers from API call
  const {
    data: superHeroesFromQuery,
    error: superHeroesError,
    isLoading: superHeroesIsLoading,
    refetch: superHeroesRefetch
  } = useQuery("superHeroesData", getSuperHeroes);

  // use powers to populate cards on UI
  useEffect(() => {
    if (superHeroesFromQuery) {
      const mappedSuperHeroes = superHeroesFromQuery.$values.map((
        x: {
          id: number;
          name: string;
          firstName: string;
          lastName: string;
          description: string;
          place: string;
          powers: { $values: []; };
        }) => {
        return (
          <div key={x.id}>
            <SuperHeroCard
              name={x.name}
              firstName={x.firstName}
              lastName={x.lastName}
              description={x.description}
              place={x.place}
              numOfPowers={x.powers.$values.length}
            />
          </div>
        );
      });
      setSuperHeroes(mappedSuperHeroes);
    }
  }, [superHeroesFromQuery]);

  return {
    superHeroesRefetch,
    superHeroes,
    superHeroesError,
    superHeroesIsLoading
  };

};

export default useSuperHeroesData;