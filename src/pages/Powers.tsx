import { usePowerAPI } from "../hooks/useAPI";
import usePowersData from "../hooks/usePowersData";
import { Link } from 'react-router-dom';
import FilterForm from "../components/FilterForm";
import { ChangeEvent, useEffect, useState } from "react";

function Powers() {

  // API call to ALL powers
  const {
    powersFromQuery,
    powersError,
    powersIsLoading,
  } = usePowerAPI();

  // TODO? temp handle of tracking user input
  const [filter, setFilter] = useState("");

  // track filtered powers
  const [filteredPowers, setFilteredPowers] =
    useState<PowersData>({ $id: 0, $values: [] });

  // Convert list of powers to list of <Power>
  const { powers } = usePowersData(filteredPowers as PowersData, true);

  // filter based on typing
  useEffect(() => {

    // handle initial load / empty data
    if (!powersFromQuery || !('$values' in powersFromQuery)) return;

    // if no filter, just return the entire dataset
    if (!filter) {
      setFilteredPowers(powersFromQuery);
      return;
    }

    // actual filtering
    const $valuesArray = powersFromQuery.$values.filter(power => {
      return power.tag.toLowerCase().includes(filter.toLowerCase());
    });

    // update filterd powers state
    setFilteredPowers((prev: PowersData) => {
      // Otherwise, update the properties and return the updated state
      return {
        ...prev,
        $values: $valuesArray
      };
    });

  }, [filter, powersFromQuery]);

  // handle onchange for user input
  const handleFilterInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setFilter(newValue);
  };

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
          <FilterForm
            labelText="Filter by power"
            placeholderText="Flight"
            onChange={handleFilterInput}
          />
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