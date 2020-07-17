
import React, { Component } from 'react';
import './App.css';
import * as LoginActions from "../src/Actions/homeAction";
import { connect } from "react-redux";

import {Modal,Button} from 'react-bootstrap'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email:"",
            password:"",
            ismodal:false
};
      }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit=()=>{
        
        let {email,password}=this.state;
        let body={
            email,
            password
    }
    this.props.handleLogin(body)
}
componentDidMount(){
    this.props.getHomeData()
}
addLanguage=()=>{
    let body={
        "language_name":this.state.language_name,
         "language_code":this.state.language_code,
         "align":"left"
    }
    this.props.addlanguagedata(body)
    this.state.homeData.push(body)
    this.setState({ismodal:false})

}
 enablemodal=()=>{
     this.setState({ismodal:true})
 }
 closemodal=()=>{
    this.setState({ismodal:false})

 }
 removeLanguage=(id)=>{
     this.props.removelanguagedata(id)
 }
 logout=()=>{
     localStorage.removeItem("LanguageToken")
     this.props.history.push("/login")
 }
componentDidUpdate(prevProps) {
    if (this.props.homeData !== prevProps.homeData) {
      const { data } = this.props.homeData;
      this.setState({ homeData: data.result });
    }
  }
    render() {
        return (
            <div>
            {this.props.loginData ? (
              <div>
                   <div className="wrap">
              <button onClick={this.enablemodal}>Add Language</button>

              <div className="homeicon" >
                <Button onClick={this.logout}>Logout</Button>
              </div>
            </div>
                <div className="parent-box">
                  {this.state.homeData &&
                    this.state.homeData.map((item, i) => (
                      <div
                        className="child-box"
                        key={i}
                       
                      >

                        <div className="box-heading">
                          <h4>{item.language_name}</h4>
                          <span>({item.language_code})</span>
                        </div>
                        <div className="box-description">
                            <button onClick={()=>{this.updateLanguage(item._id)}}>update</button>
                            <button onClick={()=>{this.removeLanguage(item._id)}}> Delete</button>

                          {/* <p>{item.language_name}</p> */}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div>...Loading</div>
            )}
            {this.state.ismodal?
            <Modal.Dialog >
  <Modal.Header >
    <Modal.Title>Add Language</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    {/* <p>Modal body text goes here.</p> */}
    Language Name : <input className="input1" onChange={this.handleChange} name="language_name"/><br/>
    Language Code : <input className="input2" name="language_code" onChange={this.handleChange}/>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={this.closemodal}>Close</Button>
    <Button variant="primary" onClick={this.addLanguage}>Add Language</Button>
  </Modal.Footer>
</Modal.Dialog>
:
null}
          </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("ddd",state)
    return {
      loginData: state.loginReducer.loginData,
      homeData: state.loginReducer.homeData
    };
  };
export default connect(mapStateToProps,{...LoginActions})(Home);
