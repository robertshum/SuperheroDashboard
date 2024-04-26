import PowerIcon from '../components/graphics/PowerIcon';
import NumHeroesIcon from '../components/graphics/NumHeroesIcon';
import FewestPowersIcon from '../components/graphics/FewestPowersIcon';
import MostPowersIcon from '../components/graphics/MostPowersIcon';
import StatCard from '../components/StatCard';
import usePowersData from "../hooks/usePowersData";
import useSuperHeroesData from "../hooks/useSuperHeroesData";

function Dashboard() {

  // power related data:
  const { powers, powersError, powersIsLoading } = usePowersData();

  // super heroes related data:
  const { superHeroes, superHeroesError, superHeroesIsLoading } = useSuperHeroesData();

  // TODO make loading/error better looking :)
  if (powersIsLoading) return <div>Fetching powers...</div>;
  if (powersError) return <div>An error occured fetching powers</div>;
  if (superHeroesIsLoading) return <div>Fetching superheroes...</div>;
  if (superHeroesError) return <div>An error occured fetching superheroes...</div>;

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  ">

        {/* 4 Mini stats */}
        <article className="grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 mt-2 mb-2 gap-6">
          <StatCard
            icon={<MostPowersIcon />}
            title="Hero with the most powers"
            value="Superman"
            statDesc="with 10 powers!"
            color="text-primary"
          />
          <StatCard
            icon={<FewestPowersIcon />}
            title="Hero with fewest powers"
            value="Average Joe Blow"
            statDesc="we still love you!"
            color="text-secondary"
          />
          <StatCard
            icon={<NumHeroesIcon />}
            title="# Superheroes"
            value="10"
            statDesc="in database"
            color="text-accent"
          />
          <StatCard
            icon={<PowerIcon />}
            title="# Powers"
            value="4"
            statDesc="in database"
            color="text-neutral-content"
          />
        </article>

        {/* NEW Superheroes */}
        <article className="mt-10 mb-2 gap-6">
          <h1 className="stat-value">New Superheroes Added</h1>
          {/* list goes here */}
          <div className="grid lg:grid-cols-6  md:grid-cols-3 grid-cols-1 mt-1 mb-1 gap-3">
            {/* hero... TODO map out index*/}
            {superHeroes}
          </div>
        </article>
        <article className="mt-10 mb-2 gap-6">
          <h1 className="stat-value">New Powers Added</h1>
          {/* list goes here */}
          <div className="grid lg:grid-cols-6  md:grid-cols-3 grid-cols-1 mt-1 mb-1 gap-3">
            {/* list of <PowerCard> gets rendered here*/}
            {powers}
          </div>
        </article>
      </div>
    </div >
  );
}

export default Dashboard;