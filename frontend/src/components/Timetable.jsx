import React, { useState } from "react";

const TimetableGenerator = () => {
  const [numDays, setNumDays] = useState(5);
  const [numPeriods, setNumPeriods] = useState(8);
  const [numSubjects, setNumSubjects] = useState(9);
  const [subjects, setSubjects] = useState(
    [
      "English",
      "Maths",
      "Science",
      "Social Studies",
      "Arts",
      "Physical Education",
      "Foreign Language",
      "Computer Science",
      "Home Economics",
    ].slice(0, numSubjects)
  );

  const generateTimetable = () => {
    const timetableHTML =
      "<table><thead><tr><th>Time</th>" +
      Array.from({ length: numDays }, (_, i) => `<th>Day ${i + 1}</th>`).join(
        ""
      ) +
      "</tr></thead><tbody>" +
      Array.from({ length: numPeriods }, (_, i) => {
        const period = i + 1;
        const row =
          "<tr><td>Period " +
          period +
          "</td>" +
          Array.from({ length: numDays }, (_, j) => {
            const subjectIndex = Math.floor(Math.random() * subjects.length);
            const subject = subjects[subjectIndex];
            return "<td>" + subject + "</td>";
          }).join("") +
          "</tr>";
        return row;
      }).join("") +
      "</tbody></table>";

    return { __html: timetableHTML };
  };

  const exportTimetable = () => {
    // Define the table headings for each grade
    const tableHeadings = [
      "Period",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ];

    // Loop through all tables and concatenate their data into a single CSV string
    let csvData = "";
    const tables = document.getElementsByTagName("table");
    for (let i = 0; i < tables.length; i++) {
      const table = tables[i];
      const numRows = table.rows.length;
      const numCols = table.rows[0].cells.length;

      // Add a blank line between tables
      if (i > 0) {
        csvData += "\n\n";
      }

      // Add the grade heading
      csvData += `"Grade ${i + 6}"\n`;

      // Add the table headings
      csvData +=
        tableHeadings.map((heading) => `"${heading}"`).join(",") + "\n";

      // Add the table data
      for (let j = 0; j < numRows; j++) {
        const cells = table.rows[j].cells;
        const row = [];
        for (let k = 0; k < numCols; k++) {
          const cellText = cells[k].textContent.trim();
          if (cellText.length === 0) {
            // If the cell is empty, insert a random subject
            const subjectIndex = Math.floor(Math.random() * subjects.length);
            const subject = subjects[subjectIndex];
            row.push(`"${subject}"`);
          } else {
            row.push(`"${cellText}"`);
          }
        }
        csvData += row.join(",") + "\n";
      }
    }

    // Download the file
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "timetable.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div>
      <div className="container">
        <h1>Timetable Generator</h1>

        <label htmlFor="numDays">Number of Days:</label>
        <input
          type="number"
          className="form-control"
          id="numDays"
          min="1"
          max="7"
          value={numDays}
          onChange={(e) => setNumDays(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor="numPeriods">Number of Periods:</label>
        <input
          type="number"
          className="form-control"
          id="numPeriods"
          min="1"
          value={numPeriods}
          onChange={(e) => setNumPeriods(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor="numSubjects">Number of Subjects:</label>
        <input
          type="number"
          className="form-control"
          id="numSubjects"
          min="1"
          value={numSubjects}
          onChange={(e) => {
            const newNumSubjects = e.target.value;
            setNumSubjects(newNumSubjects);
            if (newNumSubjects > subjects.length) {
              const newSubjects = [...subjects];
              while (newSubjects.length < newNumSubjects) {
                newSubjects.push("");
              }
              setSubjects(newSubjects);
            } else {
              setSubjects(subjects.slice(0, newNumSubjects));
            }
          }}
        />

        <br />
        <br />

        <div id="subjectInputs">
          <h2>Subjects</h2>
          {subjects.map((subject, i) => (
            <div key={i}>
              <input
                type="text"
                className="form-control"
                value={subject}
                onChange={(e) => {
                  const newSubjects = [...subjects];
                  newSubjects[i] = e.target.value;
                  setSubjects(newSubjects);
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h3>Grade 6</h3>
      </div>
      <div dangerouslySetInnerHTML={generateTimetable()} />
      <br />
      <div>
        <h3>Grade 7</h3>
      </div>
      <div dangerouslySetInnerHTML={generateTimetable()} />
      <br />
      <div>
        <h3>Grade 8</h3>
      </div>
      <div dangerouslySetInnerHTML={generateTimetable()} />
      <br />
      <div>
        <h3>Grade 9</h3>
      </div>
      <div dangerouslySetInnerHTML={generateTimetable()} />
      <br />
      <br />
      <div>
        <input
          class="btn btn-primary"
          type="button"
          id="export"
          value="EXPORT"
          onClick={() => exportTimetable()}
        />
      </div>
    </div>
  );
};

export default TimetableGenerator;
