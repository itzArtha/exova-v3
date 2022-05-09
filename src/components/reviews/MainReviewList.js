import MainReview from "./MainReview";

const MainReviewList = ({ reviews }) => {
  const getReviewLists = () => {
    return reviews.map((review, key) => (
      <MainReview key={key} review={review} />
    ));
  };
  return <>{getReviewLists()}</>;
};
export default MainReviewList;
