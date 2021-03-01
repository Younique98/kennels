import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../Home";

import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider";
import {CustomerList } from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider";
import {EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <Route path="/animals">
        <AnimalProvider>
          <AnimalList />
        </AnimalProvider>
      </Route>

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
        <EmployeeProvider>
        <EmployeeList />
        </EmployeeProvider>
      </Route>
    </>
  );
};
