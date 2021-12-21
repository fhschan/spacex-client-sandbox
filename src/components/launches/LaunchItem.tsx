import React from 'react'

function LaunchItem({
  name,
  flight_number,
  details,
}: {
  name: string
  flight_number: number
  details: string
}) {
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <p>Flight Number: {flight_number}</p>
      <p>{details}</p>
      <hr />
    </React.Fragment>
  )
}

export default LaunchItem
