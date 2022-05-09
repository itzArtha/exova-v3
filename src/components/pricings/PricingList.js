import SecondaryPricing from "./SecondaryPricing";

const PricingList = ({ pricings }) => {
  const loadLAllPricing = () => {
    return pricings.map((pricing, i) => (
      <SecondaryPricing keys={i} pricing={pricing} />
    ));
  };
  return (
    <div className={"grid grid-cols-3 gap-4 mx-8"}>{loadLAllPricing()}</div>
  );
};
export default PricingList;
