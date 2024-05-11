import { ChangeEvent, FormEvent, MouseEvent } from "react";

type AddEditPowerFormProps = {
  titleName: string;
  buttonName: string;
  buttonDeleteName?: string;
  powerName: string;
  description: string;
  isButtonDisabled: boolean;
  handleOnChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleOnSubmit: (e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>) => void;
  handleOnDelete?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const AddEditPowerForm = (props: AddEditPowerFormProps) => {

  return (
    <article className="mt-3 mb-2 mx-3">
      <h1 className="stat-value my-5">{props.titleName}</h1>
      <form onSubmit={props.handleOnSubmit} className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          {/* Tag */}
          <label className="input input-bordered min-w-48 flex items-center">
            Power:
            <input type="text"
              value={props.powerName}
              onChange={props.handleOnChangeName} className="grow ml-2" placeholder="Laser Eyes" />
          </label>
          {/* Description */}
          <label className="lg:col-span-2 md:col-span1 form-control">
            <div className="label">
              <span className="label-text">Description:</span>
            </div>
            <textarea value={props.description}
              onChange={props.handleOnChangeDescription}
              className="textarea textarea-bordered h-24 min-w-48" placeholder="Zap enemies with laser eyes."></textarea>
          </label>

          <div className="inline-block">
            {/* Create */}
            <button
              type="submit"
              disabled={props.isButtonDisabled}
              onClick={props.handleOnSubmit}
              className="btn btn-md btn-ghost text-md mr-3">{props.buttonName}</button>
            {/* Delete */}
            {props.buttonDeleteName && <button
              onClick={props.handleOnDelete}
              className="btn btn-md btn-ghost text-md">{props.buttonDeleteName}</button>}
          </div>
      </form>
    </article>
  );
};

export default AddEditPowerForm;