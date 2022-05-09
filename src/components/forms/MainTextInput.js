const MainTextInput = (props) => {
  return (
    <>
      <div className="my-2">
        {props.label ? <label>{props.label}</label> : null}
        <input
          value={props.value}
          type={props.type}
          onChange={props.onChange}
          id={props.id}
          className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full my-1 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent`}
          name={props.name}
          autoComplete={"off"}
          placeholder={props.placeholder}
        />
        {props.errorMsg ? (
          <p className={"text-red-500 text-xs"}>{props.errorMsg}</p>
        ) : null}
      </div>
    </>
  );
};
export default MainTextInput;
