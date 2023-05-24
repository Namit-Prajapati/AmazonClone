import "./App.css";
import { Checkout } from "./Components/Checkout";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      console.log("The user is -- ", authuser);

      if (authuser) {
        dispatch({ type: "SET_USER", user: authuser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  },[]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>
      ),
    },
    {
      path: "/checkout",
      element: (
        <>
          <Header />
          <Checkout />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <Register />
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
