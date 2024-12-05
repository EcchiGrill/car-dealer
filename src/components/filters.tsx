"use client";

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IFilters, FiltersProps } from "@/types";
import { Button } from "./ui/button";
import { YEARS } from "@/constants";
import Link from "next/link";

export default function Filters({ cars, makeIds }: FiltersProps) {
  const [makeId, setMakeId] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [isSelected, setSelected] = useState<boolean>(false);

  const [filters] = useState<IFilters>({
    fetchedMakes: makeIds,
  });

  useEffect(() => {
    if (year && makeId) setSelected(true);
  }, [makeId, year]);

  return (
    <aside className="min-w-72 bg-gray-100 p-7">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="make"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Make
            </label>
            <Select onValueChange={setMakeId} value={makeId}>
              <SelectTrigger id="make">
                <SelectValue placeholder="Select make" />
              </SelectTrigger>
              <SelectContent className="w-min">
                {filters.fetchedMakes.map((m) => (
                  <SelectItem key={m} value={m.toString()}>
                    {cars.find((c) => c.MakeId === m && c.MakeName)?.MakeName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Year
            </label>
            <Select onValueChange={setYear} value={year}>
              <SelectTrigger id="year">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent className="w-min">
                {YEARS.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full p-0" type="submit" disabled={!isSelected}>
            <Link
              href={`/result/${makeId}/${year}`}
              className="w-full h-full flex place-items-center place-content-center"
            >
              Next
            </Link>
          </Button>
        </div>
      </form>
    </aside>
  );
}
