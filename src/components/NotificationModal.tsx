const NotificationModal = (props:
  {
    powersIsLoading?: boolean;
    powersError?: unknown;
    superHeroesIsLoading?: boolean;
    superHeroesError?: unknown;
    addPowerIsLoading?: boolean;
    addPowerError?: unknown;
    addHeroIsLoading?: boolean;
    addHeroError?: unknown;
    editPowerIsLoading?: boolean;
    editPowerError?: unknown;
    removePowerIsLoading?: boolean;
    removePowerError?: unknown;
    editHeroIsLoading?: boolean;
    editHeroError?: unknown;
    removeHeroIsLoading?: boolean;
    removeHeroError?: unknown;
  }) => {

  let topMsg = "";
  let bottomMsg = "";

  if (props.powersIsLoading) {
    topMsg = "Fetching Powers";
    bottomMsg = "Please be patient while we load...";
  }

  if (props.powersError) {
    topMsg = "Error Fetching Powers";
    bottomMsg = "We are having issues loading powers from the bat cave...";
  }

  if (props.superHeroesIsLoading) {
    topMsg = "Fetching Superheroes";
    bottomMsg = "Please be patient while we load...";
  }

  if (props.superHeroesError) {
    topMsg = "Error Fetching Superheroes";
    bottomMsg = "We are having issues loading heroes from the bat cave...";
  }

  if (props.addPowerIsLoading) {
    topMsg = "Adding New Power";
    bottomMsg = "Conjuring power from the heavens...";
  }

  if (props.addPowerError) {
    topMsg = "Error Creating New Power";
    bottomMsg = "We are having issues creating a new super power...";
  }

  if (props.addHeroIsLoading) {
    topMsg = "Adding New Hero";
    bottomMsg = "Summoning hero... or villain...";
  }

  if (props.addHeroError) {
    topMsg = "Error Creating New Hero";
    bottomMsg = "We are having issues creating a new superhero...";
  }

  if (props.editPowerIsLoading) {
    topMsg = "Editing Power";
    bottomMsg = "Modifying the power...";
  }

  if (props.editPowerError) {
    topMsg = "Error Editing Power";
    bottomMsg = "We are having issues modifying the power...";
  }

  if (props.removePowerIsLoading) {
    topMsg = "Removing Power";
    bottomMsg = "Removing power from this world...";
  }

  if (props.removePowerError) {
    topMsg = "Error Removing Power";
    bottomMsg = "We are having issues removing such an awesome power...";
  }

  if (props.editHeroIsLoading) {
    topMsg = "Editing Hero";
    bottomMsg = "Changing hero information...";
  }

  if (props.editHeroError) {
    topMsg = "Error Editing Hero";
    bottomMsg = "We are having issues changing hero information...";
  }

  if (props.removeHeroIsLoading) {
    topMsg = "Removing Hero";
    bottomMsg = "Banishing hero or villain...";
  }

  if (props.removeHeroError) {
    topMsg = "Error Removing Hero";
    bottomMsg = "We are having issues removing hero or villain...";
  }

  //hide the modal if any of the msgs are empty
  if (topMsg.length === 0) {
    return (<></>);
  }

  return (
    <>
      <dialog id="my_modal_5" className="modal modal-middle bg-slate-400 bg-opacity-50 opacity-100">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{topMsg}</h3>
          <p className="py-4">{bottomMsg}</p>
        </div>
      </dialog>
    </>
  );
};

export default NotificationModal;