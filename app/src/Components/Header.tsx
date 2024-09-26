import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="h-16 justify-between w-full text-center items-center align-middle flex">
      <div className="ml-6 mr-4 flex w-full justify-between items-center ">
        <div>
          <figure className="flex">
            <img
              src="./fdgdfg"
              alt=""
              className="w-14 h-10"
              onClick={() => navigate("/")}
            />
            <span className=" ml-1 items-center flex">Collections</span>
          </figure>
        </div>
        <div className="items-center flex">
          {localStorage.getItem("isConnected") !== "connected" && (
            <>
              <a href="">
                <Link to={"/signin"}>CONNEXION</Link>
              </a>
              <a href="" className="ml-2">
                <Link to={"/signup"}>INSCRIPTION</Link>
              </a>
            </>
          )}
          {localStorage.getItem("isConnected") === "connected" && (
            <>
              <a href="">
                <Link to={`/user/${localStorage.getItem("userId")}/profile`}>
                  COMPTE
                </Link>
              </a>
              <a href="" className="ml-2">
                <Link
                  to={`/user/${localStorage.getItem("userId")}/collections`}
                >
                  COLLECTIONS
                </Link>
              </a>
              <a
                href=""
                className="ml-2"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                DECONNEXION
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
