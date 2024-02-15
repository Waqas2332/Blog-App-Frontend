import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { Blog } from "./Feed";
import BlogDetail from "../components/BlogDetails";
import Spinner from "../components/Spinner";

export default function SingleBlog() {
  const params = useParams();
  const { id } = params;
  const token = useAppSelector((state) => state.auth.user);
  const [blog, setBlog] = useState<Blog>({
    author: "",
    category: "",
    content: "",
    createdAt: "",
    tags: ["nothing"],
    title: "",
    updatedAt: "",
    __v: 0,
    _id: "",
    likes: 0,
    comments: ["nothing"],
  });
  const [isLoading, setIsLoading] = useState(false);

  async function fetchBlog() {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/blogs/fetch-blogs/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setBlog(response.data.blog);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function addComment(comment: string) {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/blogs/fetch-blogs/${blog._id}/comment`,
        { comment },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.data.ok) {
        fetchBlog();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="w-[90%] m-auto mt-8">
      {isLoading ? (
        <Spinner />
      ) : (
        <BlogDetail
          key={blog._id}
          title={blog.title}
          comments={blog.comments}
          content={blog.content}
          likes={blog.likes}
          id={blog._id}
          createdAt={blog.createdAt}
          addComment={addComment}
        />
      )}
    </div>
  );
}
