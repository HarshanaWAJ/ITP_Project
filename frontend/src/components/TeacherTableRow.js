import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.get('http://localhost:4000/teacher/deleteteacher/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert("Successfully Deleted....")
        window.location.replace('/');
    }
    render() {
        return (
           <tr>
                <td>
                   <img src = "https://static.vecteezy.com/system/resources/previews/014/541/504/original/school-teacher-avatar-icon-flat-style-vector.jpg" width="200" height="200"/>
               </td>
               <td>
                   {this.props.obj.name}
               </td>
               <td>
                   {this.props.obj.phone}
               </td>
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   {this.props.obj.subject}
               </td>
               <td>
                   <Link to={"/editTeacher/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                    &nbsp;
                   <button onClick={this.deletesss} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;