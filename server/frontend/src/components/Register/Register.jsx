
import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/djangoapp/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error("Registration failed");
      alert("Registration request completed");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="userName"
          placeholder="Username" value={form.userName}
          onChange={handleChange} required />

        <input className="form-control mb-3" name="firstName"
          placeholder="First Name" value={form.firstName}
          onChange={handleChange} required />

        <input className="form-control mb-3" name="lastName"
          placeholder="Last Name" value={form.lastName}
          onChange={handleChange} required />

        <input className="form-control mb-3" name="email"
          type="email" placeholder="Email" value={form.email}
          onChange={handleChange} required />

        <input className="form-control mb-3" name="password"
          type="password" placeholder="Password"
          value={form.password} onChange={handleChange} required />

        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
