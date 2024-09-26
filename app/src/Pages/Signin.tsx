import React, { useState } from "react";
import Layout from "../Components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const [userValue, setUserValue] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState();
  const navigate = useNavigate();
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

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      if (data.message !== "Utilisateur trouvé") {
       return  toast.error(data.message, { autoClose: 2000, position: "bottom-right" });  
      }
      toast.success(data.message, { autoClose: 2000, position: "top-left" });
      setIsConnected(true);
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("isConnected", "connected");
      localStorage.setItem("accessToken", data.accessToken);
      setUser(data.user);
      navigate(`/user/${data.user.id}/collections`);
      
    } catch (error: any) {
      toast.error(error.message, { autoClose: 2000, position: "bottom-right" });
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
            Vous n'avez pas de compte ? <Link to={"/signup"}>Inscription</Link>
          </form>
        ) : (
          <div>User connected</div>
        )}
      </div>
    </Layout>
  );
};

export default Signin;
