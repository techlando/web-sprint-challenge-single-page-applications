import React from "react";


const OrderForm = () => {
    return (
       <form id="pizza-form">
           <label>Name:
            <input 
                type="text"
                name="name"
                id="name-input"

                />
            </label>
            <label>Pizza Size!
            <select
                id="size-dropdown"
          >
            <option value=''>- Select a Size -</option>
            <option value='small'> Small-12inches</option>
            <option value='medium'>Medium-14inches</option>
            <option value='large'>Large-16 inches</option>
          </select>
            </label>
       </form>
    )
}

export default OrderForm;