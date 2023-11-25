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
import ProductCategoryCreate from "../pages/users/ProductCategoryCreate";
import Dashboard from "../components/Dashboard";

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
    path: "/dashboard",
    element: (
      <RootLayout>
        <Dashboard />
      </RootLayout>
    ),
  },
  {
    path: "/farmer",
    element: (
      <RootLayout>
        <Farmer />
      </RootLayout>
    ),
  },
  {
    path: "/farmer/product-category/list",
    element: (
      <RootLayout>
        <ProductCategory />
      </RootLayout>
    ),
  },
  {
    path: "/farmer/product-category/create",
    element: (
      <RootLayout>
        <ProductCategoryCreate />
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
]);

export default router;
