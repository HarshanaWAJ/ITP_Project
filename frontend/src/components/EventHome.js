import React from 'react';
import { Link } from 'react-router-dom';

const Expenses = () => {
  const buttonStyle = {
    display: "inline-block",
    backgroundImage: "linear-gradient(125deg,#a72879,#064497)",
    color:"#fff",
    textTransform:"uppercase",
    letterSpacing:"2px",
    fontSize: "16px",
      width:"200px",
      height:"36px",
      border:"none",
      cursor: "pointer",
      align: "center",
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
        <br/><br/><br/>
      <Link to="/add" className="btn btn-primary mb-3"style ={buttonStyle}>
        Add Events of the school
      </Link>
      <Link to="/view" className="btn btn-primary mb-3"style ={buttonStyle}>
        View events of the school
      </Link>
      
    </div>
  );
};

export default Expenses;
