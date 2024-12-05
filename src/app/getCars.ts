"use server";

import { ICar, ICarResponse, IFilteredCar } from "@/types";

export const getCars = async () => {
  const response: ICarResponse = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json",
    {
      cache: "force-cache",
      next: {
        revalidate: 3600,
      },
    }
  ).then((r) => r.json());

  if (!response.Results) throw new Error("Cars fetching error!");

  const cars = response.Results as ICar[];
  const makeIds = [...new Set(cars.map((car) => car.MakeId))];

  return { cars, makeIds };
};

export const filterCars = async (makeId: string, year: string) => {
  const response: ICarResponse = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    {
      cache: "force-cache",
      next: {
        revalidate: 3600,
      },
    }
  ).then((r) => r.json());

  if (!response.Results) throw new Error("Nothing was found!");

  return response.Results as IFilteredCar[];
};
