import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
       
    }
    
    render() {
        return (
           <tr>
               {/* <td>
                   {this.props.obj._id}
               </td> */}
               <td>
                   {this.props.obj.year}
               </td>
               <td>
                   {this.props.obj.term}
               </td>
               <td>
                   {this.props.obj.garde}
               </td>
               <td>
                   {this.props.obj.subject}
               </td>
               <td>
                   {this.props.obj.marks}
               </td>
           </tr>
        );
    }
}

export default TableRow;