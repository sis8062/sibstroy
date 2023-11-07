import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

import TendersTable from "../components/TendersTable/TendersTable";
import Loader from "../components/UI/Loader/Loader";

const Tenders = () => {
  const { tenders } = useLoaderData();

  if (tenders) {
    return (
      <section>
        <Suspense fallback={<Loader />}>
          <Await resolve={tenders}>
            {(loadedTenders) => <TendersTable tenders={loadedTenders} />}
          </Await>
        </Suspense>
      </section>
    );
  }
};

export default Tenders;

async function loadTenders() {
  const response = await fetch(
    "https://tender-sibstroy-default-rtdb.europe-west1.firebasedatabase.app/tenders.json"
  );

  if (!response.ok) {
    throw Error("Не удалось получить тендеры.");
  }

  const resData = await response.json();
  return resData;
}

export function loader() {
  return defer({
    tenders: loadTenders(),
  });
}
