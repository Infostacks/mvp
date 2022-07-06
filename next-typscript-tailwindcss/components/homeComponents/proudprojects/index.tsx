import React, { useState } from "react";
import Menu from "./menu";
import Categories from "./categories";
import { proudeProjects } from "../../utils/data";

const allCategories = [
  "all",
  ...new Set(proudeProjects.map((item) => item.category)),
];

const proudprojects = () => {
  const [menuItems, setMenuItems] = useState(proudeProjects);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(proudeProjects);
      return;
    }
    const newItems = proudeProjects.filter(
      (item) => item.category === category
    );
    setMenuItems(newItems);
  };

  return (
    <main className="">
      <section className="flex flex-col justify-center items-center gap-5">
        <div className="rounded-xl px-8 py-3 bg-violet-100 text-violet-500 font-semibold">
          <h2>Proud Projects</h2>
        </div>
        <div className="rounded-xl px-8 py-3 bg-violet-100 text-violet-500">
          <Categories categories={categories} filterItems={filterItems} />
        </div>
        <div className="">
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
};

export default proudprojects;
