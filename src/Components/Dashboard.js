import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content   justify-center">
        <h2 className="text-5xl">Dashboard</h2>
        <Outlet></Outlet>
        <label
          for="my-drawer-2"
          class="btn btn-secondary text-white drawer-button lg:hidden"
        >
          {" "}
           Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link
              className="font-bold bg-primary text-white hover:bg-slate-500"
              to="/dashboard"
            >
              All users
            </Link>
          </li>
          <li>
            <Link
              className="font-bold bg-secondary mt-2 text-white hover:bg-slate-500"
              to="/dashboard/manageProducts"
            >
              Manage Products
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
