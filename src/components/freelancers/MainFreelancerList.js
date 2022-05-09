import MainFreelancerDisplay from "./MainFreelancerDisplay";
import { useState } from "react";

const MainFreelancerList = ({ freelancers }) => {
  const [freelancersData, setFreelancers] = useState(freelancers);
  const getAllList = () => {
    return freelancersData.map((freelancer, i) => (
      <MainFreelancerDisplay key={i} freelancer={freelancer} />
    ));
  };

  return (
    <>
      <div className={"grid grid-cols-4 gap-2"}>{getAllList()}</div>
    </>
  );
};
export default MainFreelancerList;
