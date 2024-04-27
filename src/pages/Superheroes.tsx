import { useSuperheroAPI } from "../hooks/useAPI";
import useSuperHeroesData from "../hooks/useSuperHeroesData";
import { Link } from 'react-router-dom';

function Superheroes() {

  const {
    superHeroesFromQuery,
    superHeroesError,
    superHeroesIsLoading
  } = useSuperheroAPI();

  // Convert list of heroes to list of <Superheroes>
  const { superHeroes } = useSuperHeroesData(superHeroesFromQuery as SuperheroesData, true);

  // TODO make loading/error better looking :)
  if (superHeroesIsLoading) return <div>Fetching heroes...</div>;
  if (superHeroesError) return <div>An error occured fetching heroes</div>;

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto sm:pt-2 md:pt-2 pt-4 px-6">
        <article className="mt-10 mb-2 gap-6">
          <h1 className="stat-value">Superheroes</h1>
          {/* NEW Hero */}
          <Link to="/hero/add"
            className="btn btn-ghost text-xl outline-dashed mt-5 mb-5">+ Add New Superhero</Link>
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