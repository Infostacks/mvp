

const categories = ({ categories, filterItems }) => {
  return (
    <div className="flex flex-wrap gap-8 p-0">
      {categories.map((category: any, index:any) => {
        return (
          <button
            type="button"
            className="font-semibold text-sm capitalize py-2 px-5 hover:bg-violet-700 hover:text-white hover:rounded-2xl"
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