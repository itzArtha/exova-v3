import MainTextInput from "../forms/MainTextInput";

const ResultOffer = ({ offerDetail, setEndAtCallback, setStartAtCallback }) => {
  return (
    <>
      <div className={"flex justify-center gap-2"}>
        <div>
          <MainTextInput
            errorMsg={offerDetail.projectStartAtErrorMsg}
            value={offerDetail.projectStartAt}
            onChange={(e) => {
              setStartAtCallback({
                projectStartAt: e.target.value,
              });
            }}
            className={"w-full"}
            type={"date"}
            label={"Tanggal mulai"}
          />
        </div>
        <div>
          <MainTextInput
            errorMsg={offerDetail.projectEndAtErrorMsg}
            value={offerDetail.projectEndAt}
            onChange={(e) => {
              setEndAtCallback({
                projectEndAt: e.target.value,
              });
            }}
            className={"w-full"}
            type={"date"}
            label={"Tanggal berakhir"}
          />
        </div>
      </div>
    </>
  );
};
export default ResultOffer;
