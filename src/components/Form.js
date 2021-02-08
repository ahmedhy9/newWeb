import React from 'react'
import './Form.css'
function From (

    {
        placeholder,
        value,
    }
){
    return(
        <form action="">
                    <input type="text" placeholder={placeholder} name='email' required/>
                    <input type="submit" value={value}  />
                </form>

    )
}
export default From