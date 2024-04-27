import { useState, useEffect } from "react";
import SuperHeroCard from '../components/SuperHeroCard';
import { useNavigate } from "react-router-dom";

const useSuperHeroesData = (
  superHeroesFromQuery: SuperheroesData,
  showEdit: boolean,
  cap?: number) => {

  const navigate = useNavigate();

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

      // navigation for the superhero cards
      const handleView = (id: number) => {
        navigate(`/hero/${id}`);
      };

      const handleEdit = (id: number) => {
        navigate(`/hero/edit/${id}`);
      };

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
              showEdit={showEdit}
              viewClickHandler={() => handleView(x.id)}
              editClickHandler={() => handleEdit(x.id)}
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