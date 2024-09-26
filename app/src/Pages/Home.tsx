import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Layout from "../Components/Layout";
const Home = () => {
  return (
    <Layout>
      <div className="bg-slate-300 h-full">
        <h1>Gérez toutes vos collections comme jamais auparavant</h1>
        <div>
          <Link to={"/signin"}>Se connecter</Link>
          <Link to={"/signup"}>Inscription</Link>
          
        </div>
      </div>
    </Layout>
  );
};

export default Home;