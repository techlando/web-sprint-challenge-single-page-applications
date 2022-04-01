import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";


const initialFormValues = {
    name: "",
    size: '',
    pepperoni: false,
    sausage: false,
    ham: false,
    jalapenos: false,
    special: ""

}



const OrderForm = ({orders, setOrders}) => {
    const formSchema = yup.object().shape({
        name: yup.string().trim().min(2, "name must be at least 2 characters"),
        size: yup.string(),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        ham: yup.boolean(),
        jalapenos: yup.boolean(),
        special: yup.string()
    })
    const [errors, setErrors] = useState({
        name: "",
        size: '',
        pepperoni: false,
        sausage: false,
        ham: false,
        jalapenos: false,
        special: ""
    })
    const validateChange = (name, value) => {
        yup.reach(formSchema, name)
        .validate(value)
        .then(() => {
            setErrors({...errors, [name]: ""})
        })
        .catch((error) => {
            setErrors({...errors, [name]: error.errors[0]})
        })
    }

    const [form, setForm] = useState(initialFormValues)
    const history = useHistory()
    

    const onChange = (e) => {
        const name = e.target.name
        // const { checked, type } = e.target
        
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        
        
        validateChange(name, value)
        setForm({...form, [name]: value})

    }

    const SubmitHandler = (e) => {
        e.preventDefault()
        setOrders([...orders, form])
        history.push("/mypizza")

    }
   

    

    return (
       <form id="pizza-form" onSubmit={SubmitHandler}>
           <label><p>{errors.name}</p> Name: 
            <input data-test-id="name"
                type="text"
                name="name"
                id="name-input"
                value={form.name}
                onChange={onChange}
                />
            </label>
            <div>
            <label>Pizza Size!
            <select data-test-id="size"
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
                <input data-test-id="pepperoni"
                    type="checkbox"
                    name="pepperoni"
                    onChange={onChange}
                    checked={form.pepperoni}
                    />
            </label>
            <label>Sausage
                <input data-test-id="sausage"
                    type="checkbox"
                    name="sausage"
                    onChange={onChange}
                    checked={form.sausage}
                    />
            </label>
            <label>Ham
                <input data-test-id="ham"
                    type="checkbox"
                    name="ham"
                    onChange={onChange}
                    checked={form.ham}
                    />
            </label>
            <label>Jalapenos
                <input data-test-id="jalapenos"
                    type="checkbox"
                    name="jalapenos"
                    onChange={onChange}
                    checked={form.jalapenos}
                    />
            </label>
            <div>
            <label>Special Intrustions:
                <input data-test-id="special"
                type="text"
                name="special"
                id="special-text"
                value={form.special}
                onChange={onChange}
                />
            </label>

            </div>
           <button data-test-id="order-button" id="order-button">Add to Order</button>

                
                
            </div>
       </form>
    )
}

export default OrderForm;