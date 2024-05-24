const NotificationModal = (props:
  {
    powersIsLoading?: boolean;
    powersError?: unknown;
    superHeroesIsLoading?: boolean;
    superHeroesError?: unknown;
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