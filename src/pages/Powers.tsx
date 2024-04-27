import { usePowerAPI } from "../hooks/useAPI";
import usePowersData from "../hooks/usePowersData";
import { Link } from 'react-router-dom';

function Powers() {

  // API call to ALL powers
  const {
    powersFromQuery,
    powersError,
    powersIsLoading,
  } = usePowerAPI();

  // Convert list of powers to list of <Power>
  const { powers } = usePowersData(powersFromQuery as PowersData, true);

  // TODO make loading/error better looking :)
  if (powersIsLoading) return <div>Fetching powers...</div>;
  if (powersError) return <div>An error occured fetching powers</div>;

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto sm:pt-2 md:pt-2 pt-4 pb-4 px-6">
        <article className="mt-10 mb-2 gap-6">
          <h1 className="stat-value">Powers</h1>
            {/* NEW Powers */}
          <Link to="/power/add"
            className="btn btn-ghost text-xl outline-dashed mt-5 mb-5">+ Add New Power</Link>
          <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 mt-1 mb-1 gap-3">
            {/*List of power elements*/}
            {powers}
          </div>
        </article>
      </div>
    </div >
  );
}

export default Powers;