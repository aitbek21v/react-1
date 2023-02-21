import React from "react";

function Hero () {
    return (
        <div className='hero'>
            <div className='container'>
                <h1 style={{
                    display:"flex",
                    alignItems:"start",
                    justifyContent:"start",
                    fontWeight: '400',
                    fontSize: "29px",
                    lineHeight: "39px",
                    color: "#000000",

                }}>Вкусные рецепты</h1>
            </div>
        </div>
    )
}
export default Hero