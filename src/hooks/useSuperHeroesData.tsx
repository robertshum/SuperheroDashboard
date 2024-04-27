import { useState, useEffect } from "react";
import SuperHeroCard from '../components/SuperHeroCard';
// import { useSuperheroAPI } from './useAPI';

const useSuperHeroesData = (superHeroesFromQuery: SuperheroesData) => {

  // update superheroes
  const [superHeroes, setSuperHeroes] = useState<any>([]);

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
              id={x.id}
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
    superHeroes
  };
};

export default useSuperHeroesData;