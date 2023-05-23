import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {LightMode,DarkMode} from '../Redux/Action/index';

function Navbar() {
    const dispatch = useDispatch()
    const Mode = useSelector(state=>state.swtichMode)
    return (
        <>
            <nav className="navbar " style={{backgroundColor: Mode==='Enable Dark Mode'?'white':'black', color:Mode==='Enable Dark Mode'?'black':'white'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{color:Mode==='Enable Dark Mode'?'black':'white'}} >Navbar</a>
                    <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" onClick={()=>Mode ==='Enable Dark Mode'?dispatch(DarkMode()):dispatch(LightMode())}  id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{Mode}</label>
                </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar