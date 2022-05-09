import MainRadioButton from "../forms/MainRadioButton";

const MainRatingList = ({ setWorkReview, workReview, errorMsg, label }) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <div className={"grid grid-cols-5 gap-2"}>
        <MainRadioButton
          value={1}
          onChange={(e) => {
            setWorkReview({ ...workReview, stars: e.target.value });
          }}
          name={"rating"}
          label={"1"}
        />
        <MainRadioButton
          value={2}
          onChange={(e) => {
            setWorkReview({ ...workReview, stars: e.target.value });
          }}
          name={"rating"}
          label={"2"}
        />
        <MainRadioButton
          value={3}
          onChange={(e) => {
            setWorkReview({ ...workReview, stars: e.target.value });
          }}
          name={"rating"}
          label={"3"}
        />
        <MainRadioButton
          value={4}
          onChange={(e) => {
            setWorkReview({ ...workReview, stars: e.target.value });
          }}
          name={"rating"}
          label={"4"}
        />
        <MainRadioButton
          value={5}
          onChange={(e) => {
            setWorkReview({ ...workReview, stars: e.target.value });
          }}
          name={"rating"}
          label={"5"}
        />
      </div>
      {errorMsg ? <p className={"text-red-500 text-xs"}>{errorMsg}</p> : null}
    </>
  );
};
export default MainRatingList;
