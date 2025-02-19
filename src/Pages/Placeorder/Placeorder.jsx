import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../Components/Context/StoreContext'

const PlaceOrder = () => {
 const {getTotalCartAmount}=useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-fields">
        <input type="text" placeholder='First-Name' />
        <input type="text" placeholder='Last-Name' />
      </div>
      <input type="email" placeholder='Email' />
      <input type="text" placeholder='street' />
      <div className="multi-fields">
        <input type="text" placeholder='City' />
        <input type="text" placeholder='state' />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder='Zip-Code' />
        <input type="text" placeholder='Country' />
      </div>
      <input type="text " placeholder='Phone' />
      </div>
      
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal:</p>
              <p>{getTotalCartAmount()}</p>

            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery free</p>
              <p>{2}</p>

            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()+2}</b>

            </div>
          </div>
          <button >Proceed to checkOut</button>
          
        </div>

      </div>
      
    </form>
  )
}

export default PlaceOrder