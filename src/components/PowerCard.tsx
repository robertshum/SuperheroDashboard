function PowerCard() {

  //TODO fill out logic here
  const tag = "Flight";
  const description = "The ability to soar above the sky.";

  return (
    <>
      <div className="card bg-base-100 shadow-xl p-2">
        <div className="card-body">
          <div className="badge badge-info">{tag}</div>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default PowerCard;