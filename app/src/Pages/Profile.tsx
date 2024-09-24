import { Link } from "react-router-dom";
import Layout from "./Layout";

const Profile = () => {
  const userId = localStorage.getItem("userId");
  return (
    <Layout>
      <h1>Ma page </h1>
      <div>
        <Link to={`/user/${userId}/add-new-collection`}>
          Nouvelle collection
        </Link>
        <Link to={`/user/${userId}/collections`}>Afficher mes collections</Link>
      </div>
    </Layout>
  );
};

export default Profile;
