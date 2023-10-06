import React, {Component} from 'react';
import axios from 'axios'
import CheckoutTableRow from './CheckoutTableRow';
//Report generate
import "jspdf-autotable";
import jsPDF from 'jspdf';

export default  class AddCheckouts extends  Component{

    constructor(props) {
        super(props);

        // this.onChangeSearch = this.onChangeSearch.bind(this);
        

        this.state = {
            payments : [],
            
        }
       
    }

    componentDidMount() {
       
        axios.get('http://localhost:8040/payments/')
            .then(response => {
               console.log(response.data)
                this.setState({payments : response.data.payments});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.payments.map(function (object, i){
            return <CheckoutTableRow obj = {object} key = {i}/>;
        });
    }



    render() {
        //Report Generation
   const exportFeedbacks = () => {
    //console.log("Export PDF")
  
    const unit = "pt";
    const size = "A3";
    const orientation = "portrait";
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
  
    const title = "Payment Details Report";
    const headers = [["Name", "Address", "Admission Number", "Email","Payment Type"]];
  
    const fed =  this.state.payments.map(
        data => [
            data.name,
            data.address,
            data.city,
            data.email,
            data.paymenttype,
   
        ]
    );
  
    let content = {
        startY: 50,
        head: headers,
        body: fed
    };

    doc.setFontSize(20);
    doc.text(title, marginLeft, 40);
    require('jspdf-autotable');
    doc.autoTable(content);
    doc.save("Payment_Details_Report.pdf")
  
  }
        return (
             <div>
                    <br/>
                    <h1 style={{textAlign:'center'}}>Payment Details</h1>
                    
                    <table className="table table-striped" style = {{marginTop :5,display:'table',marginLeft:'auto',marginRight:'auto'}}>
                            <thead style={{padding:10,textAlign:'center'}}>
                                <tr>
                                    {/* <th>id</th> */}
                                   
                                    <th style={{padding:20}}>Name</th>
                                    <th style={{padding:20}}>Address</th>
                                    <th style={{padding:20}}>Admossion Number</th>
                                    <th style={{padding:20}}>Email</th>
                                    <th style={{padding:20}}>Payment Type</th>
                                    
                                </tr>
                            </thead>
                            <tbody style={{padding:20,textAlign:'center'}}>
                                {this.tabRow()}
                            </tbody>
                    </table>
                    <button className = "btn-dReports" onClick= { exportFeedbacks}> Generate Report</button>

             </div>
        )
    }
}
