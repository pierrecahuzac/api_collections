import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Layout from "./Layout";
const Home = () => {
  return (
    <Layout>
      <div className="bg-red-700">
        <h1>HOME</h1>
        <div>
          {" "}
          <Link to={"/signin"}>Se connecter</Link>
          <Link to={"/signup"}>Inscription</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
