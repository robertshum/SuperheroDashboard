import { useState, useEffect } from "react";
import PowerCard from '../components/PowerCard';

const usePowersData = (powersFromQuery: PowersData, cap?: number) => {

  // update powers
  const [powers, setPowers] = useState<any>([]);

  // use powers to populate cards on UI
  useEffect(() => {

    if (powersFromQuery) {

      // TODO more efficient to do this at the SQL level
      // get the most updated powers based on time
      // slice it based on cap
      let reversedPowers = powersFromQuery.$values.slice().reverse();

      if (cap) {
        reversedPowers = reversedPowers.slice(0, cap);
      }

      const mappedPowers = reversedPowers.map((x: PowerData) => {
        return <div key={x.id}><PowerCard id={x.id} tag={x.tag} description={x.description} /></div>;
      });
      setPowers(mappedPowers);
    }
  }, [powersFromQuery]);

  return {
    powers,
    setPowers
  };
};

export default usePowersData;