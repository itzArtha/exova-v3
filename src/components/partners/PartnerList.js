import MainComponent from "./MainComponent";

const PartnerList = ({ partnersLogo }) => {
  const getAllPartnersLogo = () => {
    return partnersLogo.map((partnerLogo, key) => (
      <MainComponent key={key} image={partnerLogo} />
    ));
  };

  return <>{getAllPartnersLogo()}</>;
};
export default PartnerList;
