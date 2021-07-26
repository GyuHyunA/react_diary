import React, {useState} from 'react'
import styled from 'styled-components'
import PropUsestateB from './prop-usestateB'
import { Route, Link } from 'react-router-dom'
import Home from '../rout_component/home'



function PropUsestateA() {
    const [ta, setTa] = useState(false)
    const imgdata = {
        a:"https://i.ytimg.com/an_webp/M77tXx8y7l8/mqdefault_6s.webp?du=3000&sqp=CO_69YcG&rs=AOn4CLBnjkoZwl_N5Ftkfogz0oACJFwneA",
        b:"https://i.ytimg.com/vi/VfW86fnQL5w/hq720_live.jpg?sqp=CPT_9YcG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_kWfdEruqvhFwaSpNMo2BSVaX8A"
    }

    return (
        <>
            <Link to="/testB">
                <img src={imgdata.b} alt="" />
            </Link>
            <Route path="/testB" component={PropUsestateB} />
        </>
    )
}

export default PropUsestateA
