import React, { Component } from 'react';
import './App.css';
import * as LoginActions from "../src/Actions/homeAction";
import { connect } from "react-redux";



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email:"",
    password:""};
      }

      componentDidMount(){
          if(localStorage.getItem("LanguageToken")){
              this.props.history.push("/home")
          }
      }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentDidUpdate(prevProps) {
        if (this.props.loginData !== prevProps.loginData) {
            const { data,status} = this.props.loginData;
            if(status==200){
                this.props.history.push("/home")
            }
          }
      }
    handleSubmit=()=>{
        
        let {email,password}=this.state;
        let body={
            email,
            password
    }
    this.props.handleLogin(body)
}
    render() {
        return (
           "hi"
        )
    }
}
const mapStateToProps = (state) => {
    console.log("ddd",state)
    return {
      loginData: state.loginReducer.loginData,
    };
  };
export default connect(mapStateToProps,{...LoginActions})(Login);
