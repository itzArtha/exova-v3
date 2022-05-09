import MainProduct from "./MainProduct";

const MainProductList = ({ products }) => {
  const loadAllProducts = () => {
    return products.map((i, product) => (
      <MainProduct key={i} product={product} />
    ));
  };

  return (
    <>
      <div className={"grid grid-cols-4 gap-2"}>{loadAllProducts()}</div>
    </>
  );
};
export default MainProductList;
