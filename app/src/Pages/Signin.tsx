import React, { ButtonHTMLAttributes, useState } from "react";
import Layout from "./Layout";
import { redirect } from "react-router-dom";

const Signin = () => {
  const [userValue, setUserValue] = useState({
    email: "",
    password: "",
  });
  const [connected, setIsConnected] = useState<boolean>(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserValue({
      ...userValue,
      [name]: value,
    });
    console.log(userValue);
  };

  const submit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userValue),
      });
      console.log(response);

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      if (data.message === "Utilisateur trouvé") {
        setIsConnected(true);
      
        return redirect(`/`)
        
      }
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  };
  return (
    <Layout>
      <div className="w-full h-full flex flex-col justify-center align-middle text-center">
        <h1>Connexion</h1>
        {!connected ? (
          <form action="submit" className="flex-col">
            <div>
              <label htmlFor="email">Email</label>
              <input
                placeholder="Entrez votre email"
                type="text"
                value={userValue.email}
                name="email"
                onChange={handleInputChange}
              />
            
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={userValue.password}
                name="password"
                placeholder="Mot de passe"
                onChange={handleInputChange}
              />
           
            </div>
            <button onClick={(e) => submit(e)}>Connexion</button>
          </form>
        ) : (
          <div> User connected</div>
        )}
      </div>
    </Layout>
  );
};

export default Signin;
