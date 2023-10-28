import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ModifiedForm = () => {
    const navigate=useNavigate()
    const [formdata, setFormdata] = useState({
        firstname: "", lastname: "", email: "", select: "", street: "", city: "", state: "", pincode: "", checkfield: false, offers: false
        , candidate: false, comments: false, everything: false
    })
    console.log(formdata)
    const changehandler = (event) => {
        const { name, value, type, checked } = event.target
        setFormdata(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function submitHandler(event) {
        event.preventDefault();
        console.log(formdata)
    }

    function handler(){
        navigate("/form")
    }
    return (
        <div className="flex justify-center items-center mt-4 ">
            <form onSubmit={submitHandler} className='gap-12'>
                <label htmlFor='firstname'>FirstName</label><br></br>
                <input className='outline w-[350px]' type='text' id='firstname' name='firstname' value={formdata.firstname}
                    onChange={changehandler} placeholder='firstname' /><br></br>
                <label htmlFor='lastname'>Lastname</label><br></br><br></br>
                <input className='outline w-[350px]' id='lastname' type='text' name='lastname' value={formdata.lastname} onChange={changehandler} placeholder='lastname' /><br></br>
                <label htmlFor='email'>email Address</label><br></br><br></br>
                <input className='outline w-[350px]' id='email' type='email' name='email' value={formdata.email} onChange={changehandler} placeholder='email' /><br></br>
                <label>Country</label><br></br>
                <select onChange={changehandler} value={formdata.select} name='select' className='mt-3 w-[350px] outline '>
                    <option value="india">india</option>
                    <option value="Usa">Usa</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="London">London</option>
                </select><br></br>
                <label htmlFor='street'>Street Address</label><br></br>
                <input className='outline w-[350px]' type='text' onChange={changehandler} value={formdata.street} name='street' placeholder='street Address' id='street' /><br></br>
                <label htmlFor='city'>City</label><br></br>
                <input className='outline w-[350px]' type='text' onChange={changehandler} value={formdata.city} name='city' placeholder='city' id='city' /><br></br>
                <label htmlFor='state'>State</label><br></br>
                <input className='outline w-[350px]' type='text' onChange={changehandler} value={formdata.state} name='state' placeholder='state' id='state' /><br></br>
                <label htmlFor='pincode'>Zip/Postalcode</label><br></br>
                <input className='outline w-[350px]' type='text' onChange={changehandler} value={formdata.pincode} name='pincode' placeholder='pincode' id='pincode' /><br></br>
                <label>By Email</label><br></br>
                <input type='Checkbox' onChange={changehandler} checked={formdata.comments} name='comments' id='comments' />
                <label htmlFor='comments'>Comments</label>
                <h6>get notified when someone is commented</h6>
                <input type='checkbox' onChange={changehandler} checked={formdata.candidate} name='candidate' id='candidate' />
                <label htmlFor='candidate'>candidate</label>
                <h6>get notified when someone is applied for a job</h6>
                <input type='checkbox' onChange={changehandler} checked={formdata.offers} id='offers' name='offers' />
                <label htmlFor='offers'>offers</label>
                <h6>get notified when offers comes</h6>

                <label>Push Notifications</label>
                <h1>these are delivered by sms by mobile phone</h1>
                <input type='radio' onChange={changehandler} checked={formdata.everything === 'everything'} name='everything' id='every' />
                <label htmlFor='every'>Everything</label><br></br>
                <input type='radio' onChange={changehandler} checked={formdata.everything === 'well'} name='everything' id='well' />
                <label htmlFor='well'>same as well</label><br></br>
                <input type='radio' onChange={changehandler} checked={formdata.everything === 'no notification'} name='everything' id='nonotification' />
                <label htmlFor='nonotification'>no push notifications</label><br></br>
                <button onClick={handler} type='submit' className='bg-blue-400 w-[100px] '> submit </button>
            </form>



        </div>
    )
}

export default ModifiedForm;