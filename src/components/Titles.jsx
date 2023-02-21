import React from "react";

function Titles ({theme ,title,title2,brut,cab}) {
    return (
        <div id='herr'>
        <div className='container'>
            <div className='title'>
               <div className='title2'>
                <h3>{theme}</h3>
                <p>{title}</p>
                <p>{title2}</p>
                <p>{brut}</p>
                <p>{cab}</p>
                <p>Оливковое масло</p>
                <p>Чеснок</p>
               </div>
            </div>

        </div>
        </div>
    )
}
export default Titles