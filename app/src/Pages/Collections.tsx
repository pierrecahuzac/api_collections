import { Link } from "react-router-dom";
import Layout from "../Components/Layout";
import { useEffect } from "react";

const Collections = () => {
  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${userId}/getAllUserCollections`);
        const data = await response.json();
        console.log(data);
        localStorage.setItem("collections", JSON.stringify(data.collections));
      } catch (error) {
        console.log(error);
      }
    };
     fetchData()
  });

  return (
    <Layout>
      <div>
        <h1>Bonjour, {username}</h1>
        <p>vous avez X collections</p>
        <p>vous avez X objets dans toutes vos collections</p>
        <select name="" id="">
          <option value="">Ma collection 1</option>
          <option value="">Ma collection 2</option>
          <option value="">Ma collection 3</option>
          <option value="">Ma collection 4</option>
        </select>
        <div>
          <Link to={`/user/${userId}/add-new-collection`}>
            Nouvelle collection
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Collections;
