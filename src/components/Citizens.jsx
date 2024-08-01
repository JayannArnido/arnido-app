import React, { useState } from "react";
import Citizen from "./Citizen";
import SearchFilter from "./SearchFilter";

export default function Citizens() {
  const [citizens, setCitizens] = useState([
    {
      id: 1,
      name: "Chona",
      age: 32,
      address: "San Fernando",
      status: "Inactive",
    },
    {
      id: 2,
      name: "Maudy",
      age: 21,
      address: "Naga",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Jay Ann",
      age: 27,
      address: "Minglanilla",
      status: "Active",
    },
    {
      id: 4,
      name: "Christine",
      age: 23,
      address: "Pardo",
      status: "Active",
    },
    {
      id: 5,
      name: "Jeremy",
      age: 30,
      address: "Basak",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Mike",
      age: 26,
      address: "Bulacao",
      status: "Active",
    },
    {
      id: 7,
      name: "Lisa",
      age: 29,
      address: "Moalboal",
      status: "Inactive",
    },
    {
      id: 8,
      name: "Irish",
      age: 68,
      address: "Barili",
      status: "Active",
    },
    {
      id: 9,
      name: "Christian",
      age: 48,
      address: "Talisay",
      status: "Active",
    },
    {
      id: 10,
      name: "Jane",
      age: 55,
      address: "Badian",
      status: "Active",
    },
  ]);

  const toggleStatus = (id) => {
    const updatedCitizens = citizens.map((citizen) =>
      citizen.id === id
        ? {
            ...citizen,
            status: citizen.status === "Active" ? "Inactive" : "Active",
          }
        : citizen
    );
    setCitizens(updatedCitizens);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const filteredCitizens = citizens.filter((citizen) =>
    citizen.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
    <div className="container">
      <div className="header">
        <h1>Citizens List</h1>
        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <ul>
        {filteredCitizens.map((citizen, index) => (
          <Citizen
            key={citizen.id}
            index={index}
            id={citizen.id}
            name={citizen.name}
            age={citizen.age}
            address={citizen.address}
            status={citizen.status}
            toggleStatus={() => toggleStatus(citizen.id)}
          />
        ))}
      </ul>
    </div>
  );
}
