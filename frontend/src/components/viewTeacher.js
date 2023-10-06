import  React, {Component} from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

import TeacherTableRow from './TeacherTableRow';

export default  class viewTeacher extends  Component{
    constructor(props) {
        super(props);
        this.state = {teachers : []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/teacher/')
            .then(response => {
                this.setState({teachers : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.teachers.map(function (object, i){
            return <TeacherTableRow obj = {object} key = {i}/>;
        });
        // return <OrderTableRow obj={this.state.orders}/>
    }


    render() {
        return(
            <div>
                <Header/>
                <Navbar/>
                        <h3 align="center">Teachers Details</h3>
                       

                        <table className="table table-striped" style = {{marginTop :20,display:'table',width:'60%',marginLeft:'auto',marginRight:'auto'}}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Full Name</th>
                                    <th>Contact Number</th>
                                    <th>Email</th>
                                    <th>Subject</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.tabRow()}
                            </tbody>
                        </table>
                <Footer/>
            </div>
        )
    }
}
