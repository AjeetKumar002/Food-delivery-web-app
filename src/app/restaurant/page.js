"use client";
import React, { useState } from "react";
import RestaurantLoginPage from "../_components/RestaurantLoginPage";
import RestaurantSignUpPage from "../_components/RestaurantSignUpPage";
import RestaurantHeader from "../_components/RestaurantHeader";
import './style.css';
import RestaurantFooter from "../_components/RestaurantFooter";

const page = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
    <div className="container">
    <RestaurantHeader />
      <h1>Resturent Login/Signup Page</h1>
      {login ? <RestaurantLoginPage /> : <RestaurantSignUpPage />}
      <div>
      <button className="button-link" onClick={()=> setLogin(!login)}>
        {login ? "Do not have account? SignUp" : "Already have account? Login"}
      </button>
      </div>
    </div>
    <RestaurantFooter />
    </>
  );
};

export default page;
