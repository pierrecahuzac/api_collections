import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="h-16 justify-center text-center align-middle flex">
      <figure>
        <img
          src="./fdgdfg"
          alt=""
          className="w-8 h-8"
          onClick={() => navigate("/")}
        />
      </figure>
      Header
    </div>
  );
};

export default Header;
