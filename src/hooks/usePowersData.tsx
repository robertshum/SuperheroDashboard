import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import PowerCard from '../components/PowerCard';

const API_LOC: string = import.meta.env.VITE_API_LOCATION;
const API_PORT: number = import.meta.env.VITE_API_PORT;
const API_SUFFIX: string = import.meta.env.VITE_API_SUFFIX;

const getPowers = async () => {
  const response = await fetch(`${API_LOC}:${API_PORT}${API_SUFFIX}Power`);
  const jsonResults = await response.json();
  return jsonResults;
};

const usePowersData = () => {

  // update powers
  const [powers, setPowers] = useState([]);

  // get powers from API call
  const {
    data: powersFromQuery,
    error: powersError,
    isLoading: powersIsLoading,
    refetch: powersRefetch
  } = useQuery("powersData", getPowers);

  // use powers to populate cards on UI
  useEffect(() => {
    if (powersFromQuery) {
      const mappedPowers = powersFromQuery.$values.map((x: { id: number; tag: string; description: string; }) => {
        return <div key={x.id}><PowerCard tag={x.tag} description={x.description} /></div>;
      });
      setPowers(mappedPowers);
    }
  }, [powersFromQuery]);

  return {
    powersRefetch,
    powers,
    powersError,
    powersIsLoading
  };

};

export default usePowersData;