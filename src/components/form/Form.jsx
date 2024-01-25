import React, { useState } from "react";

function Form() {
  const [inputValues, setInputValues] = useState([
    {
      fname: "",
      lname: "",
    },
  ]);

  const handleChange = (e, index) => {
    let data = [...inputValues];

    data[index][e.target.name]=e.target.value;

    setInputValues(data)

  };

  const addInputFields = () => {
    setInputValues([...inputValues, 
      { fname: "", lname: "" }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {
        inputValues.map((input, index) => (
          < >
            <label>First name</label>
            <input
              type="text"
              name="fname"
              value={input.fname}
              onChange={(e) => handleChange(e, index)}
            />
            <label>Last name</label>
            <input
              type="text"
              name="lname"
              value={input.lname}
              onChange={(e) => handleChange(e, index)}
            />
          </>
        ))}
        <button type="button" onClick={addInputFields}>
          Add More
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
