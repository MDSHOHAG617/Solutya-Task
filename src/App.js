import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import app from "./firebase.init";
import { getAuth } from "firebase/auth";
import Login from "./Components/Login";
import RequireAuth from "./Components/RequireAuth";
import AddProducts from "./Components/AddProducts";
import Users from "./Components/Users";
import ManageProducts from "./Components/ManageProducts";
import UpdateProduct from "./Components/UpdateProduct";

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        {/* <Route path="/products" element={<Products></Products>}></Route> */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<Users></Users>}></Route>
          <Route
            path="/dashboard/manageProducts"
            element={<ManageProducts></ManageProducts>}
          ></Route>
        </Route>
        <Route
          path="product/add"
          element={
            <RequireAuth>
              <AddProducts></AddProducts>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/update/:id"
          element={<UpdateProduct></UpdateProduct>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
