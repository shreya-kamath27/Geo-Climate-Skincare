import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from '../Component/Auth'

export default function Login()
{
    const navigate = useNavigate();
    const [email ,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const hardcodedEmail = ' shreyaKamath@gmail.com';
    const hardpass = '123'

    const handleLogin=(e)=>
    {
        e.preventDefault();
        if(email===hardcodedEmail && password == hardpass)
        {
            navigate("/home");
        }
        else{
            alert(" Invalid credentials")
        }
    };

    return (
    <Auth
      title="Welcome Back"
      buttonText="Log In"
      onSubmit={handleLogin}
      footerText="Don't have an account?"
      footerLink="/signup"
      footerLinkText="Sign up"
      fields={[
        { name: "email", type: "email", placeholder: "Email", value: email, onChange: setEmail },
        { name: "password", type: "password", placeholder: "Password", value: password, onChange: setPassword }]}
    />
  );
}