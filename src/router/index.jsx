import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import Chemicals from "../pages/users/Chemicals";
import Farming from "../pages/users/Farming";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
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
    path: "/chemicals",
    element: (
      <RootLayout>
        <Chemicals />
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
    path: "/signUp",
    element: (
      <RootLayout>
        <SignUp />
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
]);

export default router;
