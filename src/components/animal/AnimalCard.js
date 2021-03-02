import React from "react"
import "./Animal.css"


export const AnimalCard = ({ animalProp, ownerOfAnimal, located }) => (
    <section className="animal">
        {console.log(animalProp)}
        <h3 className="animal__name">Pet name: {animalProp.name}</h3>
        <address className="animal_breed">Breed: {animalProp.breed}</address>
        <address className="animal_owner">Owner: {ownerOfAnimal.name}</address>
        <address className="animal_location">Located: {located.name}</address>
    </section>
)