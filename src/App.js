import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./Layout/AuthLayout/AuthLayout";
import Signin from "./modules/Authentication/Signin/Signin";
import Signup from "./modules/Authentication/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<AuthLayout/>}>
          <Route path="/Signin" element={<Signin/>} />
          <Route path="/Signup" element={<Signup/>} />
        </Route>

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
