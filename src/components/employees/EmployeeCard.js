import React from "react"
import "./Employee.css"

export const EmployeeCard = ({employeeProps}) => (
    <section className="employee">
        {/* {console.log(employeeProps)} */}
        <h3 className ="employee__name">Name: {employeeProps.name}</h3>
        <div clasName="employee__location">Location: {employeeProps.address}</div>
    </section>
)

// -- Reminder link location and pass through at employeeLocation from database