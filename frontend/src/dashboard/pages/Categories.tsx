import { useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "../interfaces";


const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

 const categories: Category[] = [
   {
     id: 1,
     name: "Category1",
     imageUrl: "../../assets/images/image1.jpg",
     subCategories: ["SubCategory 1.1", "SubCategory 1.2", "SubCategory 1.3"],
   },
   {
     id: 2,
     name: "Category2",
     imageUrl: "../../assets/images/image1.jpg",
     subCategories: ["SubCategory 2.1", "SubCategory 2.2", "SubCategory 2.3"],
   },
   {
     id: 3,
     name: "Category3",
     imageUrl: "../../assets/images/image2.jpg",
     subCategories: ["SubCategory 3.1", "SubCategory 3.2", "SubCategory 3.3"],
   },
 ];

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory((prevSelectedCategory) =>
      prevSelectedCategory === categoryId ? null : categoryId
    );
  };

  return (
    <div className="m-3">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`p-4 bg-white shadow rounded-lg cursor-pointer items-center flex flex-col ${
                selectedCategory === category.id
                  ? "shadow-lg bg-gray-300 h-auto"
                  : " h-60"
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {category.name}
              </h2>
              {selectedCategory === category.id && (
                <div className="mt-2">
                  {category.subCategories.map((subcategory) => (
                    <div key={subcategory} className="py-1 space-y-1.5 ">
                      <Link to={`/construct`}>
                        {subcategory}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;


