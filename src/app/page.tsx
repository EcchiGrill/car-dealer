import Header from "@/components/header";
import Filters from "@/components/filters";
import CarGrid from "@/components/car-grid";
import { getCars } from "./getCars";

export default async function Home() {
  const { cars, makeIds } = await getCars();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Filters cars={cars} makeIds={makeIds} />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Available Cars</h1>
          <div className="flex place-content-center">
            <CarGrid cars={cars} />
          </div>
        </main>
      </div>
    </div>
  );
}
