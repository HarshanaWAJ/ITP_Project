import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleUpdateApplicant = () => {
    navigate('/update-applicant');
  };

  return (
    <div>
      <h1>Successfully Submitted</h1>
      <p>Your form has been successfully submitted.</p>
      <button onClick={handleUpdateApplicant}>Update Applicant</button>
    </div>
  );
};

export default SuccessPage;
