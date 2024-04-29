// Power(s)
type PowersData = {
  $id: number;
  $values: any[]; // Assuming $values is an array of any type
};

type PowerData = {
  id?: number;
  tag: string;
  description: string;
};

type PowerDataform = {
  id: number;
  tag: string;
  description: string;
};

// Heroes(s)
type SuperheroesData = {
  $id: number;
  $values: any[]; // Assuming $values is an array of any type
};

type SuperheroData = {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  place: string;
  description: string;
  powers: { $id: number; $values: []; };
};

// matches the fields in API for POST
type SuperheroDataForm = {
  id?: number;
  name: string;
  firstName: string;
  lastName: string;
  place: string;
  description: string;
  powerIds: number[];
};

// Analytics
type FewestPowers = {
  name: string;
  num: number;
};

type MostPowers = {
  name: string;
  num: number;
};