import Header from "@/components/header";
import Filters from "@/components/filters";
import CarGrid from "@/components/car-grid";
import { filterCars, getCars } from "@/app/getCars";
import { YEARS } from "@/constants";
import { Suspense } from "react";

const { makeIds } = await getCars();

export function generateStaticParams() {
  return [
    ...makeIds.map((id) => {
      return YEARS.map((y) => {
        return { id, y };
      });
    }),
  ];
}

export default async function Result({
  params,
}: {
  params: { makeId: string; year: string };
}) {
  const { makeId, year } = await params;
  const filteredCars = await filterCars(makeId, year);
  const { cars } = await getCars();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Filters cars={cars} makeIds={makeIds} />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Available Cars</h1>
          <div className="flex place-content-center">
            <Suspense fallback={<Loading />}>
              <CarGrid filteredCars={filteredCars} />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}

function Loading() {
  return <h2>Loading...</h2>;
}
