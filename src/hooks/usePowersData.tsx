import { useState, useEffect, Dispatch, SetStateAction } from "react";
import PowerCard from '../components/PowerCard';
import { useNavigate } from "react-router-dom";

const usePowersData = (
  powersFromQuery: PowersData, showEdit: boolean, cap?: number) => {

  const navigate = useNavigate();

  // update powers
  const [powers, setPowers] = useState<any>([]);

  // use powers to populate cards on UI
  useEffect(() => {

    if (powersFromQuery) {

      // TODO more efficient to do this at the SQL level
      // for now, get the most updated powers based on entry order
      // slice it based on cap
      let reversedPowers = powersFromQuery.$values.slice().reverse();

      if (cap) {
        reversedPowers = reversedPowers.slice(0, cap);
      }

      // navigation for the power cards
      const handleView = (id?: number) => {
        navigate(`/power/${id}`);
      };

      const handleEdit = (id?: number) => {
        navigate(`/power/edit/${id}`);
      };

      const mappedPowers = reversedPowers.map((x: PowerData) => {
        return <div key={x.id}><PowerCard
          id={x.id}
          tag={x.tag}
          description={x.description}
          showEdit={showEdit}
          viewClickHandler={() => handleView(x.id)}
          editClickHandler={() => handleEdit(x.id)}
        /></div>;
      });
      setPowers(mappedPowers);
    }
  }, [powersFromQuery]);

  return {
    powers,
    setPowers
  };
};

export const usePowersSelectionData = (
  powersFromQuery: PowersData,
  setSelectedPowers: Dispatch<SetStateAction<number[]>>
) => {

  // update powers
  const [powers, setPowers] = useState<any>([]);

  // use powers to populate cards on UI
  useEffect(() => {

    if (powersFromQuery) {

      let reversedPowers = powersFromQuery.$values.slice().reverse();

      // Add power only if it's not in the list
      const addPower = (id?: number) => {
        console.log("attempting to add");

        setSelectedPowers((prevPowers) => {
          const oldPowers = [...prevPowers];
          if (!id) {
            return oldPowers;
          }

          if (oldPowers.includes(id)) {
            return oldPowers;
          }
          oldPowers.push(id);
          return oldPowers;
        });
      };

      const mappedPowers = reversedPowers.map((x: PowerData) => {
        return <div
          onClick={() => addPower(x.id)}
          key={x.id}
          className="badge badge-info hover:badge-outline cursor-pointer">+ {x.tag}
        </div>;
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