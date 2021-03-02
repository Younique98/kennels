import React, { useEffect, useContext } from "react"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { AnimalContext } from "./AnimalProvider"
import { CustomerContext } from "../customers/CustomerProvider"
import { LocationContext } from "../locations/LocationProvider"
import { useHistory } from "react-router-dom"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { customers, getCustomers } = useContext(CustomerContext)
  const { locations, getLocations } = useContext(LocationContext)
  const history = useHistory()

  useEffect(() => {
    console.log("Fetching animals data from API")
    getLocations()
      .then(getCustomers)
      .then(getAnimals)
  }, [])

return (
    <>
        <h2>Animals</h2>
        
		<button onClick={() => {history.push("/animals/create")}}>
            Add Animal
        </button>
        <div className="animals">
        {
        animals.map(animal => {
        const ownerOfAnimal = customers.find(petCustomer => petCustomer.id === animal.customerId)
        console.log(ownerOfAnimal)
        const location = locations.find(location => location.id === animal.locationId)
				return <AnimalCard key={animal.id} animalProp={animal} location={location} customer={ownerOfAnimal}/>
			})
    }
        </div>
    </>
  );
};
