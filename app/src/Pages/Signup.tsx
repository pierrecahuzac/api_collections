import React, { useState } from "react";

import { Link } from "react-router-dom";
import Layout from "../Components/Layout";

const Signup = () => {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    username: "",
  });
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignup({
      ...signup,
      [name]: value,
    });
    console.log(signup);
  };

  const submit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://api.localhost/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signup),
      });
      console.log(response);
      
      // if (response.status !== 201) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }

      const data = await response.json();
      console.log(data);
      // if(data.message === "Utilisateur trouvé") {
      //   setIsConnected(true)
      // }
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  };

  return (
    <Layout>
      <Link to={"/signin"}>Se connecter</Link>
      <div className="w-full h-full">
        <h1>Inscription</h1>
        <form action="submit" className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Entrez votre email"
              type="text"
              value={signup.email}
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="password"
              value={signup.password}
              name="password"
              placeholder="Entrez votre mot de passe"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="password"
            >
              Password confirmation
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="password"
              value={signup.passwordConfirmation}
              name="passwordConfirmation"
              placeholder="Entrez à nouveau votre mot de passe"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="password"
            >
              Username
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={signup.username}
              name="username"
              placeholder="Nom d'utilisateur"
              onChange={handleInputChange}
            />
          </div>
          <button
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
            onClick={(e) => submit(e)}
          >
            Création
          </button>

        </form>
        Vous avez déjà un compte ?  <Link to={"/signin"}>Connexion</Link>
      </div>
    </Layout>
  );
};

export default Signup;
