import { useEffect, useState } from "react";

export const useAnalytics =
  (powersData: PowersData, hereoesData: SuperheroesData) => {

    const [numHeroes, setNumHeroes] = useState(0);
    const [numPowers, setNumPowers] = useState(0);

    const [mostPowers, setMostPowers]
      = useState<MostPowers>({ name: "", num: 0 });
    const [fewestPowers, setFewestPowers]
      = useState<FewestPowers>({ name: "", num: 0 });

    // calculate fewest / most powers for hero
    useEffect(() => {
      if (hereoesData) {

        // update # of heroes
        setNumHeroes(hereoesData.$values.length);

        const tempMostPowers: MostPowers = { name: "", num: 0 };
        const tempFewestPowers: FewestPowers = { name: "", num: 0 };

        // check for most and fewest powers
        hereoesData.$values.forEach((hero: SuperheroData) => {
          if (hero.powers.$values.length >= tempMostPowers.num) {
            tempMostPowers.num = hero.powers.$values.length;
            tempMostPowers.name = hero.name;
          }
          if (hero.powers.$values.length <= tempFewestPowers.num) {
            tempFewestPowers.num = hero.powers.$values.length;
            tempFewestPowers.name = hero.name;
          }
        });

        // Finally update most/fewest here:
        setMostPowers(prevMostPowers => ({
          ...prevMostPowers,
          name: tempMostPowers.name,
          num: tempMostPowers.num
        }));

        setFewestPowers(prevFewestPowers => ({
          ...prevFewestPowers,
          name: tempFewestPowers.name,
          num: tempFewestPowers.num
        }));
      }
    }, [hereoesData]);

    // set # of powers
    useEffect(() => {
      if (powersData) {
        setNumPowers(powersData.$values.length);
      }
    }, [powersData]);

    return {
      mostPowers,
      fewestPowers,
      numPowers,
      numHeroes
    };
  };