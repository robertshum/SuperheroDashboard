import { MouseEventHandler } from "react";

type BadgeProps = {
  onClickHandler: MouseEventHandler<HTMLDivElement>;
  name: string;
};

const Badge = (props: BadgeProps) => {

  return (
    <div
      onClick={props.onClickHandler}
      className="badge badge-info hover:badge-outline cursor-pointer line-clamp-1 select-none">{props.name}
    </div>
  );
};

export default Badge;