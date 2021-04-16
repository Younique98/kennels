import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../Home";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { LocationList } from "./locations/LocationList";
import { LocationProvider } from "./locations/LocationProvider";
import {CustomerList } from "./customers/CustomerList";
import { CustomerProvider } from "./customers/CustomerProvider";
import {EmployeeList} from "./employees/EmployeeList";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import {AnimalForm} from "./animal/AnimalForm";
import {AnimalDetail} from "./animal/AnimalDetail";
import { AnimalSearch } from "./animal/AnimalSearch"

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <AnimalProvider>
  <LocationProvider>
    <CustomerProvider>
      {/* Note the addition of "exact" now that we have an additional route with "/animals" in it below this Route: "/animals/create" */}
      


      <Route path="/animals/create">
        <AnimalForm />
        <AnimalList/>
      </Route>
<Route exact path="/animals">
     <AnimalSearch />
    <AnimalList />
   
</Route>

      <Route exact path="/animals/detail/:animalId(\d+)">
    <AnimalDetail />
</Route>
    <Route path="/animals/edit/:animalId(\d+)">
    <AnimalForm />
</Route>



    </CustomerProvider>
  </LocationProvider>
</AnimalProvider>

      <Route path="/locations">
        <LocationProvider>
        <LocationList />
        </LocationProvider>
      </Route>

      <Route path="/customers">
        <CustomerProvider>
        <CustomerList />
        </CustomerProvider>
      </Route>

      <Route path="/employees">
        <LocationProvider>
        <EmployeeProvider>
        <EmployeeList />
        </EmployeeProvider>
        </LocationProvider>
      </Route>
    </>
  );
};
