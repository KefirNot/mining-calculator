import React, { useState } from "react";

function Components () {
    const [value, setValue] = useState('Текст в инпуте')

    return(
        <div className="body">
            <div className="input">
                <h1>{value}</h1>
                <input className="int"
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </div>
        </div>
    ) 
}

export default Components;