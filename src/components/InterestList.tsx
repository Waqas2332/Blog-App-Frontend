import { useState } from "react";
import {
  MdBiotech,
  MdOutlineHealthAndSafety,
  MdOutlineFoodBank,
  MdOutlineLocalMovies,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { GiBallerinaShoes, GiBookshelf, GiMusicalNotes } from "react-icons/gi";

type Category = {
  name: string;
  icon: JSX.Element;
};

export default function InterestList() {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const commonCategories: Category[] = [
    { name: "Technology", icon: <MdBiotech /> },
    { name: "Health", icon: <MdOutlineHealthAndSafety /> },
    { name: "Travel", icon: <SiYourtraveldottv /> },
    { name: "Food", icon: <MdOutlineFoodBank /> },
    { name: "Fashion", icon: <GiBallerinaShoes /> },
    { name: "Books", icon: <GiBookshelf /> },
    { name: "Movies", icon: <MdOutlineLocalMovies /> },
    { name: "Music", icon: <GiMusicalNotes /> },
    { name: "Sports", icon: <MdOutlineSportsVolleyball /> },
  ];

  const toggleCategory = (index: number) => {
    if (selectedCategories.includes(index)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== index)
      );
    } else {
      setSelectedCategories([...selectedCategories, index]);
    }
  };

  const isCategorySelected = (index: number) => {
    return selectedCategories.includes(index);
  };

  return (
    <section className="font-bodyFont w-[90%] m-auto flex flex-col items-center pt-8">
      <div className="text-center">
        <h2 className="text-3xl">
          Welcome to <span className="font-headingFont">Insightful Pages</span>
        </h2>
        <p className="capitalize">
          Choose your interests and personalize your feed with topics you love
        </p>
      </div>
      <div className="flex gap-2 flex-wrap justify-center w-[100%] mt-8">
        {commonCategories.map((category, index) => (
          <div
            key={index}
            className={`w-[370px] h-16 border-4 cursor-pointer hover:shadow-lg border-buttonBg flex justify-center items-center mb-4 rounded-md ${
              isCategorySelected(index) ? "bg-gray-200" : ""
            }`}
            onClick={() => toggleCategory(index)}
          >
            <p className="flex w-[80%] m-auto justify-between">
              {category.name}{" "}
              <span className="text-2xl text-buttonBg">{category.icon}</span>{" "}
            </p>
          </div>
        ))}
      </div>
      <div>
        <button className="btn w-20 mb-8">Done</button>
      </div>
    </section>
  );
}
