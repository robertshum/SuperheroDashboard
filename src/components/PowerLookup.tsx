import { usePowerAPI } from "../hooks/useAPI";
import { usePowersSelectionData } from "../hooks/usePowersData";
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import FilterForm from "../components/FilterForm";

type PowerLookupProps = {
  // filteredPowers: PowersData;
  // setFilteredPowers: Dispatch<SetStateAction<PowersData>>;
  setSelectedPowers: Dispatch<SetStateAction<number[]>>;
};

const PowerLookup = (props: PowerLookupProps) => {

  // API call to ALL powers
  const {
    powersFromQuery,
    powersError,
    powersIsLoading,
  } = usePowerAPI();

  // tracking user input
  const [filter, setFilter] = useState("");

  // track filtered powers
  const [filteredPowers, setFilteredPowers] =
    useState<PowersData>({ $id: 0, $values: [] });

  // Convert list of powers to list of <Power>
  const { powers } = usePowersSelectionData(
    filteredPowers as PowersData,
    props.setSelectedPowers);

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

    // update filtered powers state
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
    <article className="mt-10 mb-2 gap-6">
      <h1 className="stat-value">Powers</h1>

      <div className="flex flex-row items-end gap-5 flex-wrap mt-5">

        {/* Filter power */}
        <FilterForm
          labelText="Filter by power"
          placeholderText="Flight"
          onChange={handleFilterInput}
        />
      </div>

      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 my-4 gap-3">
        {/*List of power elements*/}
        {powers}
      </div>
    </article>
  );
};

export default PowerLookup;