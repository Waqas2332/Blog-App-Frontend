import React from "react";
import { SlLike } from "react-icons/sl";

interface BlogDetailProps {
  title?: string;
  content?: string;
  likes?: number;
  comments?: string[];
}

const BlogDetail: React.FC<BlogDetailProps> = ({
  title,
  content,
  likes,
  comments,
}) => {
  return (
    <div className="container mx-auto p-4">
      {/* Blog Title */}
      <h1 className="text-3xl text-center font-bold mb-4">{title}</h1>

      {/* Blog Content */}
      <div
        className="prose max-w-none mb-4"
        dangerouslySetInnerHTML={{ __html: content! }}
      />

      {/* Likes */}
      <div className="flex items-center mb-4 gap-2">
        <SlLike className="cursor-pointer" />
        <span>{likes} Likes</span>
      </div>

      {/* Comments Section */}
      <h2 className="text-xl font-semibold mb-2">Comments</h2>
      {/* Add comment form */}
      <form className="flex items-center">
        <input
          type="text"
          placeholder="Add a comment..."
          className="border border-gray-300 px-3 py-2 rounded-md flex-grow mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Post
        </button>
      </form>
      <div className="mb-4">
        {/* Map over comments and display each comment */}
        {comments!.length <= 0 ? (
          <p className="mt-4">No Comments yet</p>
        ) : (
          comments!.map((comment, index) => (
            <div key={index} className="border border-gray-300 p-3 mb-2">
              <p className="text-gray-800">{comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
