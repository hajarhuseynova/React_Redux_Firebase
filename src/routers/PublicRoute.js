import React from 'react'
import {connect} from "react-redux"
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'

const PublicRoute = ({isAuthenticated,component:Component, ...rest}) => {
  return (
  <Route {...rest} component={(props)=>
    isAuthenticated ? (
        <Redirect to="/blogs"/>
    ):(
        <Component {...props}/>
    )}/>
  )}

const mapStatetoProps = (state) => ({
    isAuthenticated: !!state.auth.uid

})

export default connect(mapStatetoProps)(PublicRoute)
