function PowerCard(props: { tag: string; description: string; }) {
  return (
    <>
      <div className="card bg-base-100 shadow-xl p-2">
        <div className="card-body">
          <div className="badge badge-info">{props.tag}</div>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default PowerCard;