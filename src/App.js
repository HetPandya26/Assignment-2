import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

const ApiDataDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="help" style={styles.container}>
      <h2 style={styles.title}>Data from API:</h2>
      <ul style={styles.list}>
        {data.map((item) => (
          <li key={item.id} style={styles.listItem}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiDataDisplay;

const styles = {
  container: {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    background: "#f9f9f9",
    color:"white",
    background:"black",

  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    alignContent : "center",
  },
  listItem: {
    fontSize: "18px",
    marginBottom: "5px",
  },
};
