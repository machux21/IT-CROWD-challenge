import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import CreateBrand from "./components/adminForms/CreateBrand";
import UpdateBrand from "./components/adminForms/UpdateBrand";
import CreateProduct from "./components/adminForms/CreateProduct";
import DeleteProduct from "./components/adminForms/DeleteProduct";
import UpdateProduct from "./components/adminForms/UpdateProduct";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/admin/" element={<Admin />}>
        <Route path="createbrand" element={<CreateBrand />} />
        <Route path="updatebrand" element={<UpdateBrand />} />
        <Route path="createproduct" element={<CreateProduct />} />
        <Route path="deleteproduct" element={<DeleteProduct/>} />
        <Route path="updateproduct" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
