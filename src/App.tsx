import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Department from "./pages/Department";
import Stuff from "./pages/Stuff";
import Contact from "./pages/Contact";
//import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
//import TopPage from "./components/TopPage";
import Search from "./pages/Search";
import FormalForm from "./pages/FormalForm";
import DesktopLayout from "./layouts/DesktopLayout";
//import { useLocation } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/d" element={<DesktopLayout />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        // department route
        <Route path="/department" element={<Department />} />
        //stuff route
        <Route path="/Stuff" element={<Stuff />} />
        // search route
        <Route path="/search" element={<Search />} />
        // register route
        <Route element={<PrivateRoute/>}>
          <Route path="/register" element={<FormalForm />} />
        </Route>
        // contact route
        <Route path="/Contact" element={<Contact />} />
        // private profile route
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
