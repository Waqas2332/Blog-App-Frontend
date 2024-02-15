import { RxMagicWand } from "react-icons/rx";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { toast } from "sonner";

type BlogHeaderProps = {
  preference: boolean;
  setPreference: React.Dispatch<React.SetStateAction<boolean>>;
  fetchBlogs: (api: string) => void;
};

export default function BlogHeader({
  preference,
  setPreference,
  fetchBlogs,
}: BlogHeaderProps) {
  function handlePreferenceClick() {
    if (!preference) {
      setPreference(true);
      fetchBlogs(
        `http://localhost:8000/api/blogs/fetch-blogs?preference=${preference}`
      );
    } else {
      toast.info("Already Personalized");
    }
  }

  function handleAllClick() {
    if (preference) {
      setPreference(false);
      fetchBlogs(`http://localhost:8000/api/blogs/fetch-blogs`);
    } else {
      toast.info("Already all posts");
    }
  }

  return (
    <section className="flex md:w-[50%] w-[90%] justify-between">
      <div
        onClick={handlePreferenceClick}
        className={`flex gap-2 ${
          preference ? "text-buttonBg border-2 border-buttonBg" : ""
        } rounded-md p-1 text-sm justify-center items-center cursor-pointer`}
      >
        <RxMagicWand />
        Personalized
      </div>
      <div
        onClick={handleAllClick}
        className={`flex gap-2 ${
          !preference ? "text-buttonBg border-2 border-buttonBg" : ""
        } rounded-md p-1 text-sm justify-center items-center cursor-pointer`}
      >
        <MdOutlineCloseFullscreen />
        All
      </div>
      <div
        onClick={() => {
          toast.info("Under development");
        }}
        className="flex text-sm gap-2 justify-center items-center cursor-pointer"
      >
        <IoPersonOutline />
        You
      </div>
    </section>
  );
}
