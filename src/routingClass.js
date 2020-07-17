import React, { Component } from 'react';
import Login from "./login"
import Home from "./home"
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
// import MovieData from "./components/MovieData"

export const PrivateRoute =({Component: Component,...rest})=>{

    const token = localStorage.getItem("LanguageToken")
return (
    <Route {...rest} render={(props)=>{
        return (token) 
        ?
        <div>
            <Component {...props} {...rest}/>
        </div>
        :
        <Redirect to="/login"/>
    }}/>
)
}
class Routingclass extends Component {
  render() {
    return (
        <BrowserRouter>

       <Switch>
            <Route exact path="/login" component={Login}/>
            <PrivateRoute exact path="/home" component={Home}/>
       </Switch>
        </BrowserRouter>
        );
  }
}

export default Routingclass;
