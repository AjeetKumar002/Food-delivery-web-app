import React from 'react'

const RestaurantSignUpPage = () => {
  return (
    <>
    <div>
    <h3>Restaurant SignUp</h3>
    <div>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter Email" className="input-field"/>
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="Enter password" className="input-field"/>
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="Confirm password" className="input-field"/>
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter Resturant Name" className="input-field"/>
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter City Name" className="input-field"/>
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter Full Address" className="input-field"/>
      </div>
      <div className="input-wrapper">
        <input type="tel" placeholder="Enter Phone Address" className="input-field"/>
      </div>
      <div>
        <button className="button">SignUp</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default RestaurantSignUpPage;