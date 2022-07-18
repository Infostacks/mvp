import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import { proudProjects } from "../../utils/data";

const allCategories = [
  "all",
  ...new Set(proudProjects.map((item) => item.category)),
];

const proudprojects = () => {
  const [menuItems, setMenuItems] = useState(proudProjects);
  const [categories, setCategories] = useState(allCategories);
  const [currentCat, setCurrentCat] = useState("all")

  const filterItems = (category) => {
    setCurrentCat(category);
    if (category === "all") {
      setMenuItems(proudProjects);
      return;
    }
    const newItems = proudProjects.filter(
      (item) => item.category === category
    );
    setMenuItems(newItems);
    console.log("menue items: ", menuItems)
  };

  return (
    <main className="">
      <section className="flex flex-col justify-center items-center w-full gap-5">
        <div className="rounded-xl px-8 py-3 bg-violet-100 text-violet-500 font-semibold">
          <h2>Proud Projects</h2>
        </div>
        <div className="rounded-xl px-8 py-3 xl:mx-40 lg:mx-40 md:mx-40 mx-10 bg-violet-100 text-violet-500">
          <Categories categories={categories} filterItems={filterItems} currentCategory={currentCat} />
        </div>
        <div className="">
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
};

export default proudprojects;
