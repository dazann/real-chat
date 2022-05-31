import React from 'react'


const Infobar = (prop) => {
    return (
        <div id="infobar">
            {prop.room}
            <div id="exit">
                Exit
            </div>
        </div>
    )
}

export default Infobar;