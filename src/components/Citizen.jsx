import React from 'react'

const Citizen = ({ index, id, name, age, address, status, toggleStatus }) => {
  const handleClick = () => {
    toggleStatus(id)
  }

  return (
    <div className="content">
      <li>
        <div className="citizensList">
          <div className="idCon">
            <strong>ID: </strong>
            <span>{id}</span>
          </div>
          <strong>No.: </strong>
          <span>{index + 1}</span>
          <strong>Name: </strong>
          <span>{name}</span>
          <strong>Age: </strong>
          <span>{age}</span>
          <strong>Address: </strong>
          <span>{address}</span>
          <strong>Status: </strong>
          <span>{status}</span>
          <button onClick={handleClick}>Toggle Status</button>
        </div>
      </li>
    </div>
  )
}

export default Citizen
