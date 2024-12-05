export interface ICar {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface IFilteredCar {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface ICarResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: ICar[] | IFilteredCar[];
}

export interface FiltersProps {
  cars: ICar[];
  makeIds: number[];
}

export interface IFilters {
  fetchedMakes: number[];
  makeId?: number;
  year?: string;
}

export interface CarGridProps {
  cars?: ICar[];
  filteredCars?: IFilteredCar[];
}
