import { useState} from 'react';
import "../Styles/PageLogin.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
const Login = ()=>{

const [icon,setIcon] = useState(<FontAwesomeIcon icon={faEye}/>);
const [EyeState, SetEyeState] = useState<boolean>(false);
const [Mode,setMode] = useState(<InputPasswordMode/>);

function InputPasswordMode (){
    return(
            <div className="">
                <input className="input" type= "password"  placeholder="Password"/>
                <span className="icon" onClick={ Clicked } > {icon}</span>
            </div>
        )

    }

function InputTextMode (){
    return(
        <div className="">
            <input className="input" type= "text"  placeholder="Password"/>
            <span className="icon" onClick={ Clicked } > {icon}</span>
        </div>
    )
}

function Clicked () {
    if(!EyeState) {
        SetEyeState(true)
        setIcon(<FontAwesomeIcon icon={faEyeSlash}/>)
        setMode(<InputTextMode/>)

    }
    if (!EyeState) {
        return;
    }
    SetEyeState(false)
    setIcon(<FontAwesomeIcon icon={faEye}/>)
    setMode(<InputPasswordMode/>)
}

    return(
        <>
            <div className="LoginPage">
                <div className="container">
                    <br/>
                    <h2 className="welcome">Welcome</h2>
                    <div className="form">
                        <input className="input" type="text" placeholder="User name or Email address"/>
                        {Mode}
                    </div>
                    <label htmlFor="login">
                        <div className="login" >
                            Login
                        </div>
                    </label>
                    <button id="login">
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login;