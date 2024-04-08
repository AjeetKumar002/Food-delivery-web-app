const RestaurantLoginPage = () => {
  return (
    <>
    <div>
    <h3>Restaurant Login</h3>
    <div>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter Email" className="input-field"/>
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="Enter password" className="input-field"/>
      </div>
      <div>
        <button className="button">Login</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default RestaurantLoginPage;
