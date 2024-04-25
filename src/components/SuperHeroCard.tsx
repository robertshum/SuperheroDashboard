function SuperHeroCard() {

  //TODO fill out logic here
  const name = "Superman";
  const firstName = "Clark";
  const lastName = "Kent";
  const description = "What's that in the sky?  Is it a plane?  Is it a Bird?";
  const numOfPowers = 4;

  return (
    <>
      <div className="card bg-base-100 shadow-xl p-2">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <span>
            <div className="badge badge-primary mr-0.5">{firstName}</div>
            <div className="badge badge-secondary">{lastName}</div>
          </span>
          <p>{description}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">{numOfPowers} {numOfPowers > 1 ? "powers" : "power"}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuperHeroCard;