import PowerIcon from '../components/graphics/PowerIcon';
import NumHeroesIcon from '../components/graphics/NumHeroesIcon';
import FewestPowersIcon from '../components/graphics/FewestPowersIcon';
import MostPowersIcon from '../components/graphics/MostPowersIcon';
import StatCard from '../components/StatCard';
import usePowersData from "../hooks/usePowersData";
import useSuperHeroesData from "../hooks/useSuperHeroesData";
import { usePowerAPI, useSuperheroAPI } from '../hooks/useAPI';
import { useAnalytics } from '../hooks/useAnalytics';

function Dashboard() {

  // API call to ALL powers
  const {
    powersFromQuery,
    powersError,
    powersIsLoading,
  } = usePowerAPI();

  // API call to ALL heroes
  const {
    superHeroesFromQuery,
    superHeroesError,
    superHeroesIsLoading,
  } = useSuperheroAPI();

  // Convert list of powers to list of <Power>
  const { powers } = usePowersData(powersFromQuery as PowersData, false, 6);

  // Convert list of heroes to list of <Superhero>
  const { superHeroes } = useSuperHeroesData(superHeroesFromQuery as SuperheroesData, false, 6);

  // perform basic analytics.
  const {
    mostPowers,
    fewestPowers,
    numPowers,
    numHeroes
  } = useAnalytics(powersFromQuery as PowersData, superHeroesFromQuery as SuperheroesData);

  const mostPowerStr = `with ${mostPowers.num} ${mostPowers.num <= 1 ? "Power!" : "powers!"}`;

  const fewestPowerStr = `with ${fewestPowers.num} ${fewestPowers.num <= 1 ? "Power." : "powers."}  We still love you!`;

  // TODO make loading/error better looking :)
  if (powersIsLoading) return <div>Fetching powers...</div>;
  if (powersError) return <div>An error occured fetching powers</div>;
  if (superHeroesIsLoading) return <div>Fetching superheroes...</div>;
  if (superHeroesError) return <div>An error occured fetching superheroes...</div>;

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto sm:pt-2 md:pt-2 pt-4 pb-4 px-6">

        {/* 4 Mini stats */}
        <article className="grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 mt-2 mb-2 gap-6">
          <StatCard
            icon={<MostPowersIcon />}
            title="Hero with the most powers"
            value={mostPowers.name}
            statDesc={mostPowerStr}
            color="text-primary"
          />
          <StatCard
            icon={<FewestPowersIcon />}
            title="Hero with fewest powers"
            value={fewestPowers.name}
            statDesc={fewestPowerStr}
            color="text-secondary"
          />
          <StatCard
            icon={<NumHeroesIcon />}
            title="# Superheroes"
            value={numHeroes.toString()}
            statDesc="in database"
            color="text-accent"
          />
          <StatCard
            icon={<PowerIcon />}
            title="# Powers"
            value={numPowers.toString()}
            statDesc="in database"
            color="text-neutral-content"
          />
        </article>

        {/* NEW Superheroes */}
        <article className="mt-10 mb-2 gap-6">
          <h1 className="stat-value whitespace-normal">New Superheroes</h1>
          <div className="grid lg:grid-cols-6  md:grid-cols-3 grid-cols-1 mt-1 mb-1 gap-3">
            {/*List of superhero elements*/}
            {superHeroes}
          </div>
        </article>
        {/* NEW Powers */}
        <article className="mt-10 mb-2 gap-6">
          <h1 className="stat-value whitespace-normal">New Powers</h1>
          <div className="grid lg:grid-cols-6  md:grid-cols-3 grid-cols-1 mt-1 mb-1 gap-3">
            {/*List of power elements*/}
            {powers}
          </div>
        </article>
      </div>
    </div >
  );
}

export default Dashboard;