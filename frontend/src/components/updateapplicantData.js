import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateApplicant } from "./api";

const UpdateApplicantPage = () => {
  const { id } = useParams();
  const [applicant, setApplicant] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplicant = async () => {
      try {
        const response = await fetch(`/api/applicant/${id}`);
        const data = await response.json();
        setApplicant(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchApplicant();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateApplicant(id, applicant);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      // Handle success
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <h1>Update Applicant</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={applicant.name || ""}
            onChange={(e) =>
              setApplicant({ ...applicant, name: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={applicant.age || ""}
            onChange={(e) =>
              setApplicant({ ...applicant, age: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={applicant.gender || ""}
            onChange={(e) =>
              setApplicant({ ...applicant, gender: e.target.value })
            }
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={applicant.phone || ""}
            onChange={(e) =>
              setApplicant({ ...applicant, phone: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={applicant.birthday || ""}
            onChange={(e) =>
              setApplicant({ ...applicant, birthday: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={applicant.address || ""}
            onChange={(e) =>
              setApplicant({ ...applicant, address: e.target.value })
            }
          ></textarea>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={applicant.email || ""}
            onChange={(e) =>
              setApplicant({ ...applicant, email: e.target.value })
            }
          />
        </div>
        <button type="submit">Update Applicant</button>
      </form>
      <button onClick={handleViewForm}>View Form</button>
      {error && <p>{error}</p>}
    </div>
  );
}
export default UpdateApplicantPage

