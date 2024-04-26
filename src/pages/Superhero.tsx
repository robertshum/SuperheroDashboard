import { useParams } from 'react-router-dom';
import { useSuperheroAPI } from '../hooks/useAPI';
import { useNavigate } from "react-router-dom";

const Superhero = () => {

  const { superHeroId } = useParams();
  const navigate = useNavigate();

  // get hero from API call
  const {
    superHeroesFromQuery,
    superHeroesError,
    superHeroesIsLoading,
  } = useSuperheroAPI(Number(superHeroId));

  // TODO make loading/error better looking :)
  if (superHeroesIsLoading) return <div>Fetching powers...</div>;
  if (superHeroesError) return <div>An error occured fetching powers</div>;

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto md:pt-2 pt-2 pb-2 px-2  ">
        <div
          className="card bg-base-100 shadow-xl p-2 min-h-56">
          <div className="card-body">
            {/* name */}
            <h2 className="card-title text-3xl">{superHeroesFromQuery.name}</h2>

            {/* fname */}
            <h2 className="line-clamp-1 card-title font-semibold flex items-center">First: <span className="ml-2 badge badge-primary font-light">{superHeroesFromQuery.firstName}</span></h2>

            {/* lname */}
            <h2 className="line-clamp-1 card-title font-semibold flex items-center">Last: <span className="ml-2 badge badge-secondary font-light">{superHeroesFromQuery.lastName}</span></h2>

            {/* location */}
            <h2 className="line-clamp-1 card-title font-semibold flex items-center">Location: <span className="ml-2 badge badge-neutral font-light">{superHeroesFromQuery.place}</span></h2>

            {/* description */}
            <p className="break-normal font-semibold flex items-center">{superHeroesFromQuery.description}</p>
            <div className="card-actions justify-start">
              <span>
                {superHeroesFromQuery.powers && superHeroesFromQuery.powers.$values.map((x: { id: number; tag: string; }) => {
                  return (
                    <div
                      onClick={() => navigate(`/power/${x.id}`)}
                      className=
                      "hover:bg-info cursor-pointer badge badge-outline m-1">
                      {x.tag}
                    </div>
                  );
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Superhero;