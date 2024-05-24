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

  //hide the modal if any of the msgs are empty
  if (topMsg.length === 0) {
    return (<></>);
  }

  return (
    <>
      <dialog id="my_modal_5" className="modal modal-middle bg-slate-400 bg-opacity-50 opacity-100">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {topMsg}</h3>
          <p className="py-4">{bottomMsg}</p>
        </div>
      </dialog>
    </>
  );
};

export default NotificationModal;