import React, { ButtonHTMLAttributes, useState } from "react";

const Auth = () => {
  const [userValue, setUserValue] = useState({
    email: "",
    password: "",
  });
  const [connected, setIsConnected] = useState<boolean>(false)
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
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(userValue)
      });
      console.log(response);
      
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(data);
      if(data.message === "Utilisateur trouvé") {
        setIsConnected(true)
      }
      
    } catch (error : any) {
        console.log(error);
        throw new Error(error)
        
    }
  };
  return (
    <div className="w-full h-full">
      <h1>Auth</h1>
      {!connected ? <form action="submit">
        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Entrez votre email"
            type="text"
            value={userValue.email}
            name="email"
            onChange={handleInputChange}
          />
          Email
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={userValue.password}
            name="password"
            placeholder="Entrez votre mot de passe"
            onChange={handleInputChange}
          />
          Password
        </div>
        <button onClick={(e) => submit(e)}>Connexion</button>
      </form> : 
      <div> User connected</div>}
    </div>
  );
};

export default Auth;
