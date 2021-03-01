import React, { useContext, useEffect, useHistory } from "react";
import { AnimalContext } from "./AnimalProvider";
import { LocationContext } from "../locations/LocationProvider"
import { CustomerContext } from "../customers/CustomerProvider"
import { Animal } from "./Animal"
import "./Animal.css"
import { AnimalCard } from "./AnimalCard";

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: Initial render before data")
    getLocations()
    .then(getCustomers)
    .then(getAnimals)
}, [])

const history = useHistory()

return (
    <>
        <h2>Animals</h2>
		<button onClick={() => {history.push("/animals/create")}}>
            Add Animal
        </button>
        <div className="animals">
        {
			animals.map(animal => {
				return <AnimalCard key={animal.id} animal={animal} />
			})
        }
        </div>
    </>
  );
};
