const Stars = ({ starsTotal }) => {
  const getAllStars = (starsTotal) => {
    let starsIndex = 0;
    let allStars = [];
    while (starsIndex < starsTotal) {
      allStars.push(
        <i key={starsIndex} className="fa-solid fa-star text-yellow-400" />
      );
      starsIndex++;
    }
    return allStars;
  };
  return (
    <>
      <span>{getAllStars(starsTotal)}</span>
    </>
  );
};
export default Stars;
