import { ChangeEvent, FormEvent, useEffect, useState, MouseEvent } from "react";
import AddEditSuperheroForm from "../components/AddEditSuperheroForm";
import PowerLookup from "../components/PowerLookup";
import { usePatchSuperheroAPI, usePowerAPI, useSuperheroAPI } from "../hooks/useAPI";
import { useParams } from "react-router-dom";

const EditHero = () => {

  const { superHeroId } = useParams();

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

  // API call to Heroes
  const {
    superHeroesFromQuery,
    superHeroesError,
    superHeroesIsLoading,
  } = useSuperheroAPI(Number(superHeroId));

  const {
    powersFromQuery,
    powersError,
    powersIsLoading,
  } = usePowerAPI();

  const {
    editHero,
    editHeroIsLoading,
    editHeroError
  } = usePatchSuperheroAPI();

  // initial load
  useEffect(() => {
    if (!superHeroesFromQuery) return;
    const hero = superHeroesFromQuery as SuperheroData;

    // set the fields
    setName(hero.name);
    setFirstName(hero.firstName);
    setLastName(hero.lastName);
    setPlace(hero.place);
    setDescription(hero.description);

    // convert [{id, tag, number}] -> []
    setSelectedPowers(
      hero.powers.$values.map((power: PowerDataform) => power.id)
    );

  }, [superHeroesFromQuery]);

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

      return <div
        onClick={() => removePowerFromSelection(x)}
        key={x}
        className="badge badge-info hover:badge-outline cursor-pointer">{powerName.tag}
      </div>;
    });

    setSelectedJsxPowers(mappedPowers);

  }, [selectedPowers, powerMapping]);

  // TODO make loading/error better looking :)
  if (superHeroesError) return <div>error fetching hero...</div>;
  if (superHeroesIsLoading) return <div>loading superhero...</div>;
  if (editHeroError) return <div>editing hero error...</div>;
  if (editHeroIsLoading) return <div>loading editing hero...</div>;
  if (powersError) return <div>loading power...</div>;
  if (powersIsLoading) return <div>loading powers...</div>;

  const isDisabled = !name || !firstName || !lastName || !place || !description;

  // Remove f(n) from selected list
  const removePowerFromSelection = (id: number) => {
    setSelectedPowers((prev) => prev.filter(x => x !== id));
  };

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
    editHero({
      id: Number(superHeroId),
      name: name,
      firstName: firstName,
      lastName: lastName,
      place: place,
      description: description,
      powerIds: selectedPowers
    });
  };

  return (
    <AddEditSuperheroForm
      titleName="Edit Superhero"
      buttonName="Confirm"
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

export default EditHero;