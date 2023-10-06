import React, { useEffect, useState } from "react";
import "../css/Book.css";
import axios from "axios";
import Book from "./Book";
import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import jsPDF from "jspdf";
import AddBook from "../AddBook";

const URL = "http://localhost:8080/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

    //serching bar

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const handleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };


   
     // Generating a PDF


  const handleGeneratePDF = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();
  
    // Add content to the PDF
    let y = 20;
    

      books.forEach((book, index) => {
        doc.setFontSize(15);  
        // Highlight the name field with yellow color
        doc.setFillColor(255, 255, 8);
        doc.rect(10, y + 7, 50, 8, "F");
        doc.setTextColor(0);
        doc.text(`name: ${book.name}`, 10, y + 10);
        doc.setFillColor(255, 255, 255); // reset fill color to white
        doc.text(`author: ${book.author}`, 10, y + 20);
        doc.text(`description: ${book.description}`, 10, y + 30);
        doc.text(`image: ${book.image}`, 10, y + 40);
      y += 50; // increase y position to create gap between books

     
    });
  
    doc.setTextColor(3, 4, 220);
    doc.setFontSize(20);
    doc.text("Book List", 10, 15);
    // Add total book count
    doc.text(`Total Books: ${books.length}`, 10, y + 20);
  
    // Save the PDF as a file
    doc.save("book.pdf");
  };
  
  
  const filteredBooks =
    books &&
    books.filter(
      (book) =>
        book.name.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );


    //sorting books

  const sortedBooks =
    sortOrder === "asc"
      ? filteredBooks?.sort((a, b) => a.name.localeCompare(b.name))
      : filteredBooks?.sort((a, b) => b.name.localeCompare(a.name));

  return (
    <div>
      <NavLink to="/Addbook">
        <Button
          style={{
            borderRadius: 10,
            backgroundColor: "#f1cf3d",
            padding: "8px 12px",
            fontSize: "14px",
            color: "#7c0c10",
            boxShadow: 12,
            marginLeft: "60px",
            marginTop: "18px",
          }}
          variant="contained"
        >
          Add Books
        </Button>
      </NavLink>
      <NavLink>
        <Button
          style={{
            borderRadius: 10,
            backgroundColor: "#f1cf3d",
            padding: "8px 12px",
            fontSize: "14px",
            color: "#7c0c10",
            boxShadow: 12,
            marginLeft: "20px",
            marginTop: "18px",
          }}
          variant="contained"
          onClick={handleGeneratePDF}
        >
          Get Report
        </Button>
      </NavLink>
      <div style={{ display:"flex", justifyContent: "center" }}>
        <TextField
          label="Search Books"
          variant="outlined"
          margin="none"
          value={query}
          onChange={handleSearch}
          sx={{ width: "30%" }}
        />
        <Button
          style={{
            borderRadius: 10,
            backgroundColor: "#f1cf3d",
            padding: "8px 12px",
            fontSize: "14px",
            color: "#7c0c10",
            boxShadow: 12,
            marginLeft: "20px",
            marginTop: "18px",
          }}
          onClick={handleSortOrder}
          variant="contained"
        >
          {sortOrder === "asc" ? "Sort by Name (A-Z)" : "Sort by Name (Z-A)"}
        </Button>
      </div>
      <ul id="book-list" style={{ marginBottom: "80px" }}>
        {sortedBooks &&
          sortedBooks.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
