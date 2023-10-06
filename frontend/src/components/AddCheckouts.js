
import { Box, Button,MenuItem, InputLabel,Select,FormLabel, TextField } from "@mui/material";
    
import axios from 'axios';
import React, { Component } from 'react';
import './ch.css'
export default  class AddCheckouts extends  Component{
constructor(props){
    super(props);

    this.onChangepaymenttype = this.onChangepaymenttype.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this);
    this.onChangecity = this.onChangecity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        paymenttype: '',
        city: '',
        address:'',
        email:'',
        name:''
       
    }
    this.onChangename = this.onChangename.bind(this)
}

onChangename(e){
  this.setState({
    name : e.target.value
  });
}
onChangeemail(e){
    this.setState( {
        email: e.target.value
    });
}
onChangecity(e){
    this.setState( {
        city: e.target.value
    });
}
onChangeaddress(e){
    this.setState( {
        address: e.target.value
    });
}
onChangepaymenttype(e){
    this.setState( {
        paymenttype: e.target.value
    });
}

onSubmit(e){
    e.preventDefault();
    //this.state.status = 'pending';
    const obj = {
        name : this.state.name,
        email : this.state.email,
        address : this.state.address,
        city : this.state.city,
        paymenttype : this.state.paymenttype,
        
    };

    axios.post('http://localhost:8040/payments/',obj)
                            .then(res => {
                                alert("Payment Details Added Successfully");
                                this.setState({
                                   name :'',
                                    email: '',
                                    city:'',
                                    address:'',
                                    paymenttype:''
                        
                                })
                                console.log(res.data)});
                                //window.location.replace('/view');
}


render() {
    return(
        <div>
            <form onSubmit={this.onSubmit}>
            <center>   
            <b>Payments</b>
            </center> 
           
        <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={500}
            alignContent={"center"}
            alignSelf={"center"}
            marginLeft={"auto"}
            marginRight={"auto"}
            marginTop={6}
        >
                {/* <FormLabel> name</FormLabel>
                <TextField value={nameD} margin="normal" fullWidth variant ="outlined" name="nameD"/> */}

<FormLabel> Name </FormLabel>
  
  <TextField value={this.state.name} onChange={this.onChangename} type="text" margin="normal" fullWidth variant ="outlined" name="name" />
  
  <FormLabel> Email</FormLabel>
  <TextField value={this.state.email} 
  type = "email" 
  name="email" 
  onChange={this.onChangeemail}
   fullWidth variant ="outlined" />
 

  <FormLabel> Address</FormLabel>
  <TextField value={this.state.address} onChange={this.onChangeaddress}type="text"margin="normal" fullWidth variant ="outlined" name="address"  />
  
  <FormLabel>Admossion Number</FormLabel>
  <TextField value={this.state.city} type= "number" onChange={this.onChangecity}margin="normal" fullWidth variant ="outlined" name="city"/>
  


  <InputLabel id="demo-simple-select-label">Payment Type</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
margin="normal"
fullWidth variant ="outlined"
label="Payment Type"
value = {this.state.paymenttype}
onChange={this.onChangepaymenttype}
>
<MenuItem value=""  disabled >Select Option</MenuItem>
<MenuItem value={"Bank Payments"}>Bank Payments</MenuItem>
<MenuItem value={"Money Transfer"}>Money Transfer</MenuItem>
<MenuItem value={"Counter Payments"}>Counter Payments</MenuItem>
</Select>


<br></br>
  <Button variant ="contained"type ="submit" 
             >Submit</Button>

<br></br>
        
                {/* <FormControlLabel control={<Checkbox Checked={inputs.alldetailsarecorrect} />} label="All details are correct"/> */}
                
                </Box>
            </form>
        </div>
    )
}
}