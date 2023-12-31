import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import Main from "../pages/Main";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Farmer from "../pages/Farmer";
import Farming from "../pages/users/Farming";
import Chemicals from "../pages/users/Chemicals";
import ProductCategory from "../pages/users/ProductCategory";
import Dashboard from "../components/Dashboard";
import SelDash from "../components/sellers/Dash";
import Product from "../components/sellers/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <Home />
      </RootLayout>
    ),
  },
  {
    path: "/signIn",
    element: (
      <RootLayout>
        <SignIn />
      </RootLayout>
    ),
  },
  {
    path: "/signUp",
    element: (
      <RootLayout>
        <SignUp />
      </RootLayout>
    ),
  },
  {
    path: "/seller/dashboard",
    element: (
      <RootLayout>
        <Dashboard />
      </RootLayout>
    ),
  },
  {
    path: "/seller/product",
    element: (
      <RootLayout>
        <Farmer />
      </RootLayout>
    ),
  },
  {
    path: "/seller/product/list",
    element: (
      <RootLayout>
        <Product />
      </RootLayout>
    ),
  },
  {
    path: "/seller/product-category/list",
    element: (
      <RootLayout>
        <ProductCategory />
      </RootLayout>
    ),
  },
  {
    path: "/farming",
    element: (
      <RootLayout>
        <Farming />
      </RootLayout>
    ),
  },
  {
    path: "/chemicals",
    element: (
      <RootLayout>
        <Chemicals />
      </RootLayout>
    ),
  },
  {
    path: "/farmer/dashboard",
    element: (
      <RootLayout>
        <SelDash />
      </RootLayout>
    ),
  },
]);

export default router;
