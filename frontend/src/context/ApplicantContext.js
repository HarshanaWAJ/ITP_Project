import { createContext, useReducer } from "react";

export const ApplicantContext = createContext()

export const applicantReducer = (state, action) => {
    switch(action.type){
        case 'SET_APPLICANTS':
          return {
             applicant: action.payload
            }
        case 'CREATE_APPLICANTS':
            return{
                applicant:[action.payload, ...state.applicants]
            }    
        case 'DELETE_WORKOUT':
            return{
                applicant: state.applicant.filter((w) => w._id !== action.payload._id)
            } 
            case 'UPDATE_APPLICANT':
                return {
                    applicants: state.applicants.map((a) => a._id === action.payload._id ? action.payload : a)
                }   
            default:
             return state
    }
}

export const ApplicantContextProvider = ({children})=> {

const [state,dispatch ] = useReducer(applicantReducer, {
    applicant: null
})

    return(
        <ApplicantContext.Provider  value={{...state, dispatch}}> 
            { children }
        </ApplicantContext.Provider>
    )
}
