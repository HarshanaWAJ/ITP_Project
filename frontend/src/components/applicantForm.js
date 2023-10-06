
import { useState   } from "react"
import { useApplicantContext } from "../hooks/useApplicantsContext"
import { useNavigate } from "react-router-dom"


const ApplicantForm = () => {

    const {dispatch} = useApplicantContext()
    const [name, setName ] = useState('')
    const [age, setAge ] = useState('')
    const [gender, setGender ] = useState('')
    const [phone, setPhone ] = useState('')
    const [birthday, setBirthday ] = useState('')
    const [address, setAddress ] = useState('')
    const [email, setEmail ] = useState('')
    const [error, setError ] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const applicant = {name,age,gender,phone , birthday ,address, email}

        const response = await fetch('/api/applicant', {
            method: 'POST',
            body: JSON.stringify(applicant),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
           setError(json.error) 
           setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setName('')
            setAge('')
            setGender('')
            setPhone('')
            setBirthday('')
            setAddress('')
            setEmail('')
            setError(null)
            setEmptyFields([])
            console.log('new applicant added' , json)
            dispatch({type: 'CREATE_APPLICANT' , payload: json})
            navigate("/applicant/Successpage"); // use navigate function to go to /updateapp page
        }
    
    }
    
      
    
    return (

        <form className="create" onSubmit={handleSubmit}>

            
                <label>Applicant Name</label>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className={emptyFields.includes('name') ? 'error' : '' }
             />
              <label>Applicant age</label>
                    <input
                        type="number"
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                        className={emptyFields.includes('age') ? 'error' : '' }
             />
             <label>Gender:</label>
             <select onChange={(e) => setGender(e.target.value)} value={gender} className={emptyFields.includes('gender') ? 'error' : ''}>
               <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
             </select>

             <label>Birthday:</label>
                     <input
                    type="date"
                    onChange={(e) => setBirthday(e.target.value)}
                    value={birthday}
                    className={emptyFields.includes('birthday') ? 'error' : ''}
                />

             <label>phone:</label>
                    <input
                        type="number"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        className={emptyFields.includes('phone') ? 'error' : '' }
             />
            <label>Address:</label>
                    <input
                        type="text"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        className={emptyFields.includes('address') ? 'error' : '' }
             />
             <label>Email:</label>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className={emptyFields.includes('email') ? 'error' : '' }
             />
            <button>SUBMIT</button>
             {error && <div className="error">{error}</div>}
             
        </form>
        
    )
    
      
}

export default ApplicantForm

