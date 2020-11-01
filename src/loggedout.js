import React,{useContext} from 'react'
import { UserContext } from './UserContext'

const Loggedout = () => {
    const {logout} = useContext(UserContext)

    return (
        <div>
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default Loggedout
