import { Link } from "react-router-dom";
import Layout from "../Components/Layout";

const CreateCollection = () => {
  return (
    <Layout>
      <div className="w-full text-slate-900 h-full items-center flex flex-col">
        <span className="text-slate-950">
          <Link
            className="font-bold"
            to={`/user/${localStorage.getItem("userId")}/collections`}
          >
            Retour aux collections
          </Link>
        </span>
        <form action="" className="flex flex-col justify-center items-center w-11/12">
          <div>
            <label htmlFor="">Nom de la collection</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="">Type de collection</label>
            <select name="" id="">
              <option value="">Livres</option>
              <option value="">CD</option>
              <option value="">Timbres</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Status de la collection</label>
            <select name="" id="">
              <option value="">Publique</option>
              <option value="">Privée</option>
            </select>
          </div>
        </form>
        <button type="submit">Submit</button>
      </div>
    </Layout>
  );
};

export default CreateCollection;
