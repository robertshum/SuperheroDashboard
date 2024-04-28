import { useParams } from 'react-router-dom';
import { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import { usePatchPowerAPI, usePowerAPI } from '../hooks/useAPI';
import AddEditPowerForm from '../components/AddEditPowerForm';

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
  const handleOnSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    //start adding power
    editPower({
      id: Number(powerId),
      tag: powerName,
      description
    });
  };

  // disabled button
  const isDisabled = !powerName || !description;
  
  // TODO make loading/error better looking :)
  if (powersError) return <div>fetching power...</div>;
  if (powersIsLoading) return <div>error fetching power...</div>;
  if (editPowerError) return <div>editing power...</div>;
  if (editPowerIsLoading) return <div>error editing power...</div>;

  return (
    <AddEditPowerForm
      titleName="Edit Power"
      buttonName="Confirm"
      powerName={powerName}
      description={description}
      isButtonDisabled={isDisabled}
      handleOnChangeName={handleOnChangeName}
      handleOnChangeDescription={handleOnChangeDescription}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default EditPower;