import { useApplicantContext } from "../hooks/useApplicantsContext"

const ApplicantDetails = ({applicant}) => {
    const {dispatch} = useApplicantContext()

    const handleClick = async () => {
        const response = await fetch('/api/applicant/' +applicant._id,{
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload:json})
        }
    }

    return(
        <div className="applicant-details">
               <h4>{applicant.name}
               </h4> 
            <p><strong>age :</strong>{applicant.age}</p>
            <p><strong>Gender :</strong>{applicant.gender}</p>
            <p><strong>phone : </strong>{applicant.phone}</p>
            <p><strong>birthday : </strong>{applicant.birthday}</p>
            <p><strong>address : </strong>{applicant.address}</p>
            <p><strong>email : </strong>{applicant.email}</p>
            <p>{applicant.createdAt}</p>
            <span className="delete-button" onClick={handleClick}>delete</span>
        </div>

    )
}
export default ApplicantDetails