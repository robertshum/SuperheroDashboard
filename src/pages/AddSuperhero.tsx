import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";
import AddEditSuperheroForm from "../components/AddEditSuperheroForm";
import PowerLookup from "../components/PowerLookup";
import { usePowerAPI } from "../hooks/useAPI";
import { usePostHeroAPI } from "../hooks/useAPI";
import Badge from "../components/Badge";

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

  // custom hook to save
  const { addHero, addHeroIsLoading, addHeroError } = usePostHeroAPI();

  // API call to ALL powers;
  const {
    powersFromQuery,
    powersError,
    powersIsLoading,
  } = usePowerAPI();

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

  // Construct a list of powers in form of JSX.Elements
  useEffect(() => {

    if (!selectedPowers || !powerMapping) return;

    // convert list of powers (number) -> Powers with tags:
    // let mappedPowers = [];
    const mappedPowers = selectedPowers.map((x: number) => {

      // get associatd tag from mapping
      let powerName = powerMapping.find(item => item.id === x);

      // should not happen...how did we get a power that has no ID
      if (!powerName) {
        powerName = { id: -1, tag: "undefined" };
      }

      return (
        <Badge 
          key={x}
          onClickHandler={() => removePowerFromSelection(x)}
          name={powerName.tag}
        />
      );
    });

    setSelectedJsxPowers(mappedPowers);


  }, [selectedPowers, powerMapping]);

  const isDisabled = !name || !firstName || !lastName || !place || !description;

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

    //start adding power
    addHero({
      name: name,
      firstName: firstName,
      lastName: lastName,
      place: place,
      description: description,
      powerIds: selectedPowers
    });
  };

  // TODO make loading/error better looking :)
  if (powersError) return <div>fetching power...</div>;
  if (powersIsLoading) return <div>error fetching power...</div>;
  if (addHeroError) return <div>add hero error...</div>;
  if (addHeroIsLoading) return <div>loading adding hero...</div>;

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
      selectedPowers={selectedJsxPowers}
    >
      {/* Composition, and all that jazz. */}
      <PowerLookup setSelectedPowers={setSelectedPowers} />

    </AddEditSuperheroForm>
  );
};

export default AddSuperhero;