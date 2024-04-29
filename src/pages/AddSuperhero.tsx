import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";
import AddEditSuperheroForm from "../components/AddEditSuperheroForm";
import PowerLookup from "../components/PowerLookup";
import { usePowerAPI } from "../hooks/useAPI";

const AddSuperhero = () => {

  // data to save for new hero
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPowers, setSelectedPowers] = useState<number[]>([]);

  // data to render component
  const [selectedJsxPowers, setSelectedJsxPowers] = useState<JSX.Element[]>([]);
  const [powerMapping, setPowerMapping]
    = useState<{ id: number; tag: string; }[]>([]);

  // API call to ALL powers;
  const {
    powersFromQuery,
    powersError,
    powersIsLoading,
  } = usePowerAPI();

  // track filtered powers
  // TODO DO we really need this.
  const [filteredPowers, setFilteredPowers] = useState<PowersData>({ $id: 0, $values: [] });

  // Remove f(n) from selected list
  const removePowerFromSelection = (id: number) => {
    setSelectedPowers((prev) => prev.filter(x => x !== id));
  };

  useEffect(() => {
    if (!powersFromQuery || !('$values' in powersFromQuery)) return;

    const mapping = powersFromQuery.$values.map(power => {
      return { id: power.id, tag: power.tag };
    });

    setPowerMapping(() => mapping);

  }, [powersFromQuery]);

  // TODO needs a list of
  useEffect(() => {

    if (!selectedPowers) return;
    if (!powerMapping) return;

    // convert list of powers (number) -> Powers with tags:
    // let mappedPowers = [];
    const mappedPowers = selectedPowers.map((x: number) => {

      // get associatd tag from mapping
      let powerName = powerMapping.find(item => item.id === x);

      // should not happen...how did we get a power that has no ID
      if (!powerName) {
        powerName = { id: -1, tag: "undefined" };
      }

      return <div
        onClick={() => removePowerFromSelection(x)}
        key={x}
        className="badge badge-info">{powerName.tag}
      </div>;
    });

    setSelectedJsxPowers(mappedPowers);


  }, [selectedPowers]);

  const isDisabled = false;

  // track name changes
  const handleOnChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setName(name);
  };

  // track first name changes
  const handleOnChangeFName = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setFirstName(name);
  };

  // track first name changes
  const handleOnChangeLName = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setLastName(name);
  };

  // track place changes
  const handleOnChangePlace = (e: ChangeEvent<HTMLInputElement>) => {
    const place = e.target.value;
    setPlace(place);
  };

  // track desc changes
  const handleOnChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const desc = e.target.value;
    setDescription(desc);
  };

  // submit, post req, redirect
  const handleOnSubmit = (
    event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  };

  return (
    <AddEditSuperheroForm
      titleName="Add Superhero"
      buttonName="Add Superhero"
      name={name}
      firstName={firstName}
      lastName={lastName}
      place={place}
      description={description}
      isButtonDisabled={isDisabled}
      handleOnChangeName={handleOnChangeName}
      handleOnChangeFName={handleOnChangeFName}
      handleOnChangeLName={handleOnChangeLName}
      handleOnChangePlace={handleOnChangePlace}
      handleOnChangeDescription={handleOnChangeDescription}
      handleOnSubmit={handleOnSubmit}
      filteredPowers={filteredPowers}
      setFilteredPowers={setFilteredPowers}
      selectedPowers={selectedJsxPowers}
    // setSelectedPowers={setSelectedPowers}
    >
      {/* Composition, and all that jazz. */}
      <PowerLookup
        // filteredPowers={props.filteredPowers}
        // setFilteredPowers={props.setFilteredPowers}

        setSelectedPowers={setSelectedPowers}
      />
    </AddEditSuperheroForm>
  );
};

export default AddSuperhero;