import  React, {Component} from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

export default  class editTeacher extends  Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name:'',
            phone:'',
            email:'',
            subject:''
        }
    }

    componentDidMount() {
        //alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/teacher/editteacher/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    phone: res.data.phone,
                    email: res.data.email,
                    subject: res.data.subject
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChangeName(e){
        this.setState( {
            name: e.target.value
        });
    }
    onChangePhone(e){
        this.setState( {
            phone: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState( {
            email: e.target.value
        });
    }
    onChangeSubject(e){
        this.setState( {
            subject: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            name : this.state.name,
            phone : this.state.phone,
            email : this.state.email,
            subject : this.state.subject
        };
       
                if(this.state.phone.length === 10){
                            axios.post('http://localhost:4000/teacher/updateteacher/'+this.props.match.params.id,obj)
                                .then(res => {
                                    alert("Teacher Updated Successfully");
                                    this.setState({
                                        name :'',
                                        phone:'',
                                        email:'',
                                        subject:''
                            
                                    })
                                    console.log(res.data)});
                            this.props.history.push('/');
                        
                    
                }
                else{
                    alert('Invalid phone number.. Pleace enter 10 numbers for contact number.');
                }
    }

    render() {
        return(
            <div>
                <Header/>
                <Navbar/>
                <div className="container " style={{marginTop:10}}>
                        <h3 className="text-center" style={{borderBottom:'tomaato solid'}}>Teacher Edit Form</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Teacher Name :</label>
                                <input type ="text" required placeholder = " enter name" className="form-control" value={this.state.name} onChange = {this.onChangeName}/>
                            </div>
                            <div className="form-group">
                                <label>Phone Number :</label>
                                <input type ="number" required placeholder = " enter contact number" className="form-control" value={this.state.phone} onChange = {this.onChangePhone}/>
                            </div>
                            <div className="form-group">
                                <label> Email Address :</label>
                                <input type ="email" required placeholder = " enter email" className="form-control" value={this.state.email} onChange = {this.onChangeEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Subjects :</label>
                                {/* <input type ="password" required placeholder = "Please enter Password" className="form-control" value={this.state.password} onChange = {this.onChangePassword}/> */}
                                <select className="form-control" value={this.state.subject} onChange = {this.onChangeSubject}>
                                    <option> Change subject</option>
                                    <option value = "Mathematics">Mathematics</option>
                                    <option value = "English">English</option>
                                    <option value = "Sinhala">Sinhala</option>
                                    <option value = "Geography">Geography</option>
                                    <option value = "History">History</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type = "submit" value = "Update Teacher" className="btn btn-dark"/>
                            </div>
                        </form>
                    </div>
                <Footer/>
            </div>
        )
    }
}
