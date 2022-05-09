import MainButton from "../buttons/MainButton";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
const MainProduct = ({ product }) => {
  const history = useHistory();
  const [isWishlist, setWishlist] = useState(product.isWishlist);

  const handleToast = () => {
    isWishlist
      ? toast("Mmm! dah aku hapus ya!", {
          icon: "💔",
        })
      : toast("Aww! udah aku tambah di wishlist ya!", {
          icon: "❤️",
          style: {
            borderRadius: "10px",
            background: "#3b82f6",
            color: "#fff",
          },
        });
  };

  const handleWishlist = () => {
    setWishlist(!isWishlist);
    handleToast();
  };

  return (
    <>
      <div className={"relative"}>
        <div
          onClick={() => {
            handleWishlist();
          }}
          className={
            "py-1 px-2 bg-gray-100 rounded-lg absolute right-0 m-2 cursor-pointer"
          }
        >
          <i
            className={`${
              isWishlist ? "fa-solid text-red-500" : "fa-regular"
            } fa-heart`}
          ></i>
        </div>
        <div>
          <img
            className="object-cover rounded-t-lg w-full h-48 md:h-72"
            src={
              "https://www.exova.id/storage/users/231/products/61f3fafdc983c/1280/1643380250-54.jpg"
            }
            alt="Product Image"
          />
        </div>
        <div className="p-4 border border-gray-300 rounded-b-lg">
          <div>
            <h1 className="text-lg">Paket Foto Liburan</h1>
            <div>
              <span className="text-sm text-gray-400">Exova Media</span>
            </div>
            <div className="mt-2">
              <span className="text-red-500">Rp2.000.000</span>
            </div>
          </div>
          <div className="mt-4">
            <MainButton
              onClick={() => {
                history.push("/products/slug");
              }}
              className="w-full"
              label="Lihat detail"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default MainProduct;
