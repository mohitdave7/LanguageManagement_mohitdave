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
            <div id="login">
                <h3 className="text-center text-white pt-5">Login form</h3>
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <div id="login-form" className="form">
                                    <h3 className="text-center text-info">Login</h3>
                                    <div className="form-group">
                                        <label for="username" className="text-info">Email:</label><br />
                                        <input type="text" name="email" id="username" className="form-control" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="text-info">Password:</label><br />
                                        <input type="text" name="password" id="password" className="form-control" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label for="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                                        <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" onClick={this.handleSubmit} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
