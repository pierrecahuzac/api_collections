import Layout from "../Components/Layout";

const Profile = () => {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  return (
    <Layout>
      <div>Profile</div>
      <h1>Bonjour, {username}</h1>
      <p>Email : {email}</p>
    </Layout>
  );
};

export default Profile;
