import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";

function FormInput({ label, type, id, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function UpdateNews() {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [publishedBy, setPublishedBy] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/news/get/${id}`)
      .then((response) => {
        const news = response.data;
        if (news) {
          setTopic(news.topic || "");
          setDescription(news.description || "");
          setPublishedDate(news.publishedDate || "");
          setPublishedBy(news.publishedBy || "");
        } else {
          console.log("News not found");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  async function updateData(e) {
    e.preventDefault();
    const updateNews = {
      topic,
      description,
      publishedDate,
      publishedBy,
    };
    try {
      await axios.put(`http://localhost:8080/news/update/${id}`, updateNews);
      alert("News updated successfully!");
    } catch (error) {
      console.log(error);
      alert("Error with updating news.");
    }
  }

  return (
    <div>
      <Sidebar />
      <div>
        <h3>
          <center>Update News</center>
        </h3>
        <div>
          <div className="container" style={{ background: "#F1CF3D" }}>
            <form onSubmit={updateData}>
              <FormInput
                label="Topic"
                type="text"
                id="topic"
                className="form-control"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
              <FormInput
                label="Description"
                type="textarea"
                id="description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <FormInput
                label="Published Date"
                type="date"
                id="publishedDate"
                className="form-control"
                value={publishedDate}
                onChange={(e) => setPublishedDate(e.target.value)}
              />
              <FormInput
                label="Published By"
                type="text"
                id="publishedBy"
                className="form-control"
                value={publishedBy}
                onChange={(e) => setPublishedBy(e.target.value)}
              />
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateNews;
