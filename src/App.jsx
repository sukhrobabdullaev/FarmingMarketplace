import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Farmer from "./pages/Farmer";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Chemicals from "./pages/users/Chemicals";
import Farming from "./pages/users/Farming";
import ProductCategory from "./pages/users/ProductCategory";
import ProductCategoryCreate from "./pages/users/ProductCategoryCreate";
import Dashboard from "./components/farmers/Dashboard";
import SelDash from "./components/sellers/Dash";
import Product from "./components/sellers/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout>
              <Home />
            </RootLayout>
          }
        />
        <Route
          path="/chemicals"
          element={
            <RootLayout>
              <Chemicals />
            </RootLayout>
          }
        />
        <Route
          path="/farming"
          element={
            <RootLayout>
              <Farming />
            </RootLayout>
          }
        />
        <Route
          path="/seller/dashboard"
          element={
            <RootLayout>
              <Dashboard />
            </RootLayout>
          }
        />
        <Route
          path="/seller/product"
          element={
            <RootLayout>
              <Farmer />
            </RootLayout>
          }
        />
        <Route
          path="/seller/product-category/list"
          element={
            <RootLayout>
              <ProductCategory />
            </RootLayout>
          }
        />
        <Route
          path="/seller/product/list"
          element={
            <RootLayout>
              <Product />
            </RootLayout>
          }
        />
        <Route
          path="/signUp"
          element={
            <RootLayout>
              <SignUp />
            </RootLayout>
          }
        />
        <Route
          path="/signIn"
          element={
            <RootLayout>
              <SignIn />
            </RootLayout>
          }
        />
        <Route
          path="/farmer/dashboard"
          element={
            <RootLayout>
              <SelDash />
            </RootLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
