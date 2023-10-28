import React from 'react'
import { useState } from 'react'
const Form = () => {

    const [FormData, SetFormdata] = useState({ FirstName: "", LastName: "", Email: "", Comments: "", IsVisible: false, Mode: "",FavCar:"" })
    console.log(FormData)
  
  
    function ChangeHandler(event) {
      const { name, value, type, checked } = event.target;
  
      SetFormdata((prevState) => {
        return {
          ...prevState,
          [name]: type === "checkbox" ? checked : value,
        };
      });
    }
  function FormHandler(event){
    event.preventDefault();
    console.log("printing the all form data")
    console.log(FormData)
  }
  


  return (
   

    < div className='InputField' >
      <form onSubmit={FormHandler}>
        <input type='Text' placeholder='FirstName' onChange={ChangeHandler} name='FirstName' value={FormData.FirstName} />
        <br></br>
        <input type='text' placeholder='LastName' onChange={ChangeHandler} name="LastName" value={FormData.LastName} />
        <br></br>
        <input type='Email' placeholder='Email' onChange={ChangeHandler} name='Email' value={FormData.Email} />
        <br></br>
        <textarea name='Comments' placeholder='Enter Comment Here' onChange={ChangeHandler} value={FormData.Comments}>

        </textarea>
        <br>
        </br>
        <fieldset>
          <legend>Mode:</legend>
          <input type='Checkbox' onChange={ChangeHandler} checked={FormData.IsVisible} name='IsVisible' id='IsVisible' />
          <label htmlFor='IsVisible'>label for input</label>
          <br></br>
          <input type='Radio' value="Offline" onChange={ChangeHandler} id='offline' name='Mode' checked={FormData.Mode === "Offline"} />
          <label htmlFor='Offline'>offline</label>

          <br>
          </br>
          <input type='Radio' value="Online" id='Online' onChange={ChangeHandler} name='Mode' checked={FormData.Mode === "Online"} />
          <label htmlFor='Online'>Online</label>
        </fieldset>
        <label htmlFor='FavCars'>Tell me your FavCar?</label>
<select onChange={ChangeHandler} id='FavCars' value={FormData.FavCar} name='FavCar'>
<option value="Scorpio">Scorpio</option>
<option value="Fortuner">FOrtuner</option>
<option value="Legender">Legender</option>
<option value="thar">thar</option>
</select>
<button>submit</button>
      </form>

    </div >
  )
}

export default Form;