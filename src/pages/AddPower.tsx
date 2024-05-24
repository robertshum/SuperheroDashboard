import { useState, ChangeEvent, MouseEvent, FormEvent } from "react";
import { usePostPowerAPI } from "../hooks/useAPI";
import AddEditPowerForm from "../components/AddEditPowerForm";
import NotificationModal from '../components/NotificationModal';

const AddPower = () => {

  const [powerName, setPowerName] = useState("");
  const [description, setDescription] = useState("");
  const { addPower, addPowerIsLoading, addPowerError } = usePostPowerAPI();

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
    addPower({
      tag: powerName,
      description
    });
  };

  // disabled button
  const isDisabled = !powerName || !description;

  return (
    <>
      <NotificationModal {...{ addPowerIsLoading, addPowerError }} />
      <AddEditPowerForm
        titleName="Add Power"
        buttonName="Add Power"
        powerName={powerName}
        description={description}
        isButtonDisabled={isDisabled}
        handleOnChangeName={handleOnChangeName}
        handleOnChangeDescription={handleOnChangeDescription}
        handleOnSubmit={handleOnSubmit}
      ></AddEditPowerForm>
    </>
  );
};

export default AddPower;