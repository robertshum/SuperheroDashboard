import { useSuperheroAPI } from "../hooks/useAPI";
import useSuperHeroesData from "../hooks/useSuperHeroesData";
import { Link } from 'react-router-dom';
import FilterForm from "../components/FilterForm";
import { ChangeEvent, useEffect, useState } from "react";

function Superheroes() {

  const {
    superHeroesFromQuery,
    superHeroesError,
    superHeroesIsLoading
  } = useSuperheroAPI();

  // tracking user input
  const [filter, setFilter] = useState("");

  // track filtered heroes
  const [filteredHeroes, setFilteredHeroes] =
    useState<SuperheroesData>({ $id: 0, $values: [] });

  // Convert list of heroes to list of <Superheroes>
  const { superHeroes } = useSuperHeroesData(filteredHeroes as SuperheroesData, true);

  // filter based on typing
  useEffect(() => {

    // handle initial load / empty data
    if (!superHeroesFromQuery || !('$values' in superHeroesFromQuery)) return;

    // if no filter, just return the entire dataset
    if (!filter) {
      setFilteredHeroes(superHeroesFromQuery);
      return;
    }

    // actual filtering
    const $valuesArray = superHeroesFromQuery.$values.filter(hero => {
      return hero.name.toLowerCase().includes(filter.toLowerCase());
    });

    // update filtered heroes state
    setFilteredHeroes((prev: SuperheroesData) => {
      // Otherwise, update the properties and return the updated state
      return {
        ...prev,
        $values: $valuesArray
      };
    });

  }, [filter, superHeroesFromQuery]);

  // handle onchange for user input
  const handleFilterInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setFilter(newValue);
  };

  // TODO make loading/error better looking :)
  if (superHeroesIsLoading) return <div>Fetching heroes...</div>;
  if (superHeroesError) return <div>An error occured fetching heroes</div>;

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto sm:pt-2 md:pt-2 pt-4 px-6">
        <article className="mt-10 mb-2 gap-6">
          <h1 className="stat-value">Superheroes</h1>

          <div className="flex flex-row items-end gap-5 flex-wrap mt-5">
            {/* NEW Hero */}
            <Link to="/hero/add"
              className="btn btn-md btn-ghost text-xl outline-dashed">+ Add New Superhero</Link>
            {/* Filter hero */}
            <FilterForm
              labelText="Filter by hero name"
              placeholderText="Superman"
              onChange={handleFilterInput}
            />
          </div>

          <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 mt-1 mb-1 gap-3">
            {/*List of hero elements*/}
            {superHeroes}
          </div>
        </article>
      </div>
    </div>
  );
}

export default Superheroes;