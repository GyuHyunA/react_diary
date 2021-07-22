import React from 'react'

function MapA() {
    const message = 'Hello world'; 
    const result = Array.prototype.map.call(message, char => `${char}`);

    return (
        <div>
            <div>
                <p>{result}</p>
            </div>
        </div>
    )
}

export default MapA;
