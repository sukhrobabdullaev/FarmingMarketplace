// import { RouterProvider } from "react-router-dom";
// import router from "./router";

// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;

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
import Product from "./pages/users/Product";

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
          path="/farmer"
          element={
            <RootLayout>
              <Farmer />
            </RootLayout>
          }
        />
        <Route
          path="/farmer/product-category/index"
          element={
            <RootLayout>
              <ProductCategory />
            </RootLayout>
          }
        />
        <Route
          path="/farmer/product"
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
