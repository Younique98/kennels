import React from "react"
import "./Animal.css"


export const AnimalCard = ({ animalProp }) => (
    <section className="animal">
        <h3 className="animal__name">{animalProp.name}</h3>
        <address className="animal_breed">{animalProp.location.name}</address>
        <address className="animal_owner">Owner: {animalProp.customers.name}</address>
        <address className="animal_location">{animalProp.location.name}</address>
    </section>
)