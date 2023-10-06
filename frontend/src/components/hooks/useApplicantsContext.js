import { ApplicantContext } from "../context/ApplicantContext";
import { useContext } from "react";

export const useApplicantContext = () => {
    const context = useContext(ApplicantContext);

    if (!context) {
        throw new Error('useApplicantContext must be used inside an ApplicantContextProvider');
    }

    return context;
};
