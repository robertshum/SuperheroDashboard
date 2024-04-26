function StatCard(props: {
  // the icon element itself
  icon: JSX.Element; 
  title: string;
  value: string;
  statDesc: string;
  color: string;
}) {

  // the color of the icon
  const iconClassName = `stat-figure ${props.color}`;

  // the color of the value
  const valueClassName = `stat-value ${props.color}`;

  return (
    <div className="stat">
      <div className={iconClassName}>
        {props.icon}
      </div>
      <div className="stat-title">{props.title}</div>
      <div className={valueClassName}>{props.value}</div>
      <div className="stat-desc">{props.statDesc}</div>
    </div>
  );
}

export default StatCard;