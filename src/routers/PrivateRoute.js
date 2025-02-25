import React from 'react'
import {connect} from "react-redux"
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'
import Header from '../components/Header'

const PrivateRoute = ({isAuthenticated,component:Component, ...rest}) => {
  return (
  <Route {...rest} component={(props)=>
    isAuthenticated ? (
     <div>
        <Header/>
        <Component {...props}/>
     </div>

    ):(
        <Redirect to="/"/>
    )}/>
  )}

const mapStatetoProps = (state) => ({
    isAuthenticated: !!state.auth.uid

})

export default connect(mapStatetoProps)(PrivateRoute)
