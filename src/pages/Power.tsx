import { useParams } from 'react-router-dom';
import { usePowerAPI } from '../hooks/useAPI';

const Power = () => {

  const { powerId } = useParams();

  // get power from API call
  const {
    powersFromQuery,
    powersError,
    powersIsLoading,
  } = usePowerAPI(Number(powerId));

  console.log("powers from page", powersFromQuery);

  // TODO make loading/error better looking :)
  if (powersIsLoading) return <div>Fetching powers...</div>;
  if (powersError) return <div>An error occured fetching powers</div>;

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto md:pt-2 pt-2 pb-2 px-2  ">
        <div className="card bg-base-100 shadow-xl p-2 min-h-30">
          <div className="card-body">
            {/* name */}
            <h2 className="line-clamp-1 font-semibold">Name of Power: <span className="ml-2 badge badge-info font-light">{powersFromQuery.tag}</span></h2>
            {/* desc */}
            <h2 className="break-normal font-semibold">Description: <span className="ml-2 font-light">{powersFromQuery.description}</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Power;