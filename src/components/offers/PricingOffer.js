import MainTextInput from "../forms/MainTextInput";

const PricingOffer = ({ setPriceCallback, offerDetail }) => {
  const handlePriceChange = (e) => {
    setPriceCallback({ projectPrice: e.target.value });
  };

  return (
    <>
      <MainTextInput
        errorMsg={offerDetail.projectPriceErrorMsg}
        value={offerDetail.projectPrice}
        onChange={(e) => {
          handlePriceChange(e);
        }}
        label={"Harga pengajuan"}
        placeholder={"Rp100.000"}
      />
    </>
  );
};
export default PricingOffer;
