import React,{useContext} from 'react'
import { Redirect, Route } from 'react-router-dom'
import { UserContext } from './UserContext'

const PrivateRoute = ({component: Componen , ...rest}) => {
    const {isLoggedIn} = useContext(UserContext)
    
    return (
      <Route {...rest} render={props => (
          isLoggedIn ? <Componen {...props} /> : <Redirect to='/signin' />
      )}/>
    )
}

export default PrivateRoute
