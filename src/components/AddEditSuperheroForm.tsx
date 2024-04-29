import { ChangeEvent, Dispatch, FormEvent, MouseEvent, SetStateAction } from "react";


type AddEditSuperheroFormProps = {
  titleName: string;
  buttonName: string;
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
  filteredPowers: PowersData;
  setFilteredPowers: Dispatch<SetStateAction<PowersData>>;
  selectedPowers: JSX.Element[];
  // setSelectedPowers: Dispatch<SetStateAction<number[]>>;
  children: JSX.Element;
};

const AddEditSuperheroForm = (props: AddEditSuperheroFormProps) => {

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto sm:pt-2 md:pt-2 pt-4 pb-4 px-6">
        <article className="mt-10 mb-2 gap-6">
          <h1 className="stat-value">{props.titleName}</h1>
          <form onSubmit={props.handleOnSubmit}>
            {/* <div className="flex flex-col min-w-3 items-start gap-5 flex-wrap mt-5"> */}
            <div className="grid grid-cols-auto-fit min-w-3 items-start gap-5 flex-wrap mt-5">
              {/* Name */}
              <label
                className="lg:col-span-2 md:col-span1 input input-bordered min-w-96 flex items-center">
                Name:
                <input type="text"
                  value={props.name}
                  onChange={props.handleOnChangeName} className="grow ml-2" placeholder="Starlord" />
              </label>
              {/* FName */}
              <label className="col-span-1 input input-bordered min-w-96 flex items-center">
                First:
                <input type="text"
                  value={props.firstName}
                  onChange={props.handleOnChangeFName} className="grow ml-2" placeholder="Peter" />
              </label>
              {/* LName */}
              <label className="col-span-1 input input-bordered min-w-96 flex items-center">
                Last:
                <input type="text"
                  value={props.lastName}
                  onChange={props.handleOnChangeLName} className="grow ml-2" placeholder="Quill" />
              </label>
              {/* place */}
              <label className="col-span-1 input input-bordered min-w-96 flex items-center">
                Place:
                <input type="text"
                  value={props.place}
                  onChange={props.handleOnChangePlace} className="grow ml-2" placeholder="St. Charles, Missouri" />
              </label>
              {/* Description */}
              <label className="lg:col-span-2 md:col-span1 form-control ">
                <div className="label">
                  <span className="label-text">Description:</span>
                </div>
                <textarea value={props.description}
                  onChange={props.handleOnChangeDescription}
                  className="textarea textarea-bordered h-24 min-w-96" placeholder="Smooth talking space captain."></textarea>
              </label>

              {/* Superhero Powers */}
              <div className="mt-2 mb-2">
                <h1 className="stat-value my-4">Superhero Powers</h1>
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 mt-1 mb-1 gap-1">
                  {/* selected powers */}
                  {props.selectedPowers}
                </div>
              </div>
            </div>

            {/* Create */}
            <button
              type="submit"
              disabled={props.isButtonDisabled}
              onClick={props.handleOnSubmit}
              className="btn btn-md mt-3 mb-8 btn-outline text-xl">{props.buttonName}</button>

            {/* TODO list powers */}
            {props.children}
            {/* <PowerLookup
              filteredPowers={props.filteredPowers}
              setFilteredPowers={props.setFilteredPowers}
              
              // setSelectedPowers={props.setSelectedPowers}
            /> */}
          </form>

        </article>
      </div>
    </div >
  );
};

export default AddEditSuperheroForm;