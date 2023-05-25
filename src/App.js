import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminProtectedRoute from "./Admin/Routes/AdminProtectRoute";
import { Movies, Users, MovieEdit, AddMovie, AddUser, UserEdit, AdminSignin,  } from "./Admin/Pages/";
import { AdminMainLayout, AdminSigninLayout } from "./Admin/Layouts/index";

import ReactDOM from 'react-dom';
import MainLayout from "./layouts/MainLayout/MainLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import ProtectedRoute from "./modules/routes/ProtectedRoute";
// import AdminLayout from "./layouts/AdminLayout/AdminLayout";
// import AdminRoute from "./routes/AdminRoute";

// import Home from "./modules/Home/Home";
// import MovieDetails from "./modules/MovieDetails/MovieDetails";
// import Booking from "./modules/Booking/Booking";
// import Signin from "./modules/Auth/Signin/Signin";
// import Signup from "./modules/Auth/Signup/Signup";

const Home = lazy(() => import("./modules/Home/Home"));
const MovieDetails = lazy(() => import("./modules/MovieDetails/MovieDetails"));
const Booking = lazy(() => import("./modules/Booking/Booking"));
const Signin = lazy(() => import("./modules/Auth/Signin/Signin"));
const Signup = lazy(() => import("./modules/Auth/Signup/Signup"));
// const MovieManagement = lazy(() => import("./modules/MovieManagement/MovieManagement"));



function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/booking/:bookingId" element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>
            } />
          </Route>

          <Route path="/" element={<AuthLayout />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />

          </Route>

          <Route path="/" element={<AdminSigninLayout />}>
            <Route path="/admin-signin" element={<AdminSignin />} />
          </Route>


          <Route path="/admin" element={<AdminProtectedRoute> <AdminMainLayout /> </AdminProtectedRoute>} >
            <Route path="/admin/movies" element={<Movies />} />
            <Route path="/admin/movies/add-movie" element={<AddMovie />} />
            <Route path="/admin/movies/edit/:movieId" element={<MovieEdit />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/users/add-user" element={<AddUser />} />
            <Route path="/admin/users/edit/:userId" element={<UserEdit />} />
          </Route>

          {/* <Route path="/admin" element={
            <AdminRoute>
              <AdminLayout/>
            </AdminRoute>
          }>
            <Route path="movies" element={<MovieManagement />}/>
            <Route path="users" element={<UserManagement />}/>
            <Route path="tickets" element={<TicketManagement />}/>
          </Route> */}



        </Routes>
      </BrowserRouter>
    </Suspense>

  );
}

export default App;
