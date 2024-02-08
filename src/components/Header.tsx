import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <section className="w-full bg-primaryBackground">
      <nav className="w-[90%] flex justify-between items-center m-auto p-4">
        <div className="flex gap-6">
          <div className="text-2xl font-headingFont">InsightfulPages</div>
          <div className="bg-white w-[350px] rounded-md pe-3">
            <div className="flex gap-2 ps-2 justify-center h-8 items-center">
              <IoSearch />
              <input className="outline-none w-[100%]" />
            </div>
          </div>
        </div>
        <div className="space-x-4 font-bodyFont">
          <Link to="/">Home</Link>
          <Link to="/">Blogs</Link>
          <Link to="/">Categories</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact Us</Link>
          <button className="bg-buttonBg w-20 h-10 text-white text-center rounded-md">
            Login
          </button>
        </div>
      </nav>
    </section>
  );
}
