import MainButton from "../buttons/MainButton";
import { useHistory } from "react-router-dom";
const MainFreelancerDisplay = ({ freelancer }) => {
  const history = useHistory();

  return (
    <>
      <div>
        <div>
          <img
            className="object-cover rounded-t-lg w-full h-48 md:h-72"
            src={
              "https://www.exova.id/storage/users/231/products/61f3fafdc983c/1280/1643380250-54.jpg"
            }
            alt="Freelancer Image"
          />
        </div>
        <div className="p-4 border border-gray-300 rounded-b-lg">
          <div>
            <h1 className="text-xl font-medium text-blue-500">
              Paket Foto Liburan
            </h1>
            <div className="mt-2">
              <span className="text-black font-medium text-base">
                Fotografer
              </span>
            </div>
            <div>
              <span className="text-sm font-light text-gray-400">
                <i className="fa-solid fa-location-dot"></i> 1.5km
              </span>
            </div>
          </div>
          <div className="mt-4">
            <MainButton
              onClick={() => {
                history.push("/freelancers/slug");
              }}
              className="w-full"
              label="Lihat freelancer"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default MainFreelancerDisplay;
