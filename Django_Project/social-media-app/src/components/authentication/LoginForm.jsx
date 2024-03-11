import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserActions } from "../../hooks/user.actions";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const { login } = useUserActions();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginForm = event.currentTarget;
    if (loginForm.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    const data = {
      username: form.username,
      password: form.password,
    };

    login(data).catch((error) => {
      console.error(error);
    });
    try {
        const res = await axios.post("http://localhost:8000/api/auth/login/", form);
        localStorage.setItem("auth", JSON.stringify({
            access: res.data.access,
            refresh: res.data.refresh,
            user: res.data.user,
        }));

        navigate("/");
    }
    catch (error)
    {
        setError(error.response.data);
    }
  };




  return (
    <Form
      id="registration-form"
      className="border p-4 rounded"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
          type="text"
          placeholder="Enter username"
        />
        <Form.Control.Feedback type="invalid">
          This file is required.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={form.password}
          minLength="8"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
          required
          type="password"
          placeholder="Password"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid password.
        </Form.Control.Feedback>
      </Form.Group>
      <div className="text-content text-danger">{error && <p>{error}</p>}</div>

    <Link to={'/'}>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
        </Button>
    </Link>
    </Form>
  );
};

export default LoginForm;
