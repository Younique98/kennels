import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import "./animal/Animal.css"
import {PropsAndState} from "./PropsAndState.js"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <PropsAndState yourName={"Erica"} />
        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
    </>
)
