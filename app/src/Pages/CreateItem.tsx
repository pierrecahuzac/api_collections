import Layout from "../Components/Layout";

const CreateItem = () => {
  return (
    <Layout>
      <div className="w-full h-full">
        <form action="" className="flex flex-col w-11/12">
          <div>
            <label htmlFor="">Nom de l'objet</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="">Type de l'objet</label>
            <select name="" id="">
              <option value="">Livres</option>
              <option value="">CD</option>
              <option value="">Timbres</option>
            </select>
          </div>
          <div>
          <label htmlFor="">Status de l'objet</label>
            <select name="" id="">
              <option value="">Public</option>
              <option value="">Privé</option>
            </select>
          </div>
        </form>
        <button type="submit">Submit</button>
      </div>
    </Layout>
  );
};

export default CreateItem;