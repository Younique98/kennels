import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "../employees/EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import "./Employee.css"
import { useHistory, useParams } from 'react-router-dom';

export const EmployeeForm = () => {
    const { saveEmployee} = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    // hold on state of animal in this view
    const [employee, setEmployee] = useState({
        name: "",
        address: "",
        location_id: 0
        })
    
// wait for data before button is active
        const [isLoading, setIsLoading] = useState(true);
//used for adding an employee and later editing the employee
        const { employeeId} = useParams();
        const history = useHistory();

//when fields change, update state
const handleControlledInputChange = (event) => {
    //craete a copy to make changes, then set state
    const newEmployee = { ...employee }
    //set the property to the new value
    newEmployee[event.target.id] = event.target.value;
    // update State
    setEmployee(newEmployee) 
} 
const handleSaveEmployee = () => {
    if (parseInt(employee.location_id) === 0) {
        window.alert("Please select a location")
    } else {
        //disable the button
        setIsLoading(true);
        saveEmployee({
            name: employee.name,
            address: employee.address,
            location_id: employee.location_id
        })
        .then(() => history.push("/employees"))

            }
        }

        useEffect(() => {
            getLocations()
        }, [])

    return (
        <form className="employeeForm">
            <h2 className="employeeForm_title">{employeeId ? "Edit Employee" : "Add Employee"}</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="employeeName">Employee name: </label>
                <input type="text" id="name" required autoFocus className="form-control"
                placeholder="Employee name"
                onChange={handleControlledInputChange}
                value={employee.name}/>
            </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Employee address:</label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee address" value={employee.address}/>
                </div>
                </fieldset>
           
            <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select value={employee.location_id} id="location_id" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveEmployee()
          }}>
        {employeeId ? "Save Employee" : "Add Employee"}</button> 
        </form>
    )
    }


