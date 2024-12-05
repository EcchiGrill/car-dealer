"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CarGridProps } from "@/types";
import { Suspense } from "react";

export default function CarGrid({ cars, filteredCars }: CarGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-20rem*4 gap-10">
      {cars &&
        cars.map((car) => (
          <Card
            key={car.MakeName + "-" + car.VehicleTypeName}
            className="flex flex-col justify-between h-44 overflow-hidden"
          >
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">
                {car.MakeName} {car.VehicleTypeName}
              </h3>
            </CardContent>
            <CardFooter className="p-4">
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      {filteredCars &&
        filteredCars.map((car) => (
          <Card
            key={car.Make_Name + "-" + car.Model_Name}
            className="flex flex-col justify-between h-44 overflow-hidden"
          >
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">
                {car.Make_Name} {car.Model_Name}
              </h3>
            </CardContent>
            <CardFooter className="p-4">
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}
