import { useNavigate } from "react-router-dom";

function SuperHeroCard(props: {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  place: string;
  description: string;
  numOfPowers: number;
}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/hero/${props.id}`);
  };

  return (
    <>
      <div onClick={handleClick}
        className="card cursor-pointer bg-base-100 shadow-xl p-2 min-h-56 hover:bg-base-300">
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