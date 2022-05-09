import { motion } from "framer-motion";
const SecondaryButton = (props) => {
  return (
    <>
      <motion.button
        type={props.type}
        onClick={props.onClick}
        whileHover={{ scale: 1.05 }}
        disabled={props.disabled}
        className={`${props.className} font-medium text-base text-blue-500 bg-blue-50 duration-500 cursor-pointer hover:bg-blue-100 py-2 px-4 rounded-lg`}
      >
        {props.label}
      </motion.button>
    </>
  );
};
export default SecondaryButton;
