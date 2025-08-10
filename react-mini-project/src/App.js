import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";

export default function App() {
  const [apps, setApps] = useState([]);

  useEffect(function () {
    async function fetchApps() {
      try {
        const res = await fetch("/apps.json");
        const data = await res.json();
        setApps(data.apps);
      } catch {
        alert("There was an error loading data...");
      }
    }
    fetchApps();
  }, []);

  return (
    <>
      {console.log(apps)}
      <Header />
      <CardList apps={apps} />
    </>
  );
}
