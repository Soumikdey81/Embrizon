import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";

export default function App() {
  const BASE_URL = "http://localhost:8000";

  const [apps, setApps] = useState([]);

  useEffect(function () {
    async function fetchApps() {
      try {
        const res = await fetch(`${BASE_URL}/apps`);
        const data = await res.json();
        setApps(data);
      } catch {
        alert("There was an error loading data...");
      }
    }
    fetchApps();
  }, []);
  return (
    <>
      <Header />
      <CardList apps={apps} />
    </>
  );
}
