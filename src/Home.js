import React from "react";
import { PropsAndState } from "../src/components/PropsAndState"

export const Home = () => (
    <>
    <div class="kennelHomePage">
        <h1>Nashville Kennels</h1>
        <h2>Loving care when you're not there.</h2>

        <address>
            <h3>Visit Us at the Nashville North Location</h3>
            <h3>500 Puppy Way</h3>
        </address>
        
        <PropsAndState yourName={"Erica"} />
        </div>
        
    </>
)