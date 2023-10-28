import React, { useState } from 'react'

const MyForm = () => {
    // const FirstNameHandler=(event)=>{
    //     console.log('printing first name')
    // console.log(event.target.value)
    // }

    // const LastNameHandler=(event)=>{
    //     console.log('printing last name')
    // console.log(event.target.value)
    // }
    const [formdata, SetFormData] = useState({
        firstName: "", LastName: "", email: "", textfield: "",isVisible:false,mode:"",Favcar:""
    })

    function changeHandler(event) {
        const {name,checked,type,value}=event.target
        SetFormData(prevState => {
            return {
                ...prevState,
                [name]:type==="checkbox"? checked:value
            }


        })
    }

function submitHandler(event){
    event.preventDefault()
    console.log(formdata)
}


    return (
        <form onSubmit={submitHandler}>
            <input onChange={changeHandler} value={formdata.firstName} name='firstName' type='text' placeholder='firstName' />
            <input onChange={changeHandler} value={formdata.LastName} name='LastName' type='text' placeholder='LastName' />
            <input onChange={changeHandler} value={formdata.email} type='email' placeholder='email' name='email' />
            <textarea onChange={changeHandler} type="text" placeholder='write something' name='textfield' value={formdata.textfield} ></textarea>
            <input   onChange={changeHandler} id='isVisible' name='isVisible'  type='checkbox'/>
        
            <label htmlFor='isVisible'>Am i visible</label>
            <fieldset>

            <legend>
mode

            </legend>
            <input type='radio' onChange={changeHandler} checked={formdata.mode==="online-mode"} name="mode"
             value="online-mode" id="online-mode"/> 
            <label htmlFor='online-mode'>online</label>
            <input type='radio' onChange={changeHandler} checked={formdata.mode==="offline-mode"} name="mode" value="offline-mode" id="offline-mode"/> 
            <label htmlFor='offline-mode'>offline</label>
            </fieldset>
          <select onChange={changeHandler} id='favcar' name='Favcar' value={formdata.Favcar}>

<option value="scorpio">scorpio</option>
<option value="legender">legender</option>
<option value="honda">honda</option>
<option value="verna">verna</option>

          </select>
<label htmlFor='favcar'>tell me your fav car</label>
<button type='submit'>submit</button>
        </form>
    )
}

export default MyForm;