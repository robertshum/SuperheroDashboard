import { useParams } from 'react-router-dom';
import { useSuperheroAPI } from '../hooks/useAPI';
import { useNavigate } from "react-router-dom";
import NotificationModal from '../components/NotificationModal';

const Superhero = () => {

  const { superHeroId } = useParams();
  const navigate = useNavigate();

  // get hero from API call
  const {
    superHeroesFromQuery,
    superHeroesError,
    superHeroesIsLoading,
  } = useSuperheroAPI(Number(superHeroId));

  // Ensure superHeroesFromQuery is of type SuperheroData
  const hero = superHeroesFromQuery as SuperheroData;

  //hide or show popup
  const showPopup = superHeroesIsLoading || superHeroesError;
  if (showPopup) {
    return (<NotificationModal {...{ superHeroesIsLoading, superHeroesError }} />);
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto sm:pt-2 md:pt-2 pt-4 pb-4 px-6">
        <div
          className="card bg-base-100 shadow-xl p-2 min-h-56">
          <div className="card-body">
            {/* name */}
            <h2 className="card-title text-3xl">{hero.name}</h2>

            {/* fname */}
            <h2 className="line-clamp-1 card-title font-semibold flex items-center">First: <span className="ml-2 badge badge-primary font-light">{hero.firstName}</span></h2>

            {/* lname */}
            <h2 className="line-clamp-1 card-title font-semibold flex items-center">Last: <span className="ml-2 badge badge-secondary font-light">{hero.lastName}</span></h2>

            {/* location */}
            <h2 className="line-clamp-1 card-title font-semibold flex items-center">Location: <span className="ml-2 badge badge-neutral font-light">{hero.place}</span></h2>

            {/* description */}
            <p className="break-normal font-semibold flex items-center">{hero.description}</p>
            <div className="card-actions justify-start">
              <span>
                {hero.powers && hero.powers.$values.map((x: { id: number; tag: string; }) => {
                  return (
                    <div key={x.id}
                      onClick={() => navigate(`/power/${x.id}`)}
                      className=
                      "hover:bg-info cursor-pointer badge badge-outline m-1 select-none">
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