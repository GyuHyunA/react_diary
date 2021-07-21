import React, {useState} from 'react'
import { Link, Route } from 'react-router-dom'
import Profiles from '../rout_component/profiles'


function PropsB(b) {
    
    const [uA, setUA] = useState(!true);

    const changeImg = (src) => {
        
        if(uA === true){
            src = b.ia;
        }
        else{
            src = b.ib;
        }
    }

    return(
        <>
            안녕하세요 {b.name}
            <Link to='/profiles'> 
                <img src={b.ia} alt="" width="20px" style={{marginRight:"20px"}}/>       
            </Link>
            <img src={changeImg} alt="" width="20px"/>
            <button onClick={()=>setUA(!uA)}> 버튼 </button>

            
            <Route path="profiles" component={Profiles}> </Route>
        </>
    )
}

export default PropsB
