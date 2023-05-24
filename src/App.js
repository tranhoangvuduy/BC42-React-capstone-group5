import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from "./modules/Home/Home";
import Mainlayout from "./layouts/Mainlayout/Mainlayout";
// import MovieDetails from "./modules/MovieDetails/MovieDetails";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
// import Signin from "./modules/Auth/Signin/Signin";
// import Signup from "./modules/Auth/Signup/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";
// import Booking from "./modules/Booking/Booking";

const Home = lazy(() => import("./modules/Home/Home"))
const MovieDetails = lazy(() => import("./modules/MovieDetails/MovieDetails"))
const Booking = lazy(() => import("./modules/Booking/Booking"))
const Signin = lazy(() => import("./modules/Auth/Signin/Signin"))
const Signup = lazy(() => import("./modules/Auth/Signup/Signup"))

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />
            } />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/booking/:bookingId" element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>} />
          </Route>

          <Route path="/" element={<AuthLayout />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>

  );
}

export default App;
