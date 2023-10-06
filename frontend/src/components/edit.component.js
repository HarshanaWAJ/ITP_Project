import  React, {Component} from 'react';
import axios from 'axios';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";


import './css/LandingPage.css';



export default  class Edit extends  Component{


    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangecPassword = this.onChangecPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            address: '',
            nic:'',
            campusid:'',
            phone:'',
            email:'',
            password:'',
            cpassword:''
        }
    }

    componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/campus/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    address: res.data.address,
                    nic: res.data.nic,
                    phone: res.data.phone,
                    campusid: res.data.campusid,
                    email: res.data.email,
                    password: res.data.password
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    onChangeAddress(e){
        this.setState({
            address: e.target.value
        });
    }
    onChangeNIC(e){
        this.setState({
            nic: e.target.value,
            campusid:"IT21"+ e.target.value.substring(0, 6)
        });
    }
    onChangePhone(e){
        this.setState({
            phone: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }
    onChangecPassword(e){
        this.setState( {
            cpassword: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        let CampusID = this.state.campusid;
        const obj ={
            name: this.state.name,
            address: this.state.address,
            nic: this.state.nic,
            phone: this.state.phone,
            campusid: this.state.campusid,
            email: this.state.email,
            password: this.state.password,
        };

        console.log('Update id '+this.props.match.params.id);
        //const lastelement = this.state.nic.charAt(this.state.nic.length - 1);
        if(this.state.password ===  this.state.cpassword){
            if(this.state.password.length >= 8){
                if(this.state.phone.length === 10){
                    if(this.state.nic.length === 12){
                            axios.post('http://localhost:4000/campus/update/'+this.props.match.params.id,obj)
                                .then(res => console.log(res.data));
                            // this.props.history.push('/index/'+CampusID);
                            alert('Your Account Details successfully Updated... Pleace Login again...');
                            this.props.history.push('/signIn');
                        
                    } 
                    else {
                        alert('Invalid NIC Number.. Pleace enter 10 digits for nic.');
                    }
                }
                else{
                    alert('Invalid phone number.. Pleace enter 10 numbers for contact number.');
                }
            } 
            else {
                alert('Pleace enter at least 8 characters for passwords.');
            }
        }else{
            alert('Your password and confirm password are miss match... Pleace enter same passwords');
        }
    }

    render() {
        return(
            <div className='wrap'>
                {/* <Navbar>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="200"
                            height="120"

                        />{''}
                        <h2 className="d-xl-inline" >School of Information Technology</h2>
                    </Navbar.Brand>
                        <img src = "https://img.freepik.com/free-vector/flat-design-minimalistic-technology-twitch-banner_23-2149107142.jpg" style = {{padding :2}} height="100"/>
                        <img src = "https://img.freepik.com/free-vector/gradient-halftone-technology-twitch-banner_23-2149164513.jpg?w=360"  style = {{padding :2}} height="100"/>
                </Navbar> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <div className="collapse navbar-collapse" id = "navbarSupportedContent">
                        <ul className="navbar-nav mr-auto font-weight-bold form-control-lg text-dark ">
                            <li className="nav-item">
                                <Link to={''} className = "nav-link">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={''} className = "nav-link">Time Tables</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={''} className = "nav-link">Subjects</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={''} className = "nav-link">Exams</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={''} className = "nav-link">Results</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/logout'} className = "nav-link">Sign Out</Link>
                            </li>
                        </ul>
                    </div>
                    <Form inline>
                                <input class="form-control input-sm mr-1"  type="text" placeholder='search here....'/>
                                <Button type="submit" className='btn btn-info btn-sm'>search</Button>
                    </Form>
                </nav>
                <br/>
                <div className="container reg-frm" style={{marginTop:10}}>
                    <h3 className="text-center">Edit Your Bios</h3>
                    <form onSubmit={this.onSubmit} className="form-control-plaintext">
                        <div className="form-group">
                            <label>Name :</label>
                            <input type ="text" className="form-control"  value={this.state.name} onChange = {this.onChangeName}/>
                        </div>
                        <div className="form-group">
                            <label>Address :</label>
                            <input type ="text" className="form-control"  value={this.state.address} onChange = {this.onChangeAddress}/>
                        </div>
                        <div className="form-group">
                            <label>NIC :</label>
                            <input type ="text" className="form-control" value={this.state.nic} onChange = {this.onChangeNIC}/>
                        </div>
                        <div className="form-group">
                            <label style={{color:'red',fontWeight:'bold'}}>Your Campus ID Number :</label>
                            <input type ="text" className="form-control" value={this.state.campusid} readOnly style={{color:'green',fontWeight:'bold'}}/>
                        </div>
                        <div className="form-group">
                            <label>Phone Number :</label>
                            <input type ="text" className="form-control" value={this.state.phone} onChange = {this.onChangePhone}/>
                        </div>
                        <div className="form-group">
                            <label>email Address :</label>
                            <input type ="text" className="form-control" value={this.state.email} onChange = {this.onChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password :</label>
                            <input type ="text" className="form-control" value={this.state.password} onChange = {this.onChangePassword}/>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password :</label>
                            <input type ="password" className="form-control" value={this.state.cpassword} onChange = {this.onChangecPassword}/>
                        </div>

                        <div className="form-group">
                            <input type = "submit" value = "Update Details" className="btn btn-success"/>
                        </div>
                    </form>
                </div>

                <br/><br/>
                    <div className='top-footer'>
                        <img src = "https://media.istockphoto.com/id/483322025/photo/male-student-in-classroom-writing-in-notebook.jpg?s=612x612&w=0&k=20&c=rZfH3aM4pDazcRKKGJoC0paw_OHXI1S4ttO6zOK5g4g=" width="400"/>
                        <img src = "https://www.oxfordlearning.com/wp-content/uploads/2018/07/how-to-prepare-for-high-school-min.jpeg" width="475"/>
                        <img src = "https://as2.ftcdn.net/v2/jpg/03/67/42/97/1000_F_367429784_WbJ6zvRljwP3yvKqcf375LOCG9xoyPEK.jpg" width="" height=""/>
                    </div>
                    <div>
                         <hr className="shadow-lg card-footer"/>
                    </div>
            
            </div>
        )
    }
}