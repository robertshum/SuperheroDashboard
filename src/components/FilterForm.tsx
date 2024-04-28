import { ChangeEvent } from "react";

type FilterFormProps = {
  labelText: string;
  placeholderText: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FilterForm = (props: FilterFormProps) => {

  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{props.labelText}</span>
      </div>
      <input onChange={props.onChange} type="text" placeholder={props.placeholderText}
        className="input input-bordered w-full max-w-xs" />
    </label>
  );
};

export default FilterForm;