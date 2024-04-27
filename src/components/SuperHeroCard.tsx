import { MouseEventHandler } from "react";

function SuperHeroCard(props: {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  place: string;
  description: string;
  numOfPowers: number;
  viewClickHandler: MouseEventHandler;
  editClickHandler: MouseEventHandler;
  showEdit?: boolean;
}) {
  return (
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
        <div className="card-actions justify-end">
          <button onClick={props.viewClickHandler}
            className="btn btn-ghost btn-sm">View</button>
          {props.showEdit && <button onClick={props.editClickHandler}
            className="btn btn-ghost btn-sm">Edit</button>}
        </div>
      </div>
    </div>
  );
}

export default SuperHeroCard;