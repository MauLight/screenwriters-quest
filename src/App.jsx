import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import appContext from "./context/appContext";
import Layout from "./views/layout";
import Protected from "./hoc/Protected";

//Main pages
import Home from "./views/home";
import Account from "./views/Account";

//Dramatic Basis of Story
import Dramatic1 from "./views/dramatic1";
import Dramatic2 from "./views/dramatic2";
import Dramatic3 from "./views/dramatic3";
import Dramatic4 from "./views/dramatic4";
import Dramatic5 from "./views/dramatic5";
import Dramatic6 from "./views/dramatic6";
import Dramatic7 from "./views/dramatic7";


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route
              path="/account"
              element={
                <Protected>
                  <Account />
                </Protected>
              }
            />
            <Route
              path="/dramatic1"
              element={
                <Protected>
                  <Dramatic1 />
                </Protected>
              }
            />
            <Route
              path="/dramatic2"
              element={
                <Protected>
                  <Dramatic2 />
                </Protected>
              }
            />
            <Route
              path="/dramatic3"
              element={
                <Protected>
                  <Dramatic3 />
                </Protected>
              }
            />
            <Route
              path="/dramatic4"
              element={
                <Protected>
                  <Dramatic4 />
                </Protected>
              }
            />
            <Route
              path="/dramatic5"
              element={
                <Protected>
                  <Dramatic5 />
                </Protected>
              }
            />
            <Route
              path="/dramatic6"
              element={
                <Protected>
                  <Dramatic6 />
                </Protected>
              }
            />
            <Route
              path="/dramatic7"
              element={
                <Protected>
                  <Dramatic7 />
                </Protected>
              }
            />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
};

export default appContext(App);