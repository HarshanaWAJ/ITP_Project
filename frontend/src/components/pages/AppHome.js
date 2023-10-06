import { useEffect  } from "react"
import { useApplicantContext } from "../hooks/useApplicantsContext"
//components
import ApplicantDetails from "../components/applicantDetails"


const Home = ()=> {
    const{applicant,dispatch} = useApplicantContext()

    const {} = useApplicantContext()


useEffect(() => {
    const fetchApplicants =async () => {
        const response = await fetch('/api/applicant')
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'SET_APPLICANTS', payload: json})
        }
    }
    fetchApplicants()
}, [])

    return (
        <div className="home">
           
            
            <div className="applicants">
            {applicant && applicant.map((applicant) => (
               <ApplicantDetails key= {applicant._id} applicant={applicant}/>
            
            ))}
           </div>
           
        </div>
    )

}

export default Home
