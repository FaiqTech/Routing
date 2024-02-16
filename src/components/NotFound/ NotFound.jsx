// NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Səhifə Tapılmadı</h1>
      <p style={styles.text}>
        Aradığınız sayfa bulunamadı. Lütfen doğru URL'yi kontrol edin veya{" "}
        <Link to="/">ana</Link>
        sayfaya dönün.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.2rem",
    textAlign: "center",
  },
};

export default NotFound;
