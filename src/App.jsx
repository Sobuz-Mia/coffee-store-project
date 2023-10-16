import "./App.css";
import { Outlet, useLoaderData } from "react-router-dom";
import CoffeeCards from "./components/CoffeeCards";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <h1 className="text-3xl font-bold">Welcome to my coffee store Shop</h1>
      <Navbar/>
      <Outlet></Outlet>
      <div className="grid md:grid-cols-2 gap-5 my-8">
        {coffees.map((coffee) => (
          <CoffeeCards coffee={coffee} key={coffee._id}
          coffees ={coffees}
          setCoffees ={setCoffees}
          ></CoffeeCards>
        ))}
      </div>
    </>
  );
}

export default App;
