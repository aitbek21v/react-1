import React from "react";
import logo from "../img/logo.svg"

function Header () {
    return (
    <div className='header'>
        <div className='container'>
            <div className='header'>
                <img src={logo} alt=""/>
                <nav className='nav'>
                    <a href="#">Home</a>
                    <a href="#">Recipes</a>
                    <a href="#">Meat</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Support</a>
                </nav>
                <button className='btn'>Sign in</button>
                <button className='btn2'>Request demo</button>
            </div>
        </div>
    </div>
    )
}
export default Header