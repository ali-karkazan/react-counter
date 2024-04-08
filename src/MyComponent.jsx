import React, { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carMake, setCarMake] = useState("");
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carModel, setCarModel] = useState("");

  function handelAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };
    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handelRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }

  function handelYearChange(event) {
    setCarYear(event.target.value);
  }

  function handelMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handelModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List Of Cars Object</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handelRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handelYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handelMakeChange}
        placeholder="Enter Car Make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handelModelChange}
        placeholder="Enter car model"
      />
      <br />
      <button onClick={handelAddCar}>Add Car</button>
    </div>
  );
}

export default MyComponent;
