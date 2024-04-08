import Link from "next/link";
import React from "react";
import logo from '@app/app/images/Logo.jpg';
import Image from "next/image";

const RestaurantHeader = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="logo">
          <Image style={{width: "100px" ,height: "100px"}} src={logo} alt="logo" />
        </div>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Login/SignUp</Link>
          </li>
          <li>
            <Link href="/">Profile</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RestaurantHeader;
