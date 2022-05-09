import MainButton from "../buttons/MainButton";
import SecondaryButton from "../buttons/SecondaryButton";

const SecondaryPricing = ({ keys, pricing }) => {
  return (
    <>
      <div
        className={`p-4 bg-white border border-gray-200 rounded-lg ${
          keys === 1 ? "bg-blue-500" : ""
        }`}
      >
        <div className={"flex justify-between"}>
          <div>
            <h2
              className={`my-1 font-medium text-lg ${
                keys === 1 ? "text-white" : "text-black"
              }`}
            >
              Startup
            </h2>
            <h1
              className={`my-1 font-medium text-2xl ${
                keys === 1 ? "text-white" : "text-black"
              }`}
            >
              Rp. 1,200,000
            </h1>
          </div>
          <div className={"my-auto"}>
            <span className={`${keys === 1 ? "text-white" : "text-black"}`}>
              A
            </span>
          </div>
        </div>
        <div className={"border-b my-4"} />
        <div>
          <p className={`${keys === 1 ? "text-white" : "text-black"}`}>
            ....Feature
          </p>
        </div>
        <div className={"mt-12"}>
          {keys === 1 ? (
            <SecondaryButton className={"w-full"} label={"Pilih paket"} />
          ) : (
            <MainButton className={"w-full"} label={"Pilih paket"} />
          )}
        </div>
      </div>
    </>
  );
};
export default SecondaryPricing;
