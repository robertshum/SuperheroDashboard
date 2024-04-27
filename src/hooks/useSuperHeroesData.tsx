import { useState, useEffect } from "react";
import SuperHeroCard from '../components/SuperHeroCard';
// import { useSuperheroAPI } from './useAPI';

const useSuperHeroesData = (superHeroesFromQuery: SuperheroesData, cap?: number) => {

  // update superheroes
  const [superHeroes, setSuperHeroes] = useState<any>([]);

  // use powers to populate cards on UI
  useEffect(() => {
    if (superHeroesFromQuery) {

      // TODO more efficient to do this at the SQL level
      // get the most updated heroes based on time
      // slice it based on cap
      let reversedHeroes = superHeroesFromQuery.$values.slice().reverse();

      if (cap) {
        reversedHeroes = reversedHeroes.slice(0, cap);
      }

      const mappedSuperHeroes = reversedHeroes.map((
        x: SuperheroData) => {
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
    superHeroes,
    setSuperHeroes
  };
};

export default useSuperHeroesData;