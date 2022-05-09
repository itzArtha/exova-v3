import MainCategory from "./MainCategory";

const MainCategoryList = ({ categories }) => {
  const getAllCategories = () => {
    return categories.map((category, key) => (
      <MainCategory key={key} category={category} />
    ));
  };

  return (
    <>
      <div className={"grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"}>
        {getAllCategories()}
      </div>
    </>
  );
};
export default MainCategoryList;
