import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { EmployeeCard } from "./EmployeeCard";
import "./Employee.css";
import { LocationContext } from "../locations/LocationProvider"


export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext)
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees()
    .then(getLocations)
  }, []);

  return (
    <>
      <div className="employees">
        {console.log("EmployeeList: Render", employees)}
        {console.log("EmployeeList: Render", locations)}
        {employees.map((employee) => {
          const located = locations.find(location => location.id === employee.locationId)
          return <EmployeeCard key={employee.id} employeeProps={employee} located={located}/>;
        })}
      </div>
    </>
  );
};
