import { useNavigate } from "react-router-dom";

function PowerCard(props: { id: number; tag: string; description: string; }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/power/${props.id}`);
  };

  return (
    <>
      <div onClick={handleClick}
        className="card cursor-pointer bg-base-100 shadow-xl p-2 min-h-28 hover:bg-base-300">
        <div className="card-body">
          <div className="badge badge-info">{props.tag}</div>
          <p className="line-clamp-2">{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default PowerCard;