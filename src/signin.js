import React,{useContext} from 'react'
import { UserContext } from './UserContext'
const Signin = () => {
    const {login ,logout} = useContext(UserContext)
    return (
        <div>
             <button onClick={login}>login</button>
             
        </div>
    )
}

export default Signin
