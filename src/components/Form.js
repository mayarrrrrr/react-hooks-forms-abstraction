import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName:"John",
    lastName:"Henry",
    admin: false,
  });
  

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    // use `checked` property of checkboxes instead of `value` 
    if (event.target.type === "checkbox"){
      value = event.target.checked;
    }


    setFormData({
      ...formData,
      [name]:value,
    })

   
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData)
  }

  

  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstname" onChange={handleChange} value={formData.firstName} />

      <input type="text" name="lastname" onChange={handleChange} value={formData.lastName} />

      <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin} />

      <button type="submit" >Submit</button>
    </form>
  );
}

export default Form;
