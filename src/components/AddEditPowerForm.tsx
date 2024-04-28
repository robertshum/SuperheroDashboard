import { ChangeEvent, MouseEvent } from "react";

type AddEditPowerFormProps = {
  titleName: string;
  buttonName: string;
  powerName: string;
  description: string;
  isButtonDisabled: boolean;
  handleOnChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleOnSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
};

const AddEditPowerForm = (props: AddEditPowerFormProps) => {

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto sm:pt-2 md:pt-2 pt-4 pb-4 px-6">
        <article className="mt-10 mb-2 gap-6">
          <h1 className="stat-value">{props.titleName}</h1>
          <div className="flex flex-col min-w-3 items-start gap-5 flex-wrap mt-5">
            {/* Tag */}
            <label className="input input-bordered min-w-96 flex items-center">
              Power Name:
              <input type="text"
                value={props.powerName}
                onChange={props.handleOnChangeName} className="grow ml-2" placeholder="Laser Eyes" />
            </label>
            {/* Description */}
            <label className="form-control ">
              <div className="label">
                <span className="label-text">Description:</span>
              </div>
              <textarea value={props.description}
                onChange={props.handleOnChangeDescription}
                className="textarea textarea-bordered h-24 min-w-96" placeholder="Zap enemies with laser eyes."></textarea>
            </label>
            {/* Create */}
            <button
              disabled={props.isButtonDisabled}
              onClick={props.handleOnSubmit}
              className="btn btn-md btn-ghost text-md">{props.buttonName}</button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AddEditPowerForm;