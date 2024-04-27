import { useState, useEffect } from "react";
import PowerCard from '../components/PowerCard';

const usePowersData = (powersFromQuery: PowersData) => {

  // update powers
  const [powers, setPowers] = useState<any>([]);

  // use powers to populate cards on UI
  useEffect(() => {
    console.log("usePowersData", powersFromQuery);
    if (powersFromQuery) {
      const mappedPowers = powersFromQuery.$values.map((x: { id: number; tag: string; description: string; }) => {
        return <div key={x.id}><PowerCard id={x.id} tag={x.tag} description={x.description} /></div>;
      });
      setPowers(mappedPowers);
    }
  }, [powersFromQuery]);

  return {
    powers
  };
};

export default usePowersData;