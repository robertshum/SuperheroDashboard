import { MouseEventHandler } from "react";

function PowerCard(props: {
  id?: number;
  tag: string;
  description: string;
  viewClickHandler: MouseEventHandler;
  editClickHandler: MouseEventHandler;
  showEdit?: boolean;
}
) {
  return (
    <div className="card bg-base-100 shadow-xl p-1 min-h-28">
      <div className="card-body">
        <div className="badge badge-info">{props.tag}</div>
        <p className="line-clamp-1">{props.description}</p>
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

export default PowerCard;