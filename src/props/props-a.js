import React, {useState} from 'react'
import PropsB from './props-b'


function PropsA() {
    const imga ={
        a: "data:image/png;base64,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",
        b: "https://img.icons8.com/pastel-glyph/2x/info.png"
    }

    
    return (
        <>  
            <PropsB name="react" ia={imga.a} ib={imga.b} />
        </>
    )
}

export default PropsA;