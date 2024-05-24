import { useParams } from 'react-router-dom';
import { usePowerAPI } from '../hooks/useAPI';
import NotificationModal from '../components/NotificationModal';

const Power = () => {

  const { powerId } = useParams();

  // get power from API call
  const {
    powersFromQuery,
    powersError,
    powersIsLoading,
  } = usePowerAPI(Number(powerId));

  // Ensure powersFromQuery is of type PowerData
  const power = powersFromQuery as PowerData;

  //hide or show popup
  const showPopup = powersIsLoading || powersError;
  if (showPopup) {
    return (<NotificationModal {...{ powersIsLoading, powersError }} />);
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto sm:pt-2 md:pt-2 pt-4 pb-4 px-6">
        <div className="card bg-base-100 shadow-xl p-2 min-h-30">
          <div className="card-body">
            {/* name */}
            <h2 className="line-clamp-1 font-semibold flex items-center">Name of Power: <span className="ml-2 badge badge-info font-light">{power.tag}</span></h2>
            {/* desc */}
            <h2 className="break-normal font-semibold flex items-center">Description: <span className="ml-2 font-light">{power.description}</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Power;