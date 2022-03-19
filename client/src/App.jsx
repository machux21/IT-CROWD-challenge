import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Admin from "./components/Admin";
import CreateBrand from "./components/adminForms/CreateBrand";
import UpdateBrand from "./components/adminForms/UpdateBrand";
import CreateProduct from "./components/adminForms/CreateProduct";
import DeleteProduct from "./components/adminForms/DeleteProduct";
import UpdateProduct from "./components/adminForms/UpdateProduct";
import Login from "./components/Login";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin/" element={<Admin />}>
          <Route path="createbrand" element={<CreateBrand />} />
          <Route path="updatebrand" element={<UpdateBrand />} />
          <Route path="createproduct" element={<CreateProduct />} />
          <Route path="deleteproduct" element={<DeleteProduct />} />
          <Route path="updateproduct" element={<UpdateProduct />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
