import React from "react"
import "./Employee.css"

export const EmployeeCard = ({employeeProps, location}) => (
    <section className="employee">
        {console.log(location)}
        <h3 className ="employee__name">Name: {employeeProps.name}</h3>
        <div className="employee__location">Location: {location.name}</div>
    </section>
)

// -- Reminder link location and pass through at employeeLocation from database
