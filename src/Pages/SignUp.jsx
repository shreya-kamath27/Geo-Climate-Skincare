import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../Component/Auth";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <Auth
      title="Create an Account"
      buttonText="Sign Up"
      onSubmit={handleSignUp}
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Log in"
      fields={[
        { name: "name", type: "text", placeholder: "Full Name", value: name, onChange: setName },
        { name: "email", type: "email", placeholder: "Email", value: email, onChange: setEmail },
        { name: "password", type: "password", placeholder: "Password", value: password, onChange: setPassword }
      ]}
    />
  );
}
