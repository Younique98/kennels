import React from "react"
import "./Animal.css"


export const AnimalCard = ({ animalProp, location, customer  }) => (
    <section className="animal">
         {/* {console.log(customer)} */}
        <h3 className="animal__name">Pet name: {animalProp.name}</h3>
        <div className="animal_breed">Breed: {animalProp.breed}</div>
        <div className="animal_location">Located: {location.name}</div>
        <div className="animal_owner">Owner: {customer.name}</div>
    </section>
)