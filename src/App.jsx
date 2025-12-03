import React, { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from '/components/NavBar.jsx'
import LoginForm from '/components/LoginForm.jsx'
import Footer from '/components/Footer.jsx'
// import './App.css'

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data.student || []);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading…</div>;

  return (
    <>
      <NavBar />
      <LoginForm />
      <Footer/>

    <div style={{ padding: 20 }}>
      <h1>Students</h1>
      <ul>
        {students.map((s, i) => (
          <li key={i}>
            {s.name} — {s.rollno}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App;
