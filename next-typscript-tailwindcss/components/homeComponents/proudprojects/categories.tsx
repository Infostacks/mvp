
const categories = ({ categories, filterItems, currentCategory }) => {
  console.log(currentCategory)
  return (
    <div className="flex flex-wrap xl:flex-row lg:flex-row md:flex-row flex-col xl:gap-8 lg:gap-8 md:gap-8 gap-0 p-0 ">
      {categories.map((category: any, index: any) => {
        return (
          <button
            type="button"
            className={`font-semibold text-sm capitalize py-2 px-5 
            ${
              currentCategory === category
                ? "bg-violet-700 text-white rounded-2xl"
                : "active:text-white active:bg-violet-900"
            }
            hover:bg-violet-700 hover:text-white hover:rounded-2xl`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default categories;