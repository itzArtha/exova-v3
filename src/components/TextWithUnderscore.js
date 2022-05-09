const TextWithUnderscore = (props) => {
  return (
    <div onClick={props.onClick} className={"cursor-pointer"}>
      <h1
        className={`font-medium text-base ${
          props.initialValue === props.textName
            ? "pb-2 text-black border-b-2 border-blue-500 w-fit"
            : "text-gray-500"
        }`}
      >
        {props.children}
      </h1>
    </div>
  );
};
export default TextWithUnderscore;
