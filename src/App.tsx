import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import NewBlog from "./pages/NewBlog";
import Register from "./pages/Register";
import UserInterest from "./pages/UserInterest";
import Feed from "./pages/Feed";
import { Toaster } from "sonner";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <>
      <Header />
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/blog/add-blog" element={<NewBlog />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/welcome" element={<UserInterest />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/feed/:id" element={<Blog />} />
      </Routes>
    </>
  );
}
