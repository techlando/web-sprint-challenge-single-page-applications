import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const initialFormValues = {
    name: "",
    size: '',
    pepperoni: false,
    sausage: false,
    ham: false,
    jalapenos: false,
    special: ""

}


const OrderForm = (props) => {
    const [form, setForm] = useState(initialFormValues)
    const history = useHistory()
    

    const onChange = (e) => {
      

        setForm({...form, [e.target.name]: e.target.value})
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
        history.push("/mypizza")
    }

    console.log(form);

    return (
       <form id="pizza-form" onSubmit={SubmitHandler}>
           <label>Name:
            <input 
                type="text"
                name="name"
                id="name-input"
                value={form.name}
                onChange={onChange}
                />
            </label>
            <div>
            <label>Pizza Size!
            <select
                name="size"
                id="size-dropdown"
          >
            <option value=''>- Select a Size -</option>
            <option value='small'> Small-12inches</option>
            <option value='medium'>Medium-14inches</option>
            <option value='large'>Large-16inches</option>
          </select>
            </label>
            </div>
        <div>
            <h2>Toppings</h2>
            <label>Pepperoni
                <input 
                    type="checkbox"
                    name="pepperoni"
                    onChange={onChange}
                    // checked={form.pepperoni}
                    />
            </label>
            <label>Sausage
                <input 
                    type="checkbox"
                    name="sausage"
                    onChange={onChange}
                    // checked={form.sausage}
                    />
            </label>
            <label>Ham
                <input 
                    type="checkbox"
                    name="ham"
                    onChange={onChange}
                    // checked={form.ham}
                    />
            </label>
            <label>Jalapenos
                <input 
                    type="checkbox"
                    name="jalapenos"
                    onChange={onChange}
                    // checked={form.jalapenos}
                    />
            </label>
            <div>
            <label>Special Intrustions:
                <input
                type="text"
                name="special"
                id="special-text"
                value={form.special}
                onChange={onChange}
                />
            </label>

            </div>
           <button id="order-button">Add to Order</button>

                
                
            </div>
       </form>
    )
}

export default OrderForm;