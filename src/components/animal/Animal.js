export const Animal = ({ animal, customer, location }) => {

return (
    <>
      {console.log("render the animals")}
      <h2>{animal.name}</h2>
      <small>Thank you for trusting our kennel with the care of your pet.</small>
      <h2>{animal.breed}</h2>
      <address>
        <div>Your pet is located at {location[0].name}</div>
        <div>{location[0].address}</div>
      </address>
      <article>
        <h2>{customer.name}</h2>
      </article>
    </>

)
}

//-- Need animal name as header, then their breed, below that location located, and owner info