import SuperHeroCard from '../components/SuperHeroCard';
import PowerCard from '../components/PowerCard';
import PowerIcon from '../components/graphics/PowerIcon';
import NumHeroesIcon from '../components/graphics/NumHeroesIcon';
import FewestPowersIcon from '../components/graphics/FewestPowersIcon';
import MostPowersIcon from '../components/graphics/MostPowersIcon';

function Dashboard() {

  // TODO logic to populate data goes here:
  const heroes = [];
  for (let i = 0; i < 6; i++) {
    heroes.push(<SuperHeroCard />);
  }

  const powers = [];
  for (let i = 0; i < 6; i++) {
    powers.push(<PowerCard />);
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  ">
        {/* 4 Mini stats */}
        <article className="grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 mt-2 mb-2 gap-6">

          <div className="stat">
            <div className="stat-figure text-primary">
              <MostPowersIcon />
            </div>
            <div className="stat-title">Hero with the most powers</div>
            <div className="stat-value text-primary">Superman</div>
            <div className="stat-desc">with 10 powers!</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FewestPowersIcon />
            </div>
            <div className="stat-title">Hero with fewest powers</div>
            <div className="stat-value text-secondary">Average Joe Blow</div>
            <div className="stat-desc">we still love you!</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-accent">
              < NumHeroesIcon />
            </div>
            <div className="stat-title"># Superheroes</div>
            <div className="stat-value text-accent">10</div>
            <div className="stat-desc">in database</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-neutral-content">
              < PowerIcon />
            </div>
            <div className="stat-title"># Powers</div>
            <div className="stat-value text-neutral-content">4</div>
            <div className="stat-desc">in database</div>
          </div>
        </article>
        {/* NEW Superheroes */}
        <article className="mt-10 mb-2 gap-6">
          <h1 className="stat-value">New Superheroes Added</h1>
          {/* list goes here */}
          <div className="grid lg:grid-cols-6  md:grid-cols-3 grid-cols-1 mt-1 mb-1 gap-3">
            {/* hero... TODO map out index*/}
            {heroes.map(x => (
              <div key="1">
                {x}
              </div>
            ))}
          </div>
        </article>
        <article className="mt-10 mb-2 gap-6">
          <h1 className="stat-value">New Powers Added</h1>
          {/* list goes here */}
          <div className="grid lg:grid-cols-6  md:grid-cols-3 grid-cols-1 mt-1 mb-1 gap-3">
            {/* powers... TODO map out index*/}
            {powers.map(x => (
              <div key="1">
                {x}
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

export default Dashboard;