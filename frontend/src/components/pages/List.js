import { useEffect } from "react";
import { useApplicantContext } from "../hooks/useApplicantsContext";
// components

import ApplicantForm from "../components/applicantForm";

const ApplicantList = () => {
  const {  dispatch } = useApplicantContext();

  useEffect(() => {
    const fetchApplicants = async () => {
      const response = await fetch("/api/applicant");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_APPLICANTS", payload: json });
      }
    };
    fetchApplicants();
  }, [dispatch]);

  return (
    <div className="applicant-list">
      <center><h1>Application Form</h1></center>
      <ApplicantForm/>
    </div>
  );
};

export default ApplicantList;
