import { AnimatePresence, motion } from "framer-motion";
import MainBackdrop from "./Backdrop";
import SecButton from "../buttons/SecondaryButton";
import MainButton from "../buttons/MainButton";

const OfferModal = ({
  showModal,
  handleClose,
  backTo,
  title,
  onClick,
  children,
  buttonLabel,
  onBackButton,
  buttons = true,
}) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {showModal && (
        <MainBackdrop>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal"
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            variants={dropIn}
          >
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h4 className="text-2xl font-normal">{title}</h4>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={handleClose}
                >
                  <span className="bg-transparent text-black h-6 w-6 text-lg block outline-none focus:outline-none">
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="p-6">{children}</div>
              {/*footer*/}
              {buttons ? (
                <div
                  className={`flex items-center ${
                    backTo !== "" ? "justify-between" : "justify-end"
                  } p-6 border-t border-solid border-blueGray-200 rounded-b gap-2`}
                >
                  {backTo !== "" ? (
                    <SecButton
                      type="button"
                      className="w-1/4"
                      disabled={false}
                      label="Kembali"
                      onClick={onBackButton}
                    />
                  ) : null}
                  <MainButton
                    type="button"
                    disabled={false}
                    label={buttonLabel ? buttonLabel : "Selanjutnya"}
                    className="w-1/4"
                    onClick={onClick}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </motion.div>
        </MainBackdrop>
      )}
    </AnimatePresence>
  );
};
export default OfferModal;
