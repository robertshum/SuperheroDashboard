function SuperHeroCard(props: {
  name: string;
  firstName: string;
  lastName: string;
  place: string;
  description: string;
  numOfPowers: number;
}) {

  return (
    <>
      <div className="card bg-base-100 shadow-xl p-2 min-h-56">
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <span>
            <div className="badge badge-primary mr-0.5">{props.firstName}</div>
            <div className="badge badge-secondary">{props.lastName}</div>
          </span>
          <p className="line-clamp-2">{props.description}</p>
          <div className="card-actions justify-start">
            <span>
              <div className="badge badge-outline mr-2">
                {props.numOfPowers} {props.numOfPowers > 1 ? "powers" : "power"}
              </div>
              <div className="badge badge-neutral">
                {props.place}
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuperHeroCard;