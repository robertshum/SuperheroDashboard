import { ChangeEvent, FormEvent, MouseEvent } from "react";


type AddEditSuperheroFormProps = {
  titleName: string;
  buttonName: string;
  buttonDeleteName?: string;
  name: string;
  firstName: string;
  lastName: string;
  place: string;
  description: string;
  isButtonDisabled: boolean;
  handleOnChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeFName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeLName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnChangePlace: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleOnSubmit: (e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>) => void;
  handleOnDelete?: (e: MouseEvent<HTMLButtonElement>) => void;
  selectedPowers: JSX.Element[];
  children: JSX.Element;
};

const AddEditSuperheroForm = (props: AddEditSuperheroFormProps) => {

  return (
    <article className="mt-3 mb-2 mx-3">
      <h1 className="stat-value my-5">{props.titleName}</h1>
      <form onSubmit={props.handleOnSubmit} className="grid lg:grid-cols-2 grid-cols-1 gap-6">

        {/* Name */}
        <label
          className="lg:col-span-2 col-span1 input input-bordered min-w-48 flex items-center">
          Name:
          <input type="text"
            value={props.name}
            onChange={props.handleOnChangeName} className="grow ml-2" placeholder="Starlord" />
        </label>
        {/* FName */}
        <label className="col-span-1 input input-bordered min-w-48 flex items-center">
          First:
          <input type="text"
            value={props.firstName}
            onChange={props.handleOnChangeFName} className="grow ml-2" placeholder="Peter" />
        </label>
        {/* LName */}
        <label className="col-span-1 input input-bordered min-w-48 flex items-center">
          Last:
          <input type="text"
            value={props.lastName}
            onChange={props.handleOnChangeLName} className="grow ml-2" placeholder="Quill" />
        </label>
        {/* place */}
        <label className="lg:col-span-2 input input-bordered min-w-48 flex items-center">
          Place:
          <input type="text"
            value={props.place}
            onChange={props.handleOnChangePlace} className="grow ml-2" placeholder="St. Charles, Missouri" />
        </label>
        {/* Description */}
        <label className="lg:col-span-2 md:col-span1 form-control">
          <div className="label">
            <span className="label-text">Description:</span>
          </div>
          <textarea value={props.description}
            onChange={props.handleOnChangeDescription}
            className="textarea textarea-bordered h-24 min-w-48" placeholder="Smooth talking space captain."></textarea>
        </label>

        {/* Superhero Powers */}
        <div className="lg:col-span-2 mt-2 mb-2">
          <h1 className="stat-value my-4 whitespace-normal">Superhero Powers</h1>
          <div className="flex flex-wrap my-4 gap-3">
            {/* selected powers */}
            {props.selectedPowers}
          </div>
        </div>

        <div className="inline-block">
          {/* Create */}
          <button
            type="submit"
            disabled={props.isButtonDisabled}
            onClick={props.handleOnSubmit}
            className="btn btn-md mt-3 mb-8 btn-outline text-xl mr-3">{props.buttonName}
          </button>
          {/* Delete */}
          {props.buttonDeleteName && <button
            onClick={props.handleOnDelete}
            className="btn btn-md mt-3 mb-8 btn-outline text-xl">{props.buttonDeleteName}</button>}
        </div>

        {/* List available powers */}
        <div className="lg:col-span-2">
        {props.children}
        </div>

      </form>
    </article>
  );
};

export default AddEditSuperheroForm;