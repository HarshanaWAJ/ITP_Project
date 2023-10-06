import { useState } from "react";
import React from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

function AddNews() {
  const [topic, setTopic] = useState("");
  const [Description, setDescription] = useState("");
  const [pubishedDate, setPublishedDate] = useState("");
  const [publishedBy, setPublishedBy] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newNews = {
      topic,
      Description,
      pubishedDate,
      publishedBy,
    };
    axios
      .post("http://localhost:8080/news/add", newNews)
      .then(() => {
        alert("News Added!");
        window.location.reload(false);
      })
      .catch((err) => {
        alert("Error: " + err);
      });
  }

  return (
    <div>
      <Sidebar />
      <div className="container" style={{ background: "#F1CF3D" }}>
        <br />
        <h3>
          <center>Add News</center>
        </h3>
        <form onSubmit={sendData}>
          <div class="form-group">
            <label for="exampleInputEmail1">Topic</label>
            <input
              type="text"
              class="form-control"
              id="topic"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setTopic(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Description</label>
            <input
              type="textbox"
              class="form-control"
              id="description"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Published Date</label>
            <input
              type="date"
              class="form-control"
              id="publishedDate"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setPublishedDate(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Published By</label>
            <input
              type="textbox"
              class="form-control"
              id="publishedBy"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setPublishedBy(e.target.value);
              }}
            />
          </div>

          <br />
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default AddNews;
