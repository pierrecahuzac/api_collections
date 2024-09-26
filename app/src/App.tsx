import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";

import CreateCollection from "./Pages/CreateCollection";
import CreateItem from "./Pages/CreateItem";
import Collections from "./Pages/Collections";

import "../src/style.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:userId/profile" element={<Profile />} />
        <Route
          path="/user/:userId/create-collection"
          element={<CreateCollection />}
        />
        <Route path="/user/:userId/collections" element={<Collections />} />
        <Route
          path="/user/:userId/add-new-collection"
          element={<CreateCollection />}
        />
        <Route path="/create-item" element={<CreateItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
