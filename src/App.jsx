import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import Layout from "./views/layout";
import appContext from "./context/appContext";
import Dramatic from "./views/dramatic";
import Home from "./views/home";
import Dramatic2 from "./views/dramatic2";
import Dramatic3 from "./views/dramatic3";
import Dramatic4 from "./views/dramatic4";
import Dramatic5 from "./views/dramatic5";
import Dramatic6 from "./views/dramatic6";
import Dramatic7 from "./views/dramatic7";
import Account from "./views/Account";


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/dramatic" element={<Dramatic />} />
            <Route path="/dramatic2" element={<Dramatic2 />} />
            <Route path="/dramatic3" element={<Dramatic3 />} />
            <Route path="/dramatic4" element={<Dramatic4 />} />
            <Route path="/dramatic5" element={<Dramatic5 />} />
            <Route path="/dramatic6" element={<Dramatic6 />} />
            <Route path="/dramatic7" element={<Dramatic7 />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
};

export default appContext(App);