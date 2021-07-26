import React, {useState} from 'react'
import PropsB from './props-b'


function PropsA({imgd}) {

    
    return (
        <>  
            <PropsB name="react" ia={imgd.a} ib={imgd.b} />
        </>
    )
}

export default PropsA;