import { useParams } from 'react-router-dom';
import { useState, ChangeEvent, MouseEvent, useEffect, FormEvent } from "react";
import { usePatchPowerAPI, usePowerAPI } from '../hooks/useAPI';
import AddEditPowerForm from '../components/AddEditPowerForm';
import { useDeletePowerAPI } from '../hooks/useAPI';

const EditPower = () => {

  const { powerId } = useParams();
  const [powerName, setPowerName] = useState("");
  const [description, setDescription] = useState("");

  // API call to power
  const {
    powersFromQuery,
    powersError,
    powersIsLoading,
  } = usePowerAPI(Number(powerId));

  const {
    editPower,
    editPowerIsLoading,
    editPowerError } = usePatchPowerAPI();

  const {
    removePower,
    removePowerIsLoading,
    removePowerError
  } = useDeletePowerAPI();

  // initial load
  useEffect(() => {
    if (powersFromQuery) {
      const power = powersFromQuery as PowerData;
      setPowerName(power.tag);
      setDescription(power.description);
    }
  }, [powersFromQuery]);

  // track name changes
  const handleOnChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setPowerName(name);
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
    editPower({
      id: Number(powerId),
      tag: powerName,
      description
    });
  };

  // submit, delete req, redirect
  const handleOnDelete = (
    event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    //start deleting power
    removePower(Number(powerId));
  };

  // disabled button
  const isDisabled = !powerName || !description;

  // TODO make loading/error better looking :)
  if (powersError) return <div>fetching power...</div>;
  if (powersIsLoading) return <div>fetching power...</div>;
  if (editPowerError) return <div>error editing power...</div>;
  if (editPowerIsLoading) return <div>editing power...</div>;
  if (removePowerIsLoading) return <div>removing power...</div>;
  if (removePowerError) return <div>error removing power...</div>;

  return (
    <AddEditPowerForm
      titleName="Edit Power"
      buttonName="Confirm"
      buttonDeleteName="Delete Power"
      powerName={powerName}
      description={description}
      isButtonDisabled={isDisabled}
      handleOnChangeName={handleOnChangeName}
      handleOnChangeDescription={handleOnChangeDescription}
      handleOnSubmit={handleOnSubmit}
      handleOnDelete={handleOnDelete}
    />
  );
};

export default EditPower;